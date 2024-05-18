use std::{io, env};

use actix_web::{App, HttpServer};

mod cors;

#[tokio::main]
async fn main() -> io::Result<()> {
  if env::var("RUST_LOG").is_err() {
    env::set_var("RUST_LOG", "info");
  }

  pretty_env_logger::init();

  let port: u16 = env::var("PORT").map_or(2137, |p| p.parse().unwrap_or(2137));
  log::info!("Starting the application on port {}", port);

  HttpServer::new(move || {
    App::new()
      .wrap(cors::Cors)
  })
  .bind(("0.0.0.0", port))?
  .run()
  .await
}
