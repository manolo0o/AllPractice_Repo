import mysql from 'mysql2/promise';

try{
    const connection = await mysql.createConnection({
        host:"roundhouse.proxy.rlwy.net",
        port:57800,
        database:"railway",
        user:"root",
        password:"ZfqtIqWVRgbYCYHVplMXVIMmWuRxPgcA"
    });
    console.log("The conection its OKI", connection);
} catch (error) {
    console.log("ERROR");
}
