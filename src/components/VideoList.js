import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
	render () {
		const renderedList = this.props.vList.map(({ id, snippet }) => {
			return <VideoItem key={id.videoId} title={snippet.title} />;
		});

		console.log(this.props.vList);
		return (
			<div className="ui four wide column container">
				<div className="ui list">{renderedList}</div>
			</div>
		);
	}
}

export default VideoList;
