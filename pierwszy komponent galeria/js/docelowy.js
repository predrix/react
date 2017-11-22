var Movie = React.createClass({

	render: function() {
		return React.createElement('li', {key: movie.id},
			React.createElement('h2', {}, movie.title),
			React.createElement('p', {}, movie.desc),
    	);
    }	
	propTypes: {
	},	
});
var element = React.createElement(Movie, {key: movie_id, movie_title, movie_desc},);
ReactDOM.render(element, document.getElementById('app'));