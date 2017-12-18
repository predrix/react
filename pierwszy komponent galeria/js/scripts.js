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
var MoviesList = React.createClass({
	render : function () {
		return (
			React.createElement('p', {}, 'Lista filmów' )
			)
	}
})
var MovieTitle = React.createClass({
	render : function () {
		return (
			React.createElement('p', {}, this.props.title)
			)	 
	}
})
var MovieDescription = React.createClass({
	render : function () {
		return (
			React.createElement('p', {}, this.props.desc)
			)
	}
})
var movie = React.createClass ({
	render: function () {
		return (
			React.createElement('li', {}, 
				React.createElement(MovieTitle, {title: this.props.title}),
				React.createElement(MovieDescription, {desc: this.props.desc})
				)
			)	
	}
})
var Movies = React.createClass({
	propTypes: {},

	render: function () {
		return (
			React.createElement('div', {}, 
				React.createElement(MoviesList),
				React.createElement('ul', {}, movies.map(function(film){
					return 
						React.createElement(movie, {desc: film.desc, title: film.title})
				})
				)
				)
		)
	}		
});
var element = React.createElement(Movies);
ReactDOM.render(element, document.getElementById('app'));