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
routes.get('/get-sensors', new SensorControllers().get)
routes.get('/get-sensor/:id', new SensorControllers().getById)
routes.delete('/delete-stations/:id', new StationControllers().delete)
routes.put('/update-station/:id', new StationControllers().update)
routes.delete('/delete-sensor/:id', new SensorControllers().delete)

export default routes