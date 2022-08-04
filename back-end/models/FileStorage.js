const pool = require("../pgconfig");

module.exports.addFileStorage = pathname => new Promise ((resolve,reject) => {
    let querystring = `INSERT INTO filestorage (object_url,originalname,size)
                        VALUES ($1,$2,$3)`;

    pool.query(querystring, [pathname.path,pathname.originalname,pathname.size]).then( res => {
            return resolve(res.result.rows)
    })
    .catch( err =>{
            return reject(err)
    })

})

module.exports.getAll = _ => new Promise ((resolve,reject) => {
    let querystring = `SELECT * FROM filestorage  ORDER BY created_at DESC`;

    pool.query(querystring).then( res => {
        return resolve(res.result.rows)
    })
     .catch( err =>{
        return reject(err)
     })
})

module.exports.delete = id => new Promise ((resolve,reject) => {
    let querystring = `DELETE  FROM filestorage WHERE id=$1`;

    pool.query(querystring,[id]).then( res => {
        return resolve(res.result.rows)
    })
     .catch( err =>{
        return reject(err)
     })
})