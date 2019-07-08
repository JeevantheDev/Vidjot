if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://jjdash:jeevan04@cluster0-0pbd0.mongodb.net/test?retryWrites=true&w=majority'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }