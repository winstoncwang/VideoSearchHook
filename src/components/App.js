import React from 'react';

import youtube from '../apis/youtube';

//components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCwzQbW7NX2QfO2ovUQJHuPdl138QSRSU4';
// key did not merge in params for axios, its a bug

class App extends React.Component {
	state = { videoList: [], videoSelected: [] };

	onTermSubmit = async (term) => {
		//child from parent
		const response = await youtube.get('/search', {
			params : {
				part : 'snippet',
				key  : KEY,
				q    : term
			}
		});

		this.setState({ videoList: response.data.items });
	};

	onSelectVideoChange = (video) => {
		this.setState({ videoSelected: video });
	};

	render () {
		return (
			<div className="ui grid container segment">
				<SearchBar onSubmit={this.onTermSubmit} />
				<VideoDetail
					vList={this.state.videoList}
					sVideo={this.state.videoSelected}
				/>
				{/*vlist:videolist slist:selectedvideo */}
				<VideoList
					vLists={this.state.videoList}
					onSelectVideo={this.onSelectVideoChange}
				/>
			</div>
		);
	}
}

export default App;
