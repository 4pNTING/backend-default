"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
async function main() {
    const client = new pg_1.Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123456789',
        database: 'postgres',
    });
    try {
        await client.connect();
        console.log('Connected to DB. Dropping conflicting tables...');
        await client.query(`
      DROP TABLE IF EXISTS categories CASCADE;
      DROP TABLE IF EXISTS zones CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS products CASCADE;
      DROP TABLE IF EXISTS inventory_level CASCADE;
      DROP TABLE IF EXISTS inventory_movement CASCADE;
      DROP TABLE IF EXISTS migrations CASCADE;
    `);
        await client.query(`
      DROP TYPE IF EXISTS users_role_enum CASCADE;
      DROP TYPE IF EXISTS zones_isactive_enum CASCADE;
      DROP TYPE IF EXISTS categories_isactive_enum CASCADE;
      DROP TYPE IF EXISTS users_isactive_enum CASCADE;
    `);
        console.log('Tables and Types dropped successfully.');
    }
    catch (err) {
        console.error('Error dropping tables:', err);
    }
    finally {
        await client.end();
    }
}
main();
//# sourceMappingURL=drop-tables.js.map