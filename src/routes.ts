import{ Router } from 'express'
import { SensorControllers } from './controllers/sensorControllers'
import { SensorTypeControllers } from './controllers/sensorTypeControllers'
import { StationControllers } from './controllers/stationControllers'
import { UserControllers } from './controllers/userControllers'
import { authMiddleware } from './middleware/authMiddleware'

const routes = Router()

routes.get('/stations', new StationControllers().get)
routes.get('/stations/:id', new StationControllers().getById)
routes.post('/stations', new StationControllers().create)
routes.delete('/stations/:id', new StationControllers().delete)
routes.put('/stations/:id', new StationControllers().update)

routes.post('/sensorTypes', new SensorTypeControllers().create)
routes.get('/sensorTypes', new SensorTypeControllers().get)

routes.post('/sensors', new SensorControllers().create)
routes.get('/sensors', new SensorControllers().get)
routes.get('/sensors/:id', new SensorControllers().getById)
routes.delete('/sensors/:id', new SensorControllers().delete)
routes.put('/sensors/:id', new SensorControllers().put)

routes.post('/user', new UserControllers().create)
routes.post('/login', new UserControllers().login)
routes.delete('/user/:id', new UserControllers().delete)
routes.get('/profile', authMiddleware, new UserControllers().getProfile) //// exemplo de rota que precisa de autenticação para acessar

export default routes