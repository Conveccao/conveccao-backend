import{ Router } from 'express'
import { SensorControllers } from './controllers/sensorControllers'
import { SensorTypeControllers } from './controllers/sensorTypeControllers'
import { StationControllers } from './controllers/stationControllers'

const routes = Router()

routes.get('/get-stations', new StationControllers().get)
routes.get('/get-stations/:id', new StationControllers().getById)
routes.post('/stations', new StationControllers().create)
routes.delete('/delete-stations/:id', new StationControllers().delete)
routes.put('/update-station/:id', new StationControllers().update)

routes.post('/sensorType', new SensorTypeControllers().create)
routes.get('/get-sensorsType', new SensorTypeControllers().get)


routes.post('/sensor', new SensorControllers().create)
routes.get('/get-sensors', new SensorControllers().get)
routes.get('/get-sensor/:id', new SensorControllers().getById)
routes.delete('/delete-sensor/:id', new SensorControllers().delete)
routes.put('/put-sensor/:id', new SensorControllers().put)

export default routes