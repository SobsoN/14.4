var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'https://www.altpress.com/images/uploads/news/voldemort_harry_potter.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu Sawanny',
    img: 'https://moviesroom.pl/images/0.Aktualizacja_listopad/Dude%C5%82e/kr%C3%B3l_lew.jpg'
  },
  {
  	id: 3,
    title: 'Kac Vegas',
    desc: 'Film o 4 takich co poszli w miasto',
    img: 'http://hojeemdia.com.br/polopoly_fs/1.80236.1457587610!/image/image.jpg_gen/derivatives/landscape_300/image.jpg'
    
  }
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	}, 
	render: function () {
		return (
			React.createElement('li', {
				key: this.props.movie.id
			},
			React.createElement(MovieTitle, {
				tytul: this.props.movie.title
			}),
			React.createElement(MovieDesc, {
				desc: this.props.movie.desc
			}),
			React.createElement(MovieImage, {
				image: this.props.movie.img
			})
			)
		)
	}
});

var MovieImage = React.createClass({
	propTypes: {
		image: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			React.createElement('img', {src: this.props.image})
		)
	}
})

var MovieTitle = React.createClass({
	propTypes: {
		tytul: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			React.createElement('h2', {}, this.props.tytul)
		)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},
	render: function () {
		return (
			React.createElement('p', {}, this.props.desc)
		)
	}
});

var moviesElements = movies.map(function(movie) {
	return  React.createElement(Movie, {
		key: movie.id,
		movie: movie
	})
});

var MoviesList = React.createClass({
	render: function () {
		return (
			React.createElement('ul', {}, moviesElements)
		)
	}
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {})
  );

ReactDOM.render(element, document.getElementById('app'));