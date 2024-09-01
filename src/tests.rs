use sage::frontend::nom_parse::*;

fn main() {
    // env_logger::builder().filter_level(log::LevelFilter::Trace).init();
    // env_logger::builder().filter_level(log::LevelFilter::Debug).init();
    // env_logger::builder().filter_level(log::LevelFilter::Info).init();
    match compile_and_run(r#"
/*
mod std {
    mod io {
        fun putln<T>(x: T) {
            print(x);
            print('\n');
        }
    
        fun putchar(c: Char) {
            print(c);
        }

        fun getchar(): Char {
            let mut ch = ' ';
            input(&mut ch);
            return ch;
        }

        impl Char {
            fun put(&self) {
                putchar(*self);
            }

            fun get(): Char {
                return getchar();
            }
        }
    }

    mod testing {
        from io import putln;

        const TESTING = 5;

        struct Point {
            x: Float,
            y: Float,
        }
        
        impl Point {
            fun new(x: Float, y: Float): Point {
                return {x=x, y=y};
            }
        
            fun move(&mut self, dx: Float, dy: Float) {
                self.x += dx;
                self.y += dy;
            }
        }
        
        fun test() {
            println(TESTING);
        }
    }

    mod math {
        from testing import TESTING, test;

        fun cos(x: Float): Float {
            println(TESTING, " from math");
            test();
            return 1.0 - x * x / 2.0 + x * x * x * x / 24.0;
        }

        fun sin(x: Float): Float {
            return x - x * x * x / 6.0 + x * x * x * x * x / 120.0;
        }

        fun tan(x: Float): Float {
            return x + x * x * x / 3.0 + 2.0 * x * x * x * x * x / 15.0;
        }
    }

}

from std.io import putln as p;
from std.testing import Point, test;

fun main() {
    test();
    
    p<Char>('!');
    let mut x = Point.new(5.0, 6.0);
    p<Point>(x);
    x.move(1.0, 2.0);
    
    p<Point>(x);
    
    test();
}

main();
*/

mod std {
    mod math {
        // Calculate the greatest common divisor of two numbers using Euclid's algorithm
        fun gcd(a: Int, b: Int): Int {
            if b == 0 {
                return a;
            }
            return gcd(b, a % b);
        }
    }

    mod io {
        // Import from math just to test
        from math import gcd;

        // Print a character to the screen
        fun putln<T>(x: T) {
            print(x);
            print('\n');
        }

        // Get a character from input
        fun getchar(): Char {
            let mut ch = ' ';
            input(&mut ch);
            return ch;
        }

        // Add these put/get functions as methods to the Char type
        impl Char {
            fun put(&self) { putln<Char>(*self); }

            fun get(): Char { return getchar(); }
        }
    }

    mod fallible {
        fun panic(msg: &Char): ! {
            print("Error: ", msg);
        }

        enum Result<T, E> {
            Ok(T),
            Err(E)
        }

        impl Result<T, E> {
            fun ok(x: T): Result<T, E> {
                return Result<T, E> of Ok(x);
            }

            fun err(x: E): Result<T, E> {
                return Result<T, E> of Err(x);
            }

            fun is_ok(&self): Bool {
                match self {
                    &of Ok(_) => True,
                            _ => False
                }
            }

            fun is_err(&self): Bool {
                !self.is_ok()
            }

            fun unwrap(self): T {
                match self {
                    of Ok(x) => x,
                    _ => panic(&"Oh no, tried to unwrap an error!")
                }
            }
        }

        enum Option<T> {
            Some(T),
            Nothing
        }

        impl Option<T> {
            fun some(x: T): Option<T> {
                return Option<T> of Some(x);
            }

            fun none(): Option<T> {
                return Option<T> of Nothing;
            }

            fun is_some(&self): Bool {
                match self {
                    &of Some(_) => True,
                            _ => False
                }
            }

            fun is_none(&self): Bool {
                !self.is_some()
            }

            fun unwrap(self): T {
                match self {
                    of Some(x) => x,
                    _ => panic(&"Oh no, tried to unwrap a None!")
                }
            }
        }
    }

    // A mod just to test imports some more
    mod testing {
        // Import from a mod which imports from another mod
        from io import getchar;

        fun test() {
            let ch = getchar();
            // Use a method defined in another mod
            ch.put();
        }
    }
}

from std.math import gcd;

println("GCD of 12 and 15 = ", gcd(12, 15));

from std.fallible import Option, Result;

enum Error {
    DivideByZero { numerator: Int },
    Custom(&Char)
}

fun divide(n: Int, d: Int): Option<Int> {
    match d {
        0 => Option<Int> of Nothing,
        _ => Option<Int> of Some(n / d)
    }
}

fun main(): Result<(), Error> {
    println(divide(5, 2));
    println(divide(5, 0));

    return Result<(), Error> of Ok(());
}

println(main());
"#, "hello!!!!") {
        Ok(expr) => {
            // println!("{:#?}", expr)
            // Compile and run
            println!("{}", expr)
        },
        Err(e) => println!("Error: {}", e),
    }
}