/*
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

var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));

*/























var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o młodym czarodzieju mającym więcej szczęścia niż umiejętności',
    img: 'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny, który wychowywał się z dwoma hipisami',
    img: 'http://pmcdeadline2.files.wordpress.com/2016/09/the-lion-king.jpg?crop=0px%2C0px%2C1024px%2C686px&resize=446%2C299'
  },
  {
    id: 3,
    title: 'Interstellar',
    desc: 'Sci-Fi w kosmosie z wypasionymi efektami i super muzyką',
    img: 'http://1.fwcdn.pl/po/56/29/375629/7670122.6.jpg'
  },
  {
    id: 4,
    title: 'Blade Runner 2049',
    desc: 'Kolejne Sci-Fi, tyle że na Ziemi i z Androidami',
    img: 'https://static1.persgroep.net/parool/image/7d3c8f17-2686-4ff2-a667-dbe6f7d8fa90?width=664&height=374'
  }
]

var MoviesList = React.createClass({
  render: function () {
    return (React.createElement('ul', {}, moviesElements))
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('h2', {}, this.props.title)
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
var MovieImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('div',{},
      React.createElement('img', {
        src: this.props.image
      })
    )
      
    )
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      React.createElement('li', {
          src: this.props.movie.id
        },
        React.createElement(MovieTitle, {
          title: this.props.movie.title
        }),
        React.createElement(MovieDesc, {
          desc: this.props.movie.desc
        }),
        React.createElement(MovieImage, {
          image: this.props.movie.img
        })
      )
    )
  },
});

var moviesElements = movies.map(function (movie) {
  return React.createElement(Movie, {
    key: movie.id,
    movie: movie
  })
})



var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {})
  );
ReactDOM.render(element, document.getElementById('app'))