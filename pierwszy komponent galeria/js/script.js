var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny'
  }
];

var Movie = React.createClass({
	propTypes: {}

	render: function () {
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmów'),
				React.createElement('ul', {}, )
    		);
    	)
    };			
});
var MovieTitle = React.createClass({
	propTypes: {}

	render : function () {
		return (
			)
	}
})




var element = React.createElement(Movie, {key: movie_id, movie_title, movie_desc},);
ReactDOM.render(element, document.getElementById('app'));

