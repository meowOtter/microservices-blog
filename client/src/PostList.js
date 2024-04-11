import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostList.scss"; // Assuming the SCSS file is named PostList.scss

const PostList = () => {
	const [posts, setPosts] = useState({});

	const fetchPosts = async () => {
		const res = await axios.get("http://localhost:4000/posts");
		setPosts(res.data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const renderedPosts = Object.values(posts).map((post) => (
		<div className="card" key={post.id}>
			<div className="card-body">
				<div className="h3">{post.title}</div>
			</div>
		</div>
	));

	return <div className="post-list">{renderedPosts}</div>;
};

export default PostList;
