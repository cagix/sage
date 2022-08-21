mod const_expr;
mod expression;
mod procedure;
mod builtin;


pub use const_expr::*;
pub use expression::*;
pub use procedure::*;
pub use builtin::*;

use super::{Env, Error, GetSize, Simplify, Type, TypeCheck};
use crate::asm::{AssemblyProgram, CoreProgram, StandardProgram};

/// Get the type associated with a value under a given environment.
pub trait GetType {
    /// Get the type associated with a value under a given environment.
    fn get_type(&self, env: &Env) -> Result<Type, Error> {
        self.get_type_checked(env, 0)?.simplify(env)
    }

    /// Get the type of a value under a given environment and check
    /// recursion depth to prevent a possible stack overflow.
    fn get_type_checked(&self, env: &Env, i: usize) -> Result<Type, Error>;
}

impl<T> GetSize for T
where
    T: GetType,
{
    fn get_size_checked(&self, env: &Env, i: usize) -> Result<usize, Error> {
        self.get_type(env)?.get_size_checked(env, i)
    }
}

pub trait Compile: TypeCheck {
    /// Compile the expression into an assembly program.
    ///
    /// On success, this will return an Ok value containing either a successfully
    /// compiled core assembly program, or a fallback standard assembly program.
    ///
    /// On an error, this will return an Err value containing the error.
    fn compile(self) -> Result<Result<CoreProgram, StandardProgram>, Error>
    where
        Self: Sized + Clone,
    {
        self.type_check(&Env::default())?;
        let mut core_asm = CoreProgram(vec![]);
        if self
            .clone()
            .compile_expr(&mut Env::default(), &mut core_asm)
            .is_err()
        {
            let mut std_asm = StandardProgram(vec![]);
            self.compile_expr(&mut Env::default(), &mut std_asm)?;
            Ok(Err(std_asm))
        } else {
            Ok(Ok(core_asm))
        }
    }
    fn compile_expr(self, env: &mut Env, output: &mut dyn AssemblyProgram) -> Result<(), Error>;
}
