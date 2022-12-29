// Package imports
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()

// Modules imports
import logger from './middlewares/logger'
import PostRoutes from './routes/post/PostRoutes'
import UserRoutes from './routes/user/UserRoutes'

const port = 3000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/v1', PostRoutes)
app.use('/api/v1', UserRoutes)

app.listen(port, () => {
    logger.info('Server running on port 3000')
})