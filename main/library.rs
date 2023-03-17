// fn main() {
//     println!("Howdy!");
// }

#[no_mangle]
pub extern "C" fn add (x: f64, y: f64) -> f64 {
    x + y
} 