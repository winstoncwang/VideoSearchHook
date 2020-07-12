import React from 'react';

class SearchBar extends React.Component {
	//state
	state = { term: '' };

	

	onSubmitForm = async (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render () {
		return (
			<div className="row">
				<div className="ui column search-bar">
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
			</div>
		);
	}
}

export default SearchBar;
