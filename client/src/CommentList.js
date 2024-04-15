import "./CommentList.scss";

const CommentList = ({ comments }) => {
	const renderedComments = comments.map((comment) => (
		<li key={comment.id}>{comment.content}</li>
	));

	return (
		<div className="comment-list">
			<ul>{renderedComments}</ul>
		</div>
	);
};

export default CommentList;
