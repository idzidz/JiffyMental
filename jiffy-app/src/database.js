const {Client} = require('pg');

const client = new Client({
    host: 'ec2-54-158-247-210.compute-1.amazonaws.com',
    port: 5432,
    user: 'cfpvsyppewaxza',
    password: 'f138d7b391e513d3ce8a07c6ee3ee231b80ad5ff7ed0cdfec3cd45e05d165d6c',
    database: 'dfva7bred9s76'
})

client.connect();

client.query('select * from doctor', (err, res) => {
    console.log(err ? err.stack : res.rows)
    client.end()
})