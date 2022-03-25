use actix_cors::Cors;
use actix_web::{App, HttpServer};
use anyhow::Result;

pub mod config;

use crate::config::setting::SETTINGS;

pub async fn run_server() -> Result<()> {
    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_methods(vec!["GET", "POST"])
            .max_age(3600);

        App::new()
            .wrap(cors)

    })
    .bind(format!(
        "{}:{}",
        SETTINGS.application.host, SETTINGS.application.port
    ))?
    .run()
    .await?;

    Ok(())
}
