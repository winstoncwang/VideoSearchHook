import React, { useState, useEffect } from 'react';
//axios
import youtube from '../apis/youtube';
//components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCwzQbW7NX2QfO2ovUQJHuPdl138QSRSU4';
// key did not merge in params for axios, its a bug

const App = () => {
	const [ videoList, setVideoList ] = useState([]);
	const [ videoSelected, setVideoSelected ] = useState(null);

	useEffect(() => {
		onTermSubmit('mean stack');
	}, []);

	const onTermSubmit = async (term) => {
		//child from parent
		const response = await youtube.get('/search', {
			params : {
				part : 'snippet',
				key  : KEY,
				q    : term
			}
		});

		setVideoList(response.data.items);

		if (response.data.items[0].hasOwnProperty('playlistId')) {
			setVideoSelected(response.data.items[0].id.playlistId);
		} else {
			setVideoSelected(response.data.items[0]);
		}
	};

	const onSelectVideoChange = (video) => {
		setVideoSelected(video);
	};

	return (
		<div className="ui grid container segment">
			<SearchBar onSubmit={onTermSubmit} />
			<VideoDetail vList={videoList} sVideo={videoSelected} />
			<VideoList vLists={videoList} onSelectVideo={onSelectVideoChange} />
		</div>
	);
};

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

export default App;
