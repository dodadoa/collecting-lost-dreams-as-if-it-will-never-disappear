pub use inner::*;
#[cfg(test)]
use mocktopus::macros::mockable;

#[cfg_attr(test, mockable)]
pub mod inner {
    use crate::config::setting::SETTINGS;
    use anyhow::{anyhow, Result};
    use ethers::prelude::{Http, Provider};
    use ethers::providers::Ws;
    use once_cell::sync::OnceCell;
    use std::convert::TryFrom;
    use std::time::Duration;

    static BLOCKCHAIN_PROVIDER_HTTP: OnceCell<Provider<Http>> = OnceCell::new();
    static BLOCKCHAIN_PROVIDER_WS: OnceCell<Provider<Ws>> = OnceCell::new();

    pub fn try_get_provider_http() -> Result<Provider<Http>> {
        let provider = BLOCKCHAIN_PROVIDER_HTTP.get();
        match provider {
            Some(p) => Ok(p.clone()),
            None => Err(anyhow!("Error, cannot get provider")),
        }
    }

    pub fn try_get_provider_ws() -> Result<Provider<Ws>> {
        let provider = BLOCKCHAIN_PROVIDER_WS.get();
        match provider {
            Some(p) => Ok(p.clone()),
            None => Err(anyhow!("Error, cannot get provider")),
        }
    }

    pub async fn initialize() -> anyhow::Result<()> {
        let provider_service_http = Provider::<Http>::try_from(SETTINGS.blockchain.http.clone())?;
        BLOCKCHAIN_PROVIDER_HTTP
            .set(provider_service_http)
            .map_err(|error| return anyhow!("Error initialize: {:?}", error))?;

        let ws = Ws::connect(SETTINGS.blockchain.ws.clone()).await?;
        let provider_service_ws = Provider::new(ws).interval(Duration::from_millis(2000));
        BLOCKCHAIN_PROVIDER_WS
            .set(provider_service_ws)
            .map_err(|error| return anyhow!("Error initialize: {:?}", error))?;

        Ok(())
    }
}
