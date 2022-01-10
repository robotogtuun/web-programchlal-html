const express = require("express");
const router = express.Router();
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
router.get("/all", function (req, res) {
	pool.query(
		`
        SELECT row_to_json(PopulatedArticles) AS json FROM (
            SELECT 
            Articles._id, Articles.title, Articles.description, Articles.body, Articles.created, Articles.status, thumbnail, image, likes, viewed, 
            json_agg(json_build_object('title', topicTitle, 'link', topicLink)) AS topic,
            json_build_object('_id', Users._id, 'first_name', Users.first_name, 'last_name', Users.last_name, 'avatar', Users.avatar, 'description', Users.description, 'bio', Users.bio, 'trusted', Users.trustedWriter) AS author,
            json_agg(json_build_object('_id', likedUserId, 'first_name', likedUserFirstName, 'last_name', likedUserLastName, 'avatar', likedUserAvatar)) AS liked,
            json_agg(json_build_object('_id', commentedUserId, 'first_name', commentedUserFirstName, 'last_name', commentedUserLastName, 'avatar', commentedUserAvatar, 'comment', commentText, 'created', commentCreated)) AS comment,
            json_agg(json_build_object('_id', savedUserId, 'first_name', savedUserFirstName, 'last_name', savedUserLastName, 'avatar', savedUserAvatar, 'savedDate', 'savedDate')) AS saved
                FROM (
                SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar, commentedUserId, commentedUserFirstName, commentedUserLastName, commentedUserAvatar, commentText, commentCreated, savedDate, savedUserId, savedUserFirstName, savedUserLastName, savedUserAvatar FROM (
                    SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar, savedDate, savedUserId, savedUserFirstName, savedUserLastName, savedUserAvatar FROM (
                        SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar FROM (
                            SELECT articleTable._id, articleTable.title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicsTable.title AS topicTitle, topicsTable.link AS topicLink 
                            FROM Articles articleTable, articleTopicGroup groupTable, Topics topicsTable
                            WHERE articleTable._id = groupTable.articleId AND groupTable.topicId = topicsTable._id
                        ) AS articleTopicPopulated
                        LEFT JOIN (
                            SELECT Users._id AS likedUserId, Users.first_name AS likedUserFirstName, Users.last_name AS likedUserLastName, Users.avatar AS likedUserAvatar, userLikesArticleGroup.articleId FROM userLikesArticleGroup 
                            LEFT JOIN Users 
                            ON userLikesArticleGroup.userId = Users._id  
                        ) AS userLikesArticleGroupUserPopulated
                        ON articleTopicPopulated._id = userLikesArticleGroupUserPopulated.articleId -- Liked user populated
                        OFFSET ${
							parseInt(req.query.pageNum) * parseInt(req.query.pageSize)
						} LIMIT ${req.query.pageSize}
                    ) AS likedUserPopulated
                    LEFT JOIN (
                        SELECT articleId, userSavedArticleGroup.created AS savedDate, Users._id AS savedUserId, Users.first_name AS savedUserFirstName, Users.last_name AS savedUserLastName, Users.avatar AS savedUserAvatar FROM userSavedArticleGroup 
                        LEFT JOIN Users
                        ON userSavedArticleGroup.userId = Users._id
                    ) AS userSavedArticleGroupUserPopulated
                    ON likedUserPopulated._id = userSavedArticleGroupUserPopulated.articleId
                ) AS likedSavedUserPopulated
                LEFT JOIN (
                    SELECT Users._id AS commentedUserId, Users.first_name AS commentedUserFirstName, Users.last_name AS commentedUserLastName, Users.avatar AS commentedUserAvatar, commentGroup.articleId, comment AS commentText, commentGroup.created AS commentCreated FROM commentGroup 
                    LEFT JOIN Users 
                    ON commentGroup.userId = Users._id 
                ) AS commentPopulated
                ON likedSavedUserPopulated._id = commentPopulated.articleId
            ) AS Articles
            LEFT JOIN Users 
            ON Articles.authorId = Users._id
            GROUP BY Articles._id, Articles.title, Articles.description, Articles.body, Articles.created, Articles.status, thumbnail, image, likes, viewed, Users._id, Users.first_name, Users.last_name, Users.avatar, Users.description, Users.bio, Users.trustedWriter
        ) AS PopulatedArticles
    `,
		(err, data) => {
			if (err) {
				console.log(err);
				return res.json({
					success: false,
					msg: "Системийн алдаа"
				});
			} else {
				return res.json({
					success: true,
					data: JSON.stringify(data.rows)
				});
			}
		}
	);
});
router.get("/special", function (req, res) {
	pool.query(
		`
        SELECT row_to_json(PopulatedArticles) AS json FROM (
            SELECT 
            Articles._id, Articles.title, Articles.description, Articles.body, Articles.created, Articles.status, thumbnail, image, likes, viewed, 
            json_agg(json_build_object('title', topicTitle, 'link', topicLink)) AS topic,
            json_build_object('_id', Users._id, 'first_name', Users.first_name, 'last_name', Users.last_name, 'avatar', Users.avatar, 'description', Users.description, 'bio', Users.bio, 'trusted', Users.trustedWriter) AS author,
            json_agg(json_build_object('_id', likedUserId, 'first_name', likedUserFirstName, 'last_name', likedUserLastName, 'avatar', likedUserAvatar)) AS liked,
            json_agg(json_build_object('_id', commentedUserId, 'first_name', commentedUserFirstName, 'last_name', commentedUserLastName, 'avatar', commentedUserAvatar, 'comment', commentText, 'created', commentCreated)) AS comment
                FROM (
                SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar, commentedUserId, commentedUserFirstName, commentedUserLastName, commentedUserAvatar, commentText, commentCreated FROM (
                    SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar FROM (
                        SELECT articleTable._id, articleTable.title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicsTable.title AS topicTitle, topicsTable.link AS topicLink 
                        FROM Articles articleTable, articleTopicGroup groupTable, Topics topicsTable
                        WHERE articleTable._id = groupTable.articleId AND groupTable.topicId = topicsTable._id
                    ) AS articleTopicPopulated
                    LEFT JOIN (
                        SELECT Users._id AS likedUserId, Users.first_name AS likedUserFirstName, Users.last_name AS likedUserLastName, Users.avatar AS likedUserAvatar, userLikesArticleGroup.articleId FROM userLikesArticleGroup 
                        LEFT JOIN Users 
                        ON userLikesArticleGroup.userId = Users._id  
                    ) AS userLikesArticleGroupUserPopulated
                    ON articleTopicPopulated._id = userLikesArticleGroupUserPopulated.articleId -- Liked user populated
                    ORDER BY likes DESC
                    LIMIT ${req.query.pageSize}
                ) AS likedUserPopulated
                LEFT JOIN (
                    SELECT Users._id AS commentedUserId, Users.first_name AS commentedUserFirstName, Users.last_name AS commentedUserLastName, Users.avatar AS commentedUserAvatar, commentGroup.articleId, comment AS commentText, commentGroup.created AS commentCreated FROM commentGroup 
                    LEFT JOIN Users 
                    ON commentGroup.userId = Users._id 
                ) AS commentPopulated
                ON likedUserPopulated._id = commentPopulated.articleId
            ) AS Articles
            LEFT JOIN Users 
            ON Articles.authorId = Users._id
            GROUP BY Articles._id, Articles.title, Articles.description, Articles.body, Articles.created, Articles.status, thumbnail, image, likes, viewed, Users._id, Users.first_name, Users.last_name, Users.avatar, Users.description, Users.bio, Users.trustedWriter
        ) AS PopulatedArticles
    `,
		(err, data) => {
			if (err) {
				console.log(err);
				return res.json({
					success: false,
					msg: "Системийн алдаа"
				});
			} else {
				return res.json({
					success: true,
					data: JSON.stringify(data.rows)
				});
			}
		}
	);
});
router.get("/single/:_id", function (req, res) {
	pool.query(
		`
    SELECT row_to_json(PopulatedArticles) AS json FROM (
        SELECT 
        Articles._id, Articles.title, Articles.description, Articles.body, Articles.created, Articles.status, thumbnail, image, likes, viewed, 
        json_agg(json_build_object('title', topicTitle, 'link', topicLink)) AS topic,
        json_build_object('_id', Users._id, 'first_name', Users.first_name, 'last_name', Users.last_name, 'avatar', Users.avatar, 'description', Users.description, 'bio', Users.bio, 'trusted', Users.trustedWriter) AS author,
        json_agg(json_build_object('_id', likedUserId, 'first_name', likedUserFirstName, 'last_name', likedUserLastName, 'avatar', likedUserAvatar)) AS liked,
        json_agg(json_build_object('_id', commentedUserId, 'first_name', commentedUserFirstName, 'last_name', commentedUserLastName, 'avatar', commentedUserAvatar, 'comment', commentText, 'created', commentCreated)) AS comment,
        json_agg(json_build_object('_id', savedUserId, 'first_name', savedUserFirstName, 'last_name', savedUserLastName, 'avatar', savedUserAvatar, 'savedDate', 'savedDate')) AS comment,
            FROM (
            SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar, commentedUserId, commentedUserFirstName, commentedUserLastName, commentedUserAvatar, commentText, commentCreated, savedDate, savedUserId, savedUserFirstName, savedUserLastName, savedUserAvatar FROM (
                SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar, savedDate, savedUserId, savedUserFirstName, savedUserLastName, savedUserAvatar FROM (
                    SELECT _id, title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicTitle, topicLink, likedUserId, likedUserFirstName, likedUserLastName, likedUserAvatar FROM (
                        SELECT articleTable._id, articleTable.title, description, body, authorId, created, status, thumbnail, image, likes, viewed, topicsTable.title AS topicTitle, topicsTable.link AS topicLink 
                        FROM Articles articleTable, articleTopicGroup groupTable, Topics topicsTable
                        WHERE articleTable._id = groupTable.articleId AND groupTable.topicId = topicsTable._id AND articleTable._id = ${req.params._id}
                    ) AS articleTopicPopulated
                    LEFT JOIN (
                        SELECT Users._id AS likedUserId, Users.first_name AS likedUserFirstName, Users.last_name AS likedUserLastName, Users.avatar AS likedUserAvatar, userLikesArticleGroup.articleId FROM userLikesArticleGroup 
                        LEFT JOIN Users 
                        ON userLikesArticleGroup.userId = Users._id  
                        ) AS userLikesArticleGroupUserPopulated
                        ON articleTopicPopulated._id = userLikesArticleGroupUserPopulated.articleId -- Liked user populated
                ) AS likedUserPopulated
                LEFT JOIN (
                    SELECT articleId, userSavedArticleGroup.created AS savedDate, Users._id AS savedUserId, Users.first_name AS savedUserFirstName, Users.last_name AS savedUserLastName, Users.avatar AS savedUserAvatar FROM userSavedArticleGroup 
                    LEFT JOIN Users
                    ON userSavedArticleGroup.userId = Users._id
                ) AS userSavedArticleGroupUserPopulated
                ON likedUserPopulated._id = userSavedArticleGroupUserPopulated.articleId
            ) AS likedSavedUserPopulated
            LEFT JOIN (
                SELECT Users._id AS commentedUserId, Users.first_name AS commentedUserFirstName, Users.last_name AS commentedUserLastName, Users.avatar AS commentedUserAvatar, commentGroup.articleId, comment AS commentText, commentGroup.created AS commentCreated FROM commentGroup 
                LEFT JOIN Users 
                ON commentGroup.userId = Users._id 
            ) AS commentPopulated
            ON likedSavedUserPopulated._id = commentPopulated.articleId
        ) AS Articles
        LEFT JOIN Users 
        ON Articles.authorId = Users._id
        GROUP BY Articles._id, Articles.title, Articles.description, Articles.body, Articles.created, Articles.status, thumbnail, image, likes, viewed, Users._id, Users.first_name, Users.last_name, Users.avatar, Users.description, Users.bio, Users.trustedWriter
    ) AS PopulatedArticles
    `,
		(err, data) => {
			if (err) {
				console.log(err);
				return res.json({
					success: false,
					msg: "Системийн алдаа"
				});
			} else {
				return res.json({
					success: true,
					data: JSON.stringify(data.rows)
				});
			}
		}
	);
});
router.post("/submit", function (req, res) {
	if (!req.body.title.trim())
		return res.json({
			success: false,
			msg: "Гарчиг оруулна уу."
		});
	if (!req.body.title.trim())
		return res.json({
			success: false,
			msg: "Тайлбар оруулна уу."
		});
	if (!req.body.title.trim())
		return res.json({
			success: false,
			msg: "Их бие оруулна уу."
		});
	if (!req.body.title.trim())
		return res.json({
			success: false,
			msg: "Жижиг зураг оруулна уу."
		});
	if (!req.body.title.trim())
		return res.json({
			success: false,
			msg: "Том зураг оруулна уу."
		});
	pool.query(
		`
        INSERT INTO articles (title, description, body, authorId, created, thumbnail, image)
        VALUES('${req.body.title}', '${req.body.description}', '${req.body.body}', '${
			req.user._id
		}', '${new Date().toISOString()}', '${req.body.thumbnail}', '${req.body.image}')
        RETURNING _id
    `,
		(err, data) => {
			if (err) {
				console.log(err);
				return res.json({
					success: false,
					msg: "Системийн алдаа"
				});
			} else {
				pool.query(
					`
                        INSERT INTO articleTopicGroup (articleId, topicId)
                        VALUES(${data.rows[0]._id}, 1)
                        RETURNING _id
                    `,
					(err, data) => {
						if (err) {
							console.log(err);
							return res.json({
								success: false,
								msg: "Системийн алдаа"
							});
						} else {
							return res.json({
								_id: data.rows[0]._id,
								...(req.body || {}),
								success: true
							});
						}
					}
				);
			}
		}
	);
});

module.exports = router;
