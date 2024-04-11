import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CommentList.scss";

const CommentList = ({ postId }) => {
	const [comments, setComments] = useState([]);

	const fetchComments = async () => {
		const res = await axios.get(
			`http://localhost:4001/posts/${postId}/comments`
		);

		setComments(res.data);
	};

	useEffect(() => {
		fetchComments();
	}, []);

	const renderedComments = comments.map((comment) => (
		<li key={comment.id}>{comment.text}</li>
	));

	return (
		<div className="comment-list">
			<ul>{renderedComments}</ul>
		</div>
	);
};

export default CommentList;
