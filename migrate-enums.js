const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456789',
    database: 'pos_db'
});

async function main() {
    await client.connect();
    console.log('Connected to DB');

    try {
        // Add lowercase values to users_role_enum
        await client.query("ALTER TYPE users_role_enum ADD VALUE IF NOT EXISTS 'user'");
        await client.query("ALTER TYPE users_role_enum ADD VALUE IF NOT EXISTS 'manager'");
        await client.query("ALTER TYPE users_role_enum ADD VALUE IF NOT EXISTS 'admin'");
        console.log('Added lowercase role enum values');

        // Update existing user rows
        await client.query("UPDATE users SET role = 'user' WHERE role = 'USER'");
        await client.query("UPDATE users SET role = 'manager' WHERE role = 'MANAGER'");
        await client.query("UPDATE users SET role = 'admin' WHERE role = 'ADMIN'");
        console.log('Updated users table');

        // Add lowercase values to inventory_movements_type_enum
        await client.query("ALTER TYPE inventory_movements_type_enum ADD VALUE IF NOT EXISTS 'in'");
        await client.query("ALTER TYPE inventory_movements_type_enum ADD VALUE IF NOT EXISTS 'out'");
        await client.query("ALTER TYPE inventory_movements_type_enum ADD VALUE IF NOT EXISTS 'transfer'");
        await client.query("ALTER TYPE inventory_movements_type_enum ADD VALUE IF NOT EXISTS 'adjust'");
        console.log('Added lowercase movement type enum values');

        // Update existing movement rows
        await client.query("UPDATE inventory_movements SET type = 'in' WHERE type = 'IN'");
        await client.query("UPDATE inventory_movements SET type = 'out' WHERE type = 'OUT'");
        await client.query("UPDATE inventory_movements SET type = 'transfer' WHERE type = 'TRANSFER'");
        await client.query("UPDATE inventory_movements SET type = 'adjust' WHERE type = 'ADJUST'");
        console.log('Updated inventory_movements table');

    } catch (err) {
        console.error('Migration error:', err);
    } finally {
        await client.end();
        console.log('Migration complete!');
    }
}

main().catch(e => {
    console.error('Fatal error:', e.message);
    process.exit(1);
});
