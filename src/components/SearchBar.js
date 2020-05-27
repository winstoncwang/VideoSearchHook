import React from 'react';
import axios from 'axios';

class SearchBar extends React.Component {
	//state
	state = { term: '' };

	async componentDidMount () {
		//get method
		// const searchResult = await axios.get(
		// 	'https://www.googleapis.com/youtube/v3/search',
		// 	{
		// 		header : {},
		// 		params : {
		// 			part : this.props.term
		// 		}
		// 	}
		// );
	}

	onSubmitForm (e) {
		e.preventDefault();
	}

	render () {
		return (
			<div className="ui segment wide column search-bar">
				<form className="ui form" onSubmit={this.onSubmitForm}>
					<div className="field">
						<label>Video Search:</label>
						<input
							type="text"
							placeholder="Search your favourite Vclip...."
							onChange={(e) => {
								this.setState({ term: e.target.value });
							}}
							value={this.props.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
