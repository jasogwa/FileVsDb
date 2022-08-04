const { Pool } = require('pg')

const config = {
    database: "postgres",
    host: "localhost",
    user: "postgres",
    password: "postgres",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

const pool = new Pool(config)

module.exports.query = (queryText, values) => new Promise( (resolve,reject) => {
    starts_at = Date.now()
    pool.query(queryText, values, (err, result) => {
        let ret = {
                starts_at: starts_at,
                ends_at: Date.now(),
                query: queryText,
                values: values,
            }
        if (err) {
            ret.success = false
            ret.reason = err
            // console.log('db: query failed:',ret)
            return reject(ret)
        }
        ret.success = true
        ret.result = result
        // console.log('db: query succeeded:',ret)
        return resolve(ret)
    })
})
