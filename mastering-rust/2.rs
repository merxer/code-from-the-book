fn main() {
    let target_inferred = "inferred world";
    // these two variables
    let target: &'static str = "no-inferred world";

    println!("Hi there, {}", target_inferred);
    println!("Hi there, {}", target);
}
