module.exports.getUser = async (username, password) => {
    const {getDatabase} = require('./Database');
    const db = await getDatabase();
    const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
    const result = await db.query(query, [username, password]);
    console.log(result);
    await db.end();
    return result;
}

// todo: Database is connected and working, but begins to error out when I call the function in Login.js. Fix it.


// (async () => {
//     const {getDatabase} = require('./Database');
//     const db = await getDatabase();
//     const query = 'SELECT * FROM users WHERE username = $1 AND password = $2';
//     const result = await db.query(query, ['izelj', 'password']);
//     console.log(result.rows[0]);
//     await db.end();
// })();

// const test = () => {
//     console.log("nothing");
//
// }
//
//
// export default getUser;