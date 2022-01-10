const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = new pg.Pool({
	host: "localhost",
	user: "postgres",
    password: "12312312",
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
    port: "5432"
});
router.get('/all', function(req, res){
    pool.query(`
        SELECT row_to_json(UsersLimited) AS json 
        FROM (SELECT * FROM Users LIMIT ${parseInt(req.query.pageSize)} OFFSET ${parseInt(req.query.pageSize)*parseInt(req.query.pageNum)}) AS UsersLimited;
    `, (err, data) => {
        if(err){
            console.log(err);
            return res.json({
                success: false, 
                msg: "Системийн алдаа"
            });
        }else{
            return res.json({
                success: true,
                data: JSON.stringify(data.rows)
            });
        }
    });
});

module.exports = router;