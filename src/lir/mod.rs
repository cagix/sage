//! # LIR (Low Intermediate Representation) Module
//!
//! This module contains a decently sized typechecked intermediate representation for the virtual machine.
//! The LIR, unlike the VM and the assembly language, is *not* split into two variants: there is only one variant.
//! The LIR compiler will generate core assembly code *by default* for the LIR, but will revert to the standard
//! variant if unsupported instructions or types are encountered (such as floating point operations or float types).
//!
//! ## Index
//!
//! 1. [Types](./enum.Type.html)
//! 2. [Constants](./enum.ConstExpr.html) and [Expressions](./enum.Expr.html)
//! 3. [Core Builtins](struct.CoreBuiltin.html) and [Standard Builtins](struct.StandardBuiltin.html)
//! 4. [Compilation Errors](./enum.Error.html)

//! ## Purpose
//!
//! The purpose of the LIR is to provide a powerful backend for the next stage of IR. Most of the heavy lifting
//! of the actual compilation process is done by this stage of the compiler: typechecking, constant folding,
//! compiling to assembly, dealing with the two variants of the virtual machine, and so on. The stages of IR
//! above this simply implement features like macros and tagged-unions: very simple things which map 1:1 with
//! generated LIR code.
//!
//! ## Features
//!
//! 1. The Type System
//!
//! LIR's type system is very good for compiling directly to assembly. LIR supports the following types:
//!
//! - None (the void type)
//! - Never (the type of an expression which never returns a value: such as a `return` expression)
//! - Int (a signed integer)
//! - Float (a floating point number)
//! - Bool (a boolean value)
//! - Char (a single character)
//! - Cell (the most basic unit of memory)
//! - Pointer (a pointer to another given type)
//! - Array (an array with elements, with a constant size expression)
//! - Proc (a procedure with a list of arguments and a return type)
//! - Tuple (a tuple with a list of distinct types. this is the product type)
//! - Struct (a tuple with named fields)
//! - Union (a union of types. this is the sum type when combined with a tag)
//! - Enum (an enumeration with a list of variants. this is like a C enum, not a Rust enum)
//! - Let (a type which allows the user to bind a type under a given name in another type expression)
//!
//! The Let type is extremely powerful, allowing users to create recursive types *inline*: without
//! binding them to a name under a LetType expression. Additionally, Let types are checked for equality
//! *structurally*, and this also works for comparing recursive types. There are many examples of this in `tests/lir.rs`.
//!
//! 2. The Constant Folding
//!
//! LIR also provides constant expressions to allow the user to do as much as possible during compile time.
//! This also makes it simpler to do compile-time optimizations.
//!
//! 3. Expressions
//!
//! The expressions that LIR uses to represent the program are very simple, and very powerful.
//! Arrays are kept distinct from Pointers (unlike in C), and so expressions can return stack allocated arrays without a problem.
//! Arrays can also be indexed without a pointer to the array, and so on. LIR supports getting members of tuples, structs,
//! and unions, and also getting their references as well.
//!
//! 4. Compilation Process
//!
//! LIR is designed to be able to compile *as much as possible* to the core variant of the assembly language. As long as you don't
//! use floating point operations or standard builtins (`alloc` and `free`), you can compile to the core variant. Recursive types,
//! *inlined* recursive types, mutually recursive types, recursive functions, and core builtins are all supported without a problem.
//! **The LIR compiler will only use a standard instruction if it has to.**

mod env;
mod expr;
mod types;

pub use env::*;
pub use expr::*;
pub use types::*;

/// Get the size of something in memory (number of cells).
pub trait GetSize {
    /// Get the size of something in memory (number of cells).
    fn get_size(&self, env: &Env) -> Result<usize, Error> {
        self.get_size_checked(env, 0)
    }

    /// Get the size of something in memory, but limit the number of recursive
    /// calls to prevent stack overflow. `i` is a counter to prevent infinite
    /// recursion.
    fn get_size_checked(&self, env: &Env, i: usize) -> Result<usize, Error>;
}

/// Simplify an expression while maintaining structural equality.
pub trait Simplify: Sized {
    /// Simplify an expression while maintaining structural equality.
    fn simplify(self, env: &Env) -> Result<Self, Error> {
        self.simplify_checked(env, 0)
    }

    /// Simplify an expression while maintaining structural equality, but limit
    /// the number of recursive calls to prevent stack overflow. `i` is a
    /// counter to prevent infinite recursion.
    fn simplify_checked(self, env: &Env, i: usize) -> Result<Self, Error>;
}

/// An LIR compilation error.
#[derive(Clone, Debug, PartialEq)]
pub enum Error {
    /// An error caused by trying to assemble invalid code generated by the compiler.
    /// This should be taken seriously, unless the error is due to an invalid handwritten builtin.
    AssemblyError(crate::asm::Error),

    /// The variant of an enum is not defined.
    VariantNotFound(Type, String),
    /// Tried to access an undefined member of a tuple, struct, or union.
    MemberNotFound(Expr, ConstExpr),
    /// Recursion depth exceeded when trying to evaluate a constant expression.
    RecursionDepthConst(ConstExpr),
    /// Recursion depth exceeded when trying to confirm a type's equality to another type.
    RecursionDepthTypeEquality(Type, Type),
    /// Got another type when expecting an integer, bool, or char.
    NonIntegralConst(ConstExpr),
    /// Tried to instantiate a type that cannot be sized.
    /// This is a problem because we cannot manage the stack if we cannot know the size of the type.
    UnsizedType(Type),
    /// Tried to dereference a non-pointer.
    DerefNonPointer(Expr),
    /// Tried to apply a non-procedure to some arguments.
    ApplyNonProc(Expr),
    /// Expected a symbol, but got something else.
    NonSymbol(ConstExpr),
    /// Invalid `Index` expression (incorrect types).
    InvalidIndex(Expr),
    /// Invalid `Refer` expression. The compiler was not able to calculate the address of the expression.
    InvalidRefer(Expr),
    /// Invalid binary operation (add, subtract, and, or) expression (incorrect types).
    InvalidBinop(Expr),

    /// Mismatched types
    MismatchedTypes {
        expected: Type,
        found: Type,
        expr: Expr,
    },

    /// A symbol was used, but not defined.
    SymbolNotDefined(String),
    /// A type was used, but not defined.
    TypeNotDefined(String),

    /// Invalid type casting expression.
    InvalidAs(Expr, Type, Type),
}

/// Create an IR error from an assembly error.
impl From<crate::asm::Error> for Error {
    fn from(e: crate::asm::Error) -> Self {
        Self::AssemblyError(e)
    }
}
