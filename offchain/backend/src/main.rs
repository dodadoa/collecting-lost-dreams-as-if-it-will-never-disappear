use anyhow::Result;

#[actix_web::main]
async fn main() -> Result<()> {
    backend::run_server().await?;
    Ok(())
}
