import React from 'react';

const VideoItem = ({ video, onSelectVideo }) => {
	return (
		<div
			className="item"
			onClick={() => {
				onSelectVideo(video);
			}}
		>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<span>{video.snippet.title}</span>
		</div>
	);
};

export default VideoItem;
