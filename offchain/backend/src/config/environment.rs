use strum_macros::EnumString;

#[derive(PartialEq, Debug, EnumString, strum_macros::Display)]
pub enum Environment {
    #[strum(serialize = "local")]
    Local,

    #[strum(serialize = "testnet")]
    Testnet,

    #[strum(serialize = "mainnet")]
    Mainnet,

    #[strum(serialize = "test")]
    Test,
}
