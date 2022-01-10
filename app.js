const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const bcrypt = require("bcrypt-node");
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
var cookies = require("cookie-parser");

const { errorString } = require("./api/utils");

app.use(cookies());
app.use(express.static("./"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const user_router = require("./api/user");
const article_router = require("./api/article");
const topic_router = require("./api/topic");

const pg = require("pg");
const pool = new pg.Pool({
	host: "localhost",
	user: "postgres",
    password: "12312312",
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
    port: "5432"
});

app.use("/api/*", function (req, res, next) {
	let token = (req.cookies || {}).token || null;
	if (token) {
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                next();
            } else {
				pool.query(`
					SELECT json_agg(Users) AS json FROM Users
					WHERE _id = '${decoded.id}'
				`, (err, data) => {
					if(err){
                        next();
					}else{
						if(!data.rows[0].json){
							next();
						} else {
							req.user = data.rows[0].json[0];
							let token = jwt.sign({id: data.rows[0].json[0]._id}, 'secret', {
								expiresIn: 86400000
							});
							res.cookie('token', token);
							next();
						}
					}
				});
            }
        });
    } else {
        next();
    }
});

app.use("/api/user", user_router);
app.use("/api/article", article_router);
app.use("/api/topic", topic_router);

app.get("/", function (req, res) {
	res.sendFile(path.resolve(__dirname, "index.html"), (err) => {
		if (err) {
			console.log(err);
			res.send(errorString);
		}
	});
});
app.post("/api/login", function(req, res){
	if(!req.query.user_name.trim()) 
		return res.json({
			success: false, 
			msg: "Нэвтрэх нэр оруулна уу"
		});
	if(!req.query.password.trim()) 
		return res.json({
			success: false, 
			msg: "Нууц үг оруулна уу"
		});
	pool.query(`
		SELECT json_agg(Users) AS json FROM Users
		WHERE user_name = '${req.query.user_name.trim()}'
	`, (err, data) => {
		if(err){
			console.log(err);
			return res.json({
				success: false, 
				msg: "Системийн алдаа"
			});
		}else{
			if(!data.rows[0].json){
				return res.json({
					success: false, 
					msg: "Нэвтрэх нэр эсвэл нууц үг буруу байна"
				});
			} else {
				let dat = data.rows[0].json[0];
				if (bcrypt.compareSync(req.query.password.trim(), dat.password)){
					if(dat.status === 'active'){
						let token = jwt.sign({id: dat._id}, 'secret', {
                            expiresIn: 86400000
                        });
						return res.json({
							success: true, 
							token: token,
							user: dat
						});
					}else{
						return res.json({
							success: false, 
							msg: "Хэрэглэгч олдсонгүй"
						});
					}
				}else{
					return res.json({
						success: false, 
						msg: "Нэвтрэх нэр эсвэл нууц үг буруу байна"
					});
				}
			}
		}
	})
});
app.post("/api/register", function(req, res){
	if(!req.query.user_name) 
		return res.json({
			success: false, 
			msg: "Нэвтрэх нэр оруулна уу"
		});
	if(!req.query.password) 
		return res.json({
			success: false, 
			msg: "Нууц үг оруулна уу"
		});
	pool.query(`
		SELECT json_agg(Users) FROM Users
		WHERE user_name = '${req.query.user_name.trim()}'
	`, (err, data) => {
		if(err){
			console.log(err);
			return res.json({
				success: false, 
				msg: "Системийн алдаа"
			});
		}else{
			if(data.rows[0].json){
				return res.json({
					success: false, 
					msg: "Нэвтрэх нэр давхцаж байна"
				});
			} else {
				pool.query(`
					INSERT INTO Users (user_name, password, status, created, trustedWriter)
					VALUES('${req.query.user_name.trim()}', '${bcrypt.hashSync(req.query.password.trim())}', 'active', '${new Date().toISOString()}', false)
					RETURNING _id
				`, (err, data) => {
					if(err){
						console.log(err);
						return res.json({
							success: false, 
							msg: "Системийн алдаа"
						});
					}else{
						let token = jwt.sign({id: data.rows[0]._id}, 'secret', {
                            expiresIn: 86400000
                        });
						res.cookie('token', token);
						return res.json({
							success: true, 
							msg: "Амжилттай бүртгүүллээ",
							user: {
								user_name: req.query.user_name.trim(),
								status: "active",
								created: new Date().toISOString(),
								trustedWriter: false,
								_id: data.rows[0]._id
							}
						});
					}
				});
			}
		}
		// if (bcrypt.compareSync(data.password, ps))
	})
});
app.get("/api/verify/token", function (req, res, next) {
	let token = (req.cookies || {}).token || req.query.token || null;
	if (token) {
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
				return res.json({success: false});
            } else {
				pool.query(`
					SELECT json_agg(Users) AS json FROM Users
					WHERE _id = '${decoded.id}'
				`, (err, data) => {
					if(err){
						return res.json({success: false});
					}else{
						if(!data.rows[0].json){
							return res.json({success: false});
						} else {
							let token = jwt.sign({id: data.rows[0].json[0]._id}, 'secret', {
								expiresIn: 86400000
							});
							res.cookie('token', token);
							return res.json({success: true, user: data.rows[0].json[0]});
						}
					}
				});
            }
        });
    } else {
		res.json({success: false});
    }
});
app.get("*", function (req, res) {
	res.sendFile(path.resolve(__dirname, "index.html"), (err) => {
		if (err) {
			console.log(err);
			res.send(errorString);
		}
	});
});

app.listen(8000, () => {
	console.log("started listening on port: 8000");
	pool.connect((err, client, release) => {
		if (err) {
			return console.error("Error acquiring client", err.stack);
		}
		client.query("SELECT NOW()", (err, result) => {
			release();
			if (err) {
				return console.error("Error executing query", err.stack);
			}
            console.log("DB connection successful");
		});
	});
});
