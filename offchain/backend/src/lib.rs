use actix_cors::Cors;
use actix_web::{web, App, HttpResponse, HttpServer, Responder};

use anyhow::Result;

pub mod config;
pub mod service;

use crate::config::setting::SETTINGS;

async fn get_products() -> impl Responder {
    HttpResponse::Ok().body("Products")
}

async fn get_charts() -> impl Responder {
    service::chart::get_chart().expect("Error: Get chart");
    HttpResponse::Ok().body("Chart")
}

pub async fn run_server() -> Result<()> {
    println!("SERVER IS RUNNING");

    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allowed_methods(vec!["GET", "POST"])
            .max_age(3600);

        App::new()
            .route("/charts", web::get().to(get_charts))
            .route("/products", web::get().to(get_products))
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
