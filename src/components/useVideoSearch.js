import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyCwzQbW7NX2QfO2ovUQJHuPdl138QSRSU4';
// key did not merge in params for axios, its a bug

const useVideoSearch = (defaultSearchTerm) => {
	const [ videoList, setVideoList ] = useState([]);

	useEffect(
		() => {
			search(defaultSearchTerm);
		},
		[ defaultSearchTerm ]
	);

	const search = async (term) => {
		//child from parent
		const response = await youtube.get('/search', {
			params : {
				part : 'snippet',
				key  : KEY,
				q    : term
			}
		});

		setVideoList(response.data.items);
	};

	return [ videoList, search ];
};

export default useVideoSearch;
