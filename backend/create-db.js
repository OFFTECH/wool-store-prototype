const { Client } = require('pg');

// Connect to default 'postgres' database to create new DB
const client = new Client({
    connectionString: 'postgresql://postgres:martech@localhost:5432/postgres',
});

async function run() {
    try {
        await client.connect();
        // Check if exists
        const res = await client.query("SELECT 1 FROM pg_database WHERE datname='medusa-v2'");
        if (res.rowCount === 0) {
            await client.query('CREATE DATABASE "medusa-v2"');
            console.log('Database medusa-v2 created successfully');
        } else {
            console.log('Database medusa-v2 already exists');
        }
    } catch (err) {
        console.error('Error creating database:', err);
        // Continue even if error (user might have created it)
    } finally {
        await client.end();
    }
}

run();
