mod uuid_gen;

use std::str::FromStr;

use uuid::{NoContext, Timestamp};
use uuid_gen::{uuid_gen, UuidVersion};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn uuid_generate(vers: &str, js_date: js_sys::Date) -> String {
    let vers = UuidVersion::from_str(vers).unwrap();
    let millis = js_date.get_time() as u64;
    let seconds = millis / 1000;
    let subsec_nanos = (millis % 1000) * 1_000_000;
    uuid_gen(
        &vers,
        Timestamp::from_unix(NoContext, seconds, subsec_nanos as u32),
    )
}
