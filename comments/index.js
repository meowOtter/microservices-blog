const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
	res.status(200).send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
	const commentId = randomBytes(4).toString("hex");
	const { comment } = req.body;
	const postId = req.params.id;

	const comments = commentsByPostId[postId] || [];
	comments.push({ id: commentId, text: comment });
	commentsByPostId[postId] = comments;

	res.status(201).send(comments[comments.length - 1]);
});

app.listen(4001, () => {
	console.log("Listening on 4001");
});
