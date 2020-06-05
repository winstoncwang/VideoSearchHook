import React from 'react';

const VideoDetail = ({ sVideo }) => {
	let srcURL;
	console.log(sVideo);
	if (sVideo.length === 0) {
		return <div className="ui twelve wide column" />;
	}
	if (sVideo.id.hasOwnProperty('playlistId')) {
		srcURL = `https://www.youtube.com/embed?listType=playlist&list=${sVideo
			.id.playlistId}`;
	} else {
		srcURL = `https://www.youtube.com/embed/${sVideo.id.videoId}`;
	}

	return (
		<div className="ui twelve wide column">
			<iframe
				width="100%"
				height="60%"
				src={srcURL}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
			<div className="ui  segment container">
				<div className="content">
					<div className="header">{sVideo.snippet.title}</div>
					<p>{sVideo.snippet.description}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
