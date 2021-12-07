import React from "react";
import { Link } from 'react-router-dom'

const BlogDetails = ({ post: { id,title, body,
imgUrl, date }}) => {

return (
		<div className="blogDetails-container">
			<Link to={`/Blog/${id}`}>
				<h1 className="heading">{title}</h1>
			</Link>
            <br/>
			<p><strong>Date: {date}</strong></p>
            <br />
			<img className="image" src={`/images/${imgUrl}`} alt="post" />
            <br />
			<p className="blogBody">{body}</p>
            <br />
		</div>
);
};

export default BlogDetails;
