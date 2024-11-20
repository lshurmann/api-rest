import express from "express"
import { routes } from "./routes"
import { errorHandler } from "./middlewares/errorMiddleware"

const PORT = 3010

const app = express()
app.use(express.json())

app.use(routes)

app.use(errorHandler)

app.listen(PORT)
