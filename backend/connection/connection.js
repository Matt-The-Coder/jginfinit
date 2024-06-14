const mysql = require('mysql')


// const db = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'jginfinit',
//     port:3307
// })


const db = mysql.createPool({
    host:'bncvmljswjf6puzcuhuf-mysql.services.clever-cloud.com',
    user:'uhpygwdzyl4luoy1',
    password:'oSIref3uFecmHoN9Lg9Z',
    database:'bncvmljswjf6puzcuhuf',
    port:3306
})


module.exports = (query) => {
    return new Promise((resolve, reject)=>{
        db.getConnection((err, connection)=>{
            if(err) reject(err);
            connection.query(query, (err, result)=>{
                if(err) reject(err)
                resolve(result)
            })
            connection.release();
        })
    })


}