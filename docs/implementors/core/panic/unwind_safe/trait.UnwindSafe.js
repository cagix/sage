(function() {var implementors = {
<<<<<<< HEAD
"sage":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/asm/core/struct.CoreProgram.html\" title=\"struct sage::asm::core::CoreProgram\">CoreProgram</a>",1,["sage::asm::core::CoreProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/core/enum.CoreOp.html\" title=\"enum sage::asm::core::CoreOp\">CoreOp</a>",1,["sage::asm::core::CoreOp"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/location/enum.Location.html\" title=\"enum sage::asm::location::Location\">Location</a>",1,["sage::asm::location::Location"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/asm/std/struct.StandardProgram.html\" title=\"struct sage::asm::std::StandardProgram\">StandardProgram</a>",1,["sage::asm::std::StandardProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/std/enum.StandardOp.html\" title=\"enum sage::asm::std::StandardOp\">StandardOp</a>",1,["sage::asm::std::StandardOp"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/enum.Error.html\" title=\"enum sage::asm::Error\">Error</a>",1,["sage::asm::Error"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Env.html\" title=\"struct sage::lir::Env\">Env</a>",1,["sage::lir::env::Env"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.CoreBuiltin.html\" title=\"struct sage::lir::CoreBuiltin\">CoreBuiltin</a>",1,["sage::lir::expr::builtin::CoreBuiltin"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.StandardBuiltin.html\" title=\"struct sage::lir::StandardBuiltin\">StandardBuiltin</a>",1,["sage::lir::expr::builtin::StandardBuiltin"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.ConstExpr.html\" title=\"enum sage::lir::ConstExpr\">ConstExpr</a>",1,["sage::lir::expr::const_expr::ConstExpr"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Expr.html\" title=\"enum sage::lir::Expr\">Expr</a>",1,["sage::lir::expr::expression::Expr"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Procedure.html\" title=\"struct sage::lir::Procedure\">Procedure</a>",1,["sage::lir::expr::procedure::Procedure"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Arithmetic.html\" title=\"enum sage::lir::Arithmetic\">Arithmetic</a>",1,["sage::lir::expr::ops::arithmetic::Arithmetic"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Comparison.html\" title=\"enum sage::lir::Comparison\">Comparison</a>",1,["sage::lir::expr::ops::comparison::Comparison"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Put.html\" title=\"enum sage::lir::Put\">Put</a>",1,["sage::lir::expr::ops::unary::Put"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Assign.html\" title=\"struct sage::lir::Assign\">Assign</a>",1,["sage::lir::expr::ops::assign::Assign"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.And.html\" title=\"struct sage::lir::And\">And</a>",1,["sage::lir::expr::ops::logic::And"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Or.html\" title=\"struct sage::lir::Or\">Or</a>",1,["sage::lir::expr::ops::logic::Or"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Not.html\" title=\"struct sage::lir::Not\">Not</a>",1,["sage::lir::expr::ops::logic::Not"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Pattern.html\" title=\"enum sage::lir::Pattern\">Pattern</a>",1,["sage::lir::expr::pattern::Pattern"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Type.html\" title=\"enum sage::lir::Type\">Type</a>",1,["sage::lir::types::Type"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Error.html\" title=\"enum sage::lir::Error\">Error</a>",1,["sage::lir::Error"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/targets/c/struct.C.html\" title=\"struct sage::targets::c::C\">C</a>",1,["sage::targets::c::C"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.CoreProgram.html\" title=\"struct sage::vm::CoreProgram\">CoreProgram</a>",1,["sage::vm::core::CoreProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/vm/enum.CoreOp.html\" title=\"enum sage::vm::CoreOp\">CoreOp</a>",1,["sage::vm::core::CoreOp"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.StandardProgram.html\" title=\"struct sage::vm::StandardProgram\">StandardProgram</a>",1,["sage::vm::std::StandardProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/vm/enum.StandardOp.html\" title=\"enum sage::vm::StandardOp\">StandardOp</a>",1,["sage::vm::std::StandardOp"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.CoreInterpreter.html\" title=\"struct sage::vm::CoreInterpreter\">CoreInterpreter</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,</span>",1,["sage::vm::interpreter::core::CoreInterpreter"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.StandardInterpreter.html\" title=\"struct sage::vm::StandardInterpreter\">StandardInterpreter</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,</span>",1,["sage::vm::interpreter::std::StandardInterpreter"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.TestingDevice.html\" title=\"struct sage::vm::TestingDevice\">TestingDevice</a>",1,["sage::vm::interpreter::TestingDevice"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.StandardDevice.html\" title=\"struct sage::vm::StandardDevice\">StandardDevice</a>",1,["sage::vm::interpreter::StandardDevice"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/vm/enum.Error.html\" title=\"enum sage::vm::Error\">Error</a>",1,["sage::vm::Error"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.Axis.html\" title=\"enum sage::io::Axis\">Axis</a>",1,["sage::io::Axis"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.Direction.html\" title=\"enum sage::io::Direction\">Direction</a>",1,["sage::io::Direction"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.Color.html\" title=\"enum sage::io::Color\">Color</a>",1,["sage::io::Color"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.InputMode.html\" title=\"enum sage::io::InputMode\">InputMode</a>",1,["sage::io::InputMode"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.OutputMode.html\" title=\"enum sage::io::OutputMode\">OutputMode</a>",1,["sage::io::OutputMode"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/io/struct.Channel.html\" title=\"struct sage::io::Channel\">Channel</a>",1,["sage::io::Channel"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/io/struct.Input.html\" title=\"struct sage::io::Input\">Input</a>",1,["sage::io::Input"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/io/struct.Output.html\" title=\"struct sage::io::Output\">Output</a>",1,["sage::io::Output"]]]
=======
"sage":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/asm/core/struct.CoreProgram.html\" title=\"struct sage::asm::core::CoreProgram\">CoreProgram</a>",1,["sage::asm::core::CoreProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/core/enum.CoreOp.html\" title=\"enum sage::asm::core::CoreOp\">CoreOp</a>",1,["sage::asm::core::CoreOp"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/location/enum.Location.html\" title=\"enum sage::asm::location::Location\">Location</a>",1,["sage::asm::location::Location"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/asm/std/struct.StandardProgram.html\" title=\"struct sage::asm::std::StandardProgram\">StandardProgram</a>",1,["sage::asm::std::StandardProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/std/enum.StandardOp.html\" title=\"enum sage::asm::std::StandardOp\">StandardOp</a>",1,["sage::asm::std::StandardOp"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/asm/enum.Error.html\" title=\"enum sage::asm::Error\">Error</a>",1,["sage::asm::Error"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Env.html\" title=\"struct sage::lir::Env\">Env</a>",1,["sage::lir::env::Env"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.CoreBuiltin.html\" title=\"struct sage::lir::CoreBuiltin\">CoreBuiltin</a>",1,["sage::lir::expr::builtin::CoreBuiltin"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.StandardBuiltin.html\" title=\"struct sage::lir::StandardBuiltin\">StandardBuiltin</a>",1,["sage::lir::expr::builtin::StandardBuiltin"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.ConstExpr.html\" title=\"enum sage::lir::ConstExpr\">ConstExpr</a>",1,["sage::lir::expr::const_expr::ConstExpr"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Expr.html\" title=\"enum sage::lir::Expr\">Expr</a>",1,["sage::lir::expr::expression::Expr"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Procedure.html\" title=\"struct sage::lir::Procedure\">Procedure</a>",1,["sage::lir::expr::procedure::Procedure"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Arithmetic.html\" title=\"enum sage::lir::Arithmetic\">Arithmetic</a>",1,["sage::lir::expr::ops::arithmetic::Arithmetic"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Comparison.html\" title=\"enum sage::lir::Comparison\">Comparison</a>",1,["sage::lir::expr::ops::comparison::Comparison"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Put.html\" title=\"enum sage::lir::Put\">Put</a>",1,["sage::lir::expr::ops::unary::Put"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Assign.html\" title=\"struct sage::lir::Assign\">Assign</a>",1,["sage::lir::expr::ops::assign::Assign"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.And.html\" title=\"struct sage::lir::And\">And</a>",1,["sage::lir::expr::ops::logic::And"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Or.html\" title=\"struct sage::lir::Or\">Or</a>",1,["sage::lir::expr::ops::logic::Or"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/lir/struct.Not.html\" title=\"struct sage::lir::Not\">Not</a>",1,["sage::lir::expr::ops::logic::Not"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Type.html\" title=\"enum sage::lir::Type\">Type</a>",1,["sage::lir::types::Type"]],["impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/lir/enum.Error.html\" title=\"enum sage::lir::Error\">Error</a>",1,["sage::lir::Error"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/targets/c/struct.C.html\" title=\"struct sage::targets::c::C\">C</a>",1,["sage::targets::c::C"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.CoreProgram.html\" title=\"struct sage::vm::CoreProgram\">CoreProgram</a>",1,["sage::vm::core::CoreProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/vm/enum.CoreOp.html\" title=\"enum sage::vm::CoreOp\">CoreOp</a>",1,["sage::vm::core::CoreOp"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.StandardProgram.html\" title=\"struct sage::vm::StandardProgram\">StandardProgram</a>",1,["sage::vm::std::StandardProgram"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/vm/enum.StandardOp.html\" title=\"enum sage::vm::StandardOp\">StandardOp</a>",1,["sage::vm::std::StandardOp"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.CoreInterpreter.html\" title=\"struct sage::vm::CoreInterpreter\">CoreInterpreter</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,</span>",1,["sage::vm::interpreter::core::CoreInterpreter"]],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.StandardInterpreter.html\" title=\"struct sage::vm::StandardInterpreter\">StandardInterpreter</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,</span>",1,["sage::vm::interpreter::std::StandardInterpreter"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.TestingDevice.html\" title=\"struct sage::vm::TestingDevice\">TestingDevice</a>",1,["sage::vm::interpreter::TestingDevice"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/vm/struct.StandardDevice.html\" title=\"struct sage::vm::StandardDevice\">StandardDevice</a>",1,["sage::vm::interpreter::StandardDevice"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/vm/enum.Error.html\" title=\"enum sage::vm::Error\">Error</a>",1,["sage::vm::Error"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.Axis.html\" title=\"enum sage::io::Axis\">Axis</a>",1,["sage::io::Axis"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.Direction.html\" title=\"enum sage::io::Direction\">Direction</a>",1,["sage::io::Direction"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.Color.html\" title=\"enum sage::io::Color\">Color</a>",1,["sage::io::Color"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.InputMode.html\" title=\"enum sage::io::InputMode\">InputMode</a>",1,["sage::io::InputMode"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"sage/io/enum.OutputMode.html\" title=\"enum sage::io::OutputMode\">OutputMode</a>",1,["sage::io::OutputMode"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/io/struct.Channel.html\" title=\"struct sage::io::Channel\">Channel</a>",1,["sage::io::Channel"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/io/struct.Input.html\" title=\"struct sage::io::Input\">Input</a>",1,["sage::io::Input"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"sage/io/struct.Output.html\" title=\"struct sage::io::Output\">Output</a>",1,["sage::io::Output"]]]
>>>>>>> main
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()