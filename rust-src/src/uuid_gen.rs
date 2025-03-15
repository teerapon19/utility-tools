use std::str::FromStr;

use uuid::{Timestamp, Uuid};

#[derive(Debug, PartialEq)]
pub enum UuidVersion {
    V4,
    V7,
}

impl FromStr for UuidVersion {
    type Err = ();

    fn from_str(input: &str) -> Result<UuidVersion, Self::Err> {
        match input {
            "V4" => Ok(UuidVersion::V4),
            "V7" => Ok(UuidVersion::V7),
            _ => Err(()),
        }
    }
}

pub fn uuid_gen(vers: &UuidVersion, ts: Timestamp) -> String {
    let uuid = match vers {
        UuidVersion::V4 => Uuid::new_v4(),
        UuidVersion::V7 => Uuid::new_v7(ts),
    };
    uuid.to_string()
}

#[cfg(test)]
mod tests {
    use uuid::NoContext;

    use super::*;

    #[test]
    fn uuid_gen_v4_success() {
        let result = uuid_gen(&UuidVersion::V4, Timestamp::now(NoContext));
        assert_eq!(result.len(), 36)
    }

    #[test]
    fn uuid_gen_v7_success() {
        let result = uuid_gen(&UuidVersion::V7, Timestamp::now(NoContext));
        assert_eq!(result.len(), 36)
    }
}
