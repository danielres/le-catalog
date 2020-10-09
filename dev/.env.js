process.env.NODE_ENV = process.env.NODE_ENV || "development";

const { env } = process;

const BASE_PORT = Number(env.BASE_PORT) || 3000;

const vars = {
  // PORTS
  UI_PORT: BASE_PORT,
  SERVER_PORT: BASE_PORT + 1,
  ADMINER_PORT: BASE_PORT + 10,
  PG_PORT: BASE_PORT + 11,

  // POSTGRES
  PG_DB: `leconfig-${env.NODE_ENV}`,
  PG_USER: "leconfig",
  PG_PASSWORD: "leconfig",
};

printInfo();

module.exports = vars;

function printInfo() {
  console.log();
  console.log(`== NODE_ENV: ${env.NODE_ENV} `.padEnd(75, "="));
  console.log(`   UI        http://localhost:${vars.UI_PORT}`);
  console.log(`   SERVER    http://localhost:${vars.SERVER_PORT}`);
  console.log(`   ADMINER   http://localhost:${vars.ADMINER_PORT}`);
  console.log(`   POSTGRES  http://localhost:${vars.PG_PORT}`);
  console.log("".padEnd(75, "=") + "\n");
}
