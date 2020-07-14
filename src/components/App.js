import React, { useState, useEffect } from 'react';
//components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import useVideoSearch from './useVideoSearch';

const App = () => {
	const [ videoSelected, setVideoSelected ] = useState(null);
	//custom hook
	const [ videoList, search ] = useVideoSearch('mean stack');
	//default selection of the search video
	useEffect(
		() => {
			if (videoList.length !== 0) {
				if (videoList[0].hasOwnProperty('playlistId')) {
					setVideoSelected(videoList[0].id.playlistId);
				} else {
					setVideoSelected(videoList[0]);
				}
			}
		},
		[ videoList ]
	);

	return (
		<div className="ui grid container segment">
			<SearchBar onSubmit={search} />
			<VideoDetail vList={videoList} sVideo={videoSelected} />
			<VideoList vLists={videoList} onSelectVideo={setVideoSelected} />
		</div>
	);
};

export default App;

// class App extends React.Component {
// 	state = { videoList: [], videoSelected: [] };

// 	componentDidMount () {
// 		this.onTermSubmit('mean stack');
// 	}

// 	onTermSubmit = async (term) => {
// 		//child from parent
// 		const response = await youtube.get('/search', {
// 			params : {
// 				part : 'snippet',
// 				key  : KEY,
// 				q    : term
// 			}
// 		});

// 		this.setState({ videoList: response.data.items });
// 		if (response.data.items[0].hasOwnProperty('playlistId')) {
// 			this.setState({
// 				videoSelected : this.state.videoList[0].id.playlistId
// 			});
// 		} else {
// 			this.setState({ videoSelected: this.state.videoList[0] });
// 		}
// 	};

// 	onSelectVideoChange = (video) => {
// 		this.setState({ videoSelected: video });
// 	};

// 	render () {
// 		return (
// 			<div className="ui grid container segment">
// 				<SearchBar onSubmit={this.onTermSubmit} />
// 				<VideoDetail
// 					vList={this.state.videoList}
// 					sVideo={this.state.videoSelected}
// 				/>
// 				<VideoList
// 					vLists={this.state.videoList}
// 					onSelectVideo={this.onSelectVideoChange}
// 				/>
// 			</div>
// 		);
// 	}
// }
