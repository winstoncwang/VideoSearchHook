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
			<div className="content">
				<div className="header">{video.snippet.title}</div>
				{/* <div className="description">
						{this.props.snippet.description}
					</div> */}
			</div>
		</div>
	);
};

export default VideoItem;
