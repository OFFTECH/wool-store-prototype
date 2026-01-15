const { Client } = require('pg');
require('dotenv').config();

console.log("Testing connection to:", process.env.DATABASE_URL?.split('@')[1]); // Log host only for privacy

async function testConnection(sslMode) {
    console.log(`\n--- Testing with SSL: ${JSON.stringify(sslMode)} ---`);
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: sslMode
    });

    try {
        await client.connect();
        console.log("✅ SUCCESS! Connected to database.");
        const res = await client.query('SELECT NOW()');
        console.log("Database Time:", res.rows[0].now);
        await client.end();
        return true;
    } catch (err) {
        console.error("❌ FAILED:", err.message);
        if (err.message.includes("password authentication failed")) {
            console.error("Hint: Password might be wrong.");
        }
        await client.end();
        return false;
    }
}

async function run() {
    // Test 1: Standard SSL (likely needed for cloud)
    let success = await testConnection({ rejectUnauthorized: false });

    // Test 2: No SSL (unlikely for Supabase but worth checking)
    if (!success) {
        await testConnection(false);
    }
}

run();
