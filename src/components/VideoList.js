import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
	state = { videoSelected: '' };

	onSelectVideoChange = async (video) => {
		await this.setState({ videoSelected: video });
		this.props.onSelectVideo(this.state.videoSelected);
	};

	render () {
		const renderedList = this.props.vList.map((video) => {
			return (
				<VideoItem
					vList={video}
					videoId={video.id.videoId}
					title={video.snippet.title}
					snippet={video.snippet}
					onSelectVideo={this.onSelectVideoChange}
				/>
			);
		});

		return (
			<div className="ui four wide column">
				<div className="ui relaxed divided list">{renderedList}</div>
			</div>
		);
	}
}

export default VideoList;
