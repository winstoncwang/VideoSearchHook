import React from 'react';

const VideoDetail = ({ sVideo }) => {
	if (sVideo.length === 0) {
		return <div className="ui twelve wide column" />;
	}

	return (
		<div className="ui twelve wide column">
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${sVideo.id.videoId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
			<div className="content">
				<div className="header">{sVideo.snippet.title}</div>
				<p>{sVideo.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
