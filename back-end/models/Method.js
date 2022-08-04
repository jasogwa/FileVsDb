const pool = require("../pgconfig");

module.exports.addHistory = history => new Promise ((resolve,reject) => {
    if (history.length !== 0) {
        let querystring = `INSERT INTO history (method,query_mode,file_size,duration)
                            VALUES ($1,$2,$3,$4)`;

        pool.query(querystring, [history[0],history[1],history[2],history[3]]).then( res => {
                return resolve(res.result.rows)
        })
        .catch( err =>{
                return reject(err)
        })
    }
})

module.exports.getAll = _ => new Promise ((resolve,reject) => {
    let querystring = `SELECT * FROM history  ORDER BY created_at DESC`;

    pool.query(querystring).then( res => {
        return resolve(res.result.rows)
    })
     .catch( err =>{
        return reject(err)
     })
})