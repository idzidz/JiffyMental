const Pool = require('pg').Pool;
const credentials = require('../credentials.json');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const pool = new Pool({
    host: credentials.database.host,
    port: 5432,
    user: credentials.database.user,
    password: credentials.database.password,
    database: credentials.database.database,
    rejectUnauthorized: false,
    strictSSL: false,
    ssl: true,
})

module.exports = pool;














// const {Client} = require('pg');
// require('dotenv').config();
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
//
//
// module.exports.getDatabase = async () => {
//     const client = new Client({
//         host: "ec2-54-158-247-210.compute-1.amazonaws.com",
//         port: 5432,
//         user: "cfpvsyppewaxza",
//         password: "f138d7b391e513d3ce8a07c6ee3ee231b80ad5ff7ed0cdfec3cd45e05d165d6c",
//         database: "dfva7bred9s76",
//         ssl: true,
//     });
//     await client.connect();
//     return client;
//
//     // const result = await client.query('select $1::text as connected', ['true']);
//     // console.log(result.rows[0].connected);
//
//     // const result = await client.query('select * from users where username = $1', ['izelj']);
//     // console.log(result.rows[0]);
//
//     // This is how we pull the specific values that we need from the database.
//     // Will return undefined for logging of row[0], or an empty array in the mapper if no matches are found.
//
//     // const mapper = result.rows.map(row => Object.values(row));
//     // console.log(mapper);
//     // console.log(mapper[0][1]);
//     //
//     // await client.end();
//
// };


/// Try 1