var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
  },  
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));


var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src}) 
      )
    )
  },
});
var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));






















