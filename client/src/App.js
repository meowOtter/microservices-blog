import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
	return (
		<div id="root" className="p-5">
			<div className="container">
				<div className="h1">Create Post</div>
				<PostCreate />
			</div>
			<div className="container">
				<h1>Posts</h1>
				<PostList />
			</div>
		</div>
	);
};

export default App;
