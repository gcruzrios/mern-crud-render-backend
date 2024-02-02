const mongoose = require('mongoose');

main().catch(err => console.log(err));

URI=process.env.DB_CNN;

// mongoose.connect(URI, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,
//     useFindAndModify:false
// }).then(db=> console.log('Base de datos Conectada'))
//   .catch(error=>console.log(error))



async function main() {
  await mongoose.connect(URI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const objetodb = mongoose.connection

objetodb.on('connected',() => {console.log('Conexión correcta a DB')})
objetodb.on('error',() => {console.log('Error en la conexion a DB')})

module.exports = mongoose