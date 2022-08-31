import{ Router } from 'express'
import { StationControllers } from './controllers/stationControllers'

const routes = Router()

routes.post('/stations', new StationControllers().create)

export default routes