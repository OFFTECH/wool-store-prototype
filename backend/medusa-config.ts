import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

// Debug logging to verify environment in Render logs
console.log("--- MEDUSA CONFIG DEBUG ---");
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`Region: ${process.env.VmRegion || "Unknown"}`); // Render sets this
const dbUrl = process.env.DATABASE_URL;
if (dbUrl) {
  const isSsl = dbUrl.includes('sslmode');
  console.log(`Database URL found. SSL param present: ${isSsl}`);
  // Log host for verification (safely)
  try {
    const url = new URL(dbUrl);
    console.log(`DB Host: ${url.hostname}`);
    console.log(`DB Port: ${url.port}`);
  } catch (e) {
    console.log("Could not parse DATABASE_URL");
  }
} else {
  console.error("CRITICAL: DATABASE_URL is missing!");
}
console.log("---------------------------");

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    databaseDriverOptions: {
      connection: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      client: 'pg',
      // Robust pool settings for cloud environments
      pool: {
        min: 2,
        max: 10,
        acquireTimeoutMillis: 60000, 
        idleTimeoutMillis: 30000,
        propagateCreateError: false // Prevent crash on initial connection failure
      }
    },
  }
})
