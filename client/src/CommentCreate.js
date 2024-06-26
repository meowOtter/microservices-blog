import React, { useState } from "react";
import axios from "axios";
import "./CommentCreate.scss";

const CommentCreate = ({ postId }) => {
	const [content, setContent] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			comment: content,
		});

		setContent("");
	};

	return (
		<div className="comment-create">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>New Comment</label>
					<input
						className="form-control"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default CommentCreate;
