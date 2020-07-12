import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ vLists, onSelectVideo }) => {
	const renderedList = vLists.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				video={video}
				onSelectVideo={() => {
					onSelectVideo(video);
				}}
			/>
		);
	});

	return (
		<div className="ui four wide column">
			<div className="ui relaxed divided list">{renderedList}</div>
		</div>
	);
};

export default VideoList;
