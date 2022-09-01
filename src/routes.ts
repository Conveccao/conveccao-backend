import{ Router } from 'express'
import { StationControllers } from './controllers/stationControllers'

const routes = Router()

routes.get('/get-stations', new StationControllers().get)
routes.get('/get-stations/:id', new StationControllers().getById)
routes.post('/stations', new StationControllers().create)
routes.delete('/delete-stations/:id', new StationControllers().delete)
export default routes