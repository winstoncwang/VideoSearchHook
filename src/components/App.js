import React from 'react';

import youtube from '../apis/youtube';

import SearchBar from './SearchBar';

const KEY = 'AIzaSyCwzQbW7NX2QfO2ovUQJHuPdl138QSRSU4';
// key did not merge in params for axios, its a bug

class App extends React.Component {
	async onTermSubmit (term) {
		//child from parent
		const response = await youtube.get('/search', {
			params : {
				part : 'snippet',
				key  : KEY,
				q    : term
			}
		});

		console.log(response);
	}

	render () {
		return (
			<div className="ui grid container">
				<SearchBar onSubmit={this.onTermSubmit} />
			</div>
		);
	}
}

export default App;
