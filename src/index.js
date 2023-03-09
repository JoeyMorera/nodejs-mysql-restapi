import express from "express";
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from "./routes/index.routes.js";
import {PORT} from "./config.js";

const app = express()

app.use(express.json())     //interpretar los post json

//Routes
app.use(indexRoutes)
app.use(employeesRoutes)

//Routes que no existen
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint Not found'
    })
})



app.listen(PORT)
console.log('Server on port',PORT)