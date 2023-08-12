const  express = require("express")
const cors = require("cors")
const colors = require("colors")
const morgan = require("morgan")
const dotenv = require("dotenv") 
const connectDB = require("./config/connectDB")
const userRoutes = require("./routes/userRoute")



//config dotenv file
dotenv.config()


//database call
connectDB()

//rest
const app = express()


//middleware 
app.use(morgan('dev'))
app.use(express.json())
app.use(cors()) 


//routes
app.use('/api/v1/users', userRoutes)


//port  
const port = 8080 || process.env.PORT 

app.listen(port, ()=> console.log("server running on port "+ port ) ) 