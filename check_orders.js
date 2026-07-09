const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'task_management',
});

async function run() {
    await client.connect();
    const res = await client.query('SELECT count(*) FROM orders');
    console.log("Total orders:", res.rows[0].count);
    const res2 = await client.query('SELECT count(*) FROM order_items');
    console.log("Total order items:", res2.rows[0].count);
    await client.end();
}
run().catch(console.error);
