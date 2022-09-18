//! # The Acid Programming Language
//! 
//! ⚠️ 🧪WARNING: Highly corrosive!⚗️ ⚠️
//! 
//! ```text
//!  ▄▄▄       ▄████▄   ██▓▓████▄ 
//! ▒████▄    ▒██▀ ▀█  ▓██▒▒██▀ █▌
//! ▒██  ▀█▄  ▒▓█    ▄ ▒██▒░██   █▌
//! ░██▄▄▄▄██ ▒▓▓▄ ▄██▒░██░░▓█▄   █
//!  ▓█   ▓██▒▒ ▓███▀ ░░██░░▒████▓ 
//!  ▒▒   ▓▒█░░ ░▒ ▒  ░░▓   ▒▒▓  ▒ 
//!   ▒   ▒▒ ░  ░  ▒    ▒ ░ ░ ▒  ▒ 
//!   ░   ▒   ░         ▒ ░ ░ ░  ░ 
//!       ░  ░░ ░       ░     ░    
//!           ░             ░      
//! ```
//! 
//! This crate implements a compiler for the Acid programming language
//! and it's low level virtual machine.
//! 
//! ## Stages of IR
//! 
//! Here are the current stages of IR:
//! 
//! 1. LIR (Lower Intermediate Representation)
//! 2. Core / Standard Assembly (an assembly language for the VM)
//! 3. Core / Standard Virtual Machine Code (which is built for a given target)
//! 
//! ## Backend
//! 
//! This compiler is unique in the way that it handles portability.
//! The language's backend is split in two: the Core variant, and the
//! Standard variant. The Core variant is guaranteed to compile to all
//! targets, and the Standard variant is akin to a standard library of
//! instructions (which are implemented for most targets).
//! 
//! This makes Acid uniquely equipped to compile to very limited arcitectures:
//! **the Core instruction set for the virtual machine is *almost guaranteed*
//! to be a subset of most CPU architectures.**


pub mod asm;
pub mod lir;
pub mod parse;
pub mod targets;
pub mod vm;

/// The value of the NULL pointer constant.
///
/// I've chosen to use the smallest value that can be expressed by an 8-bit signed integer.
/// This is because I want to make sure that this works with 8-bit machines as well.
/// The value of this constant might change in the future though.
pub const NULL: isize = i8::MIN as isize;

/// The tagline for the language.
pub const TAGLINE: &str = "⚠️ 🧪WARNING: Highly corrosive!⚗️ ⚠️";

/// The UNICODE character art for the logo of the language.
pub const LOGO: &str = "
 ▄▄▄       ▄████▄   ██▓▓████▄ 
▒████▄    ▒██▀ ▀█  ▓██▒▒██▀ █▌
▒██  ▀█▄  ▒▓█    ▄ ▒██▒░██   █▌
░██▄▄▄▄██ ▒▓▓▄ ▄██▒░██░░▓█▄   █
 ▓█   ▓██▒▒ ▓███▀ ░░██░░▒████▓ 
 ▒▒   ▓▒█░░ ░▒ ▒  ░░▓   ▒▒▓  ▒ 
  ▒   ▒▒ ░  ░  ▒    ▒ ░ ░ ▒  ▒ 
  ░   ▒   ░         ▒ ░ ░ ░  ░ 
      ░  ░░ ░       ░     ░    
          ░             ░      ";

/// The UNICODE character art for the logo of the language, using ANSI escape codes for color.
pub const LOGO_WITH_COLOR: &str = "
 \x1b[32m▄▄▄       ▄████▄   ██\x1b[35m▓▓\x1b[32m████▄ 
\x1b[35m▒\x1b[32m████▄    \x1b[35m▒\x1b[32m██▀ ▀█  \x1b[35m▓\x1b[32m██\x1b[35m▒▒\x1b[32m██▀ █▌
\x1b[35m▒\x1b[32m██  \x1b[32m▀█▄  \x1b[35m▒\x1b[32m▓\x1b[32m█    ▄ \x1b[35m▒\x1b[32m██\x1b[35m▒░\x1b[32m██   █▌
\x1b[35m░\x1b[32m██▄▄▄▄██ \x1b[35m▒\x1b[32m▓▓▄ ▄██\x1b[35m▒░\x1b[32m██\x1b[35m░░\x1b[32m▓█▄   █
 ▓\x1b[32m█   ▓\x1b[32m██\x1b[35m▒▒ ▓\x1b[32m███▀ \x1b[35m░░\x1b[32m██\x1b[35m░░▒\x1b[32m████▓\x1b[35m 
 \x1b[35m▒▒   ▓▒\x1b[32m█\x1b[35m░░ ░\x1b[35m▒ ▒  \x1b[35m░░\x1b[35m▓   ▒▒▓  \x1b[35m▒
  ▒   ▒▒ ░  ░  ▒    ▒ ░ ░ ▒  ▒ 
  ░   ▒   ░         ▒ ░ ░ ░  ░ 
      ░  ░░ ░       ░     ░    
          ░             ░      \x1b[0m";
