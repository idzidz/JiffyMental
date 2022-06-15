const {Client} = require('pg');
require('dotenv').config();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

module.exports.getDatabase = async () => {
    const client = new Client({
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        ssl: true,
    });
    await client.connect();
    return client;

    // const result = await client.query('select $1::text as connected', ['true']);
    // console.log(result.rows[0].connected);

    // const result = await client.query('select * from users where username = $1', ['izelj']);
    // console.log(result.rows[0]);

    // This is how we pull the specific values that we need from the database.
    // Will return undefined for logging of row[0], or an empty array in the mapper if no matches are found.

    // const mapper = result.rows.map(row => Object.values(row));
    // console.log(mapper);
    // console.log(mapper[0][1]);
    //
    // await client.end();

};