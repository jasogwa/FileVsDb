const pool = require("../pgconfig");

module.exports.addDbStorage = blob => new Promise ((resolve,reject) => {
    let querystring = `INSERT INTO dbstorage (blob_data,originalname,size)
                        VALUES ($1,$2,$3)`;

    pool.query(querystring, [blob.buffer,blob.originalname,blob.size]).then( res => {
            return resolve(res.result.rows)
    })
    .catch( err =>{
            return reject(err)
    })

})

module.exports.getAll = _ => new Promise ((resolve,reject) => {
    let querystring = `SELECT * FROM dbstorage ORDER BY created_at DESC`;

    pool.query(querystring).then( res => {
        return resolve(res.result.rows)
    })
     .catch( err =>{
        return reject(err)
     })
})

module.exports.delete = id => new Promise ((resolve,reject) => {
    let querystring = `DELETE  FROM dbstorage WHERE id=$1`;

    pool.query(querystring,[id]).then( res => {
        return resolve(res.result.rows)
    })
     .catch( err =>{
        return reject(err)
     })
})