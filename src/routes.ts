import{ Router } from 'express'
import { SensorControllers } from './controllers/sensorControllers'
import { SensorTypeControllers } from './controllers/sensorTypeControllers'
import { StationControllers } from './controllers/stationControllers'

const routes = Router()

routes.get('/get-stations', new StationControllers().get)
routes.get('/get-stations/:id', new StationControllers().getById)
routes.post('/stations', new StationControllers().create)
routes.post('/sensorType', new SensorTypeControllers().create)
routes.post('/sensor', new SensorControllers().create)


routes.delete('/delete-stations/:id', new StationControllers().delete)

export default routes