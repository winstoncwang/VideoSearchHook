import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
	state = { videoSelected: '' };

	onSelectVideoChange = async (videoId) => {
		await this.setState({ videoSelected: videoId });
		this.props.onSelectVideo(this.state.videoSelected);
	};

	render () {
		const renderedList = this.props.vList.map(({ id, snippet }) => {
			return (
				<VideoItem
					videoId={id.videoId}
					title={snippet.title}
					snippet={snippet}
					onSelectVideo={this.onSelectVideoChange}
				/>
			);
		});

		console.log(this.props.vList);
		return (
			<div className="ui four wide column">
				<div className="ui relaxed divided list">{renderedList}</div>
			</div>
		);
	}
}

export default VideoList;
