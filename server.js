

const express = require('express')
const app = express()
const archivoDb = require('./conexion');
const port = 4100

//Importacion rutas y modelos
app.use(express.json());
const rutausuario = require('./rutas/usuario')


const cors = require('cors');
app.use(cors({origin: `*`}));
app.options('http://localhost:3000', cors());



app.use('/api/usuario', rutausuario)

const bodyParser = require('body-parser')
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:'true'}))



app.get('/', (req, res) => {
  res.send('Hola, este el servidor Backend!')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`)
})