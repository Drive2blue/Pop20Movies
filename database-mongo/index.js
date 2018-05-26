var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/favmovies');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var movieSchema = mongoose.Schema({
  title: {
    type: String, 
    unique: true
  },
  poster: String 
});

//Movie is the collection 
var Movie = mongoose.model('movie', movieSchema);

let save = (movie) => {
  return Movie.findOneAndUpdate(
    {
      title: movie.title 
    }, 
    {
      title: movie.title, 
      poster: movie.poster_path   
    },
    {upsert: true}
    ).exec()   
}

var selectAll = function(callback) {
  Movie.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.save = save 
module.exports.selectAll = selectAll

