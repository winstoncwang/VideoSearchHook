import React from 'react';

class VideoItem extends React.Component {
	state = { videoSelected: '' };

	onClickChange = async () => {
		await this.setState({ videoSelected: this.props.vList });
		this.props.onSelectVideo(this.state.videoSelected);
	};

	render () {
		return (
			<div className="item" onClick={this.onClickChange}>
				<img
					className="ui image"
					src={this.props.snippet.thumbnails.medium.url}
					alt={this.props.title}
				/>
				<div className="content">
					<div className="header">{this.props.title}</div>
					{/* <div className="description">
						{this.props.snippet.description}
					</div> */}
				</div>
			</div>
		);
	}
}

export default VideoItem;
