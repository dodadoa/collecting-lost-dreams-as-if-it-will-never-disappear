use once_cell::sync::Lazy;
use serde::Deserialize;
use serde_aux::field_attributes::deserialize_number_from_string;
use std::str::FromStr;

use crate::config::environment::Environment;

#[derive(Deserialize, Clone)]
pub struct ApplicationSettings {
    #[serde(deserialize_with = "deserialize_number_from_string")]
    pub port: u16,
    pub host: String,
}

#[derive(Deserialize, Clone)]
pub struct BlockchainSettings {
    pub http: String,
    pub ws: String,
}

#[derive(Deserialize, Clone)]
pub struct WebsocketSettings {
    #[serde(deserialize_with = "deserialize_number_from_string")]
    pub port: u16,
    pub host: String,
}

#[derive(Deserialize, Clone)]
pub struct Settings {
    pub application: ApplicationSettings,
    pub blockchain: BlockchainSettings,
    pub websocket: WebsocketSettings,
}

pub fn get_configuration(environment: String) -> Result<Settings, config::ConfigError> {
    let mut settings = config::Config::default();
    let base_path = std::env::current_dir().expect("Failed to determine the current directory");
    let configuration_directory = base_path.join("config");

    settings.merge(config::File::from(configuration_directory.join("base")).required(true))?;

    let environment: Environment =
        Environment::from_str(environment.as_str()).expect("Failed to parse environment.");

    settings.merge(
        config::File::from(configuration_directory.join(environment.to_string())).required(true),
    )?;

    settings.merge(config::Environment::with_prefix("app").separator("__"))?;
    settings.try_into()
}

pub fn get_settings() -> Settings {
    let environment = std::env::var("APP_ENVIRONMENT").unwrap();

    get_configuration(environment).expect("Failed to read configuration.")
}

pub fn get_environment() -> Environment {
    let env_string = std::env::var("APP_ENVIRONMENT").unwrap();
    Environment::from_str(env_string.as_str()).expect("Failed to parse environment.")
}

pub static SETTINGS: Lazy<Settings> = Lazy::new(get_settings);
