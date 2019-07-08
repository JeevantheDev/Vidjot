if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://jeevanjyotidash:myfamily4@myfirstcluster-0cfh2.mongodb.net/test?retryWrites=true&w=majority'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
  }