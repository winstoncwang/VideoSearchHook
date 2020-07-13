import React from 'react';

const VideoDetail = ({ sVideo }) => {
	let srcURL;

	if (sVideo === null) {
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
				title="videoplayer"
				width="100%"
				height="80%"
				src={srcURL}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
			<div className="ui segment container" style={{ height: '18%' }}>
				<div className="content">
					<h2>{sVideo.snippet.title}</h2>
					<p>{sVideo.snippet.description}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoDetail;
