// fn main() {
//     println!("Howdy!");
// }
use std::ffi::CStr;

#[no_mangle]
pub extern "C" fn print_stuff(str_ptr: *const i8) {
    let my_str: &str;
    unsafe {
        my_str = CStr::from_ptr(str_ptr).to_str().expect("The string could not be parsed");
    }
    println!("my_str: {}", my_str)
}