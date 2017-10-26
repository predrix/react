var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3xCYs6Tbn-aDz1k_8obBFh9c6cZXQLqmtHhSF10AJcIqW3f2kQ'
  },  
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'http://1.fwcdn.pl/ph/68/78/6878/213982.2.jpg'
  },
  {
    id: 3,
    title: 'Matrix',
    desc: 'Film o wirtualnym świecie',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHQRuQhDRcDJRPCx24OA_Tuq7POB1vAplDV7dDhcTjjeWe2K56A'
  },
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.src}),
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





















