import express from 'express'
import morgan from 'morgan'
import router from './routers/report_routes.js'

const app = express()
app.use(morgan('dev'))

app.set('port', process.env.port || 3000)

app.use(express.json())

//rutas
app.use("/api",router)

app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))


app.get('/', (req,res)=>{
    res.send("Server on")
})

export default app