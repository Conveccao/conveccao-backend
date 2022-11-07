import{ Router } from 'express'
import { ParameterControllers } from './controllers/parameterControllers'
import { ParameterTypeControllers } from './controllers/parameterTypeControllers'
import { StationControllers } from './controllers/stationControllers'
import { UserControllers } from './controllers/userControllers'
import { authMiddleware } from './middleware/authMiddleware'
import valueController from './controllers/valueController'
import { GaugedControllers } from './controllers/GaugedControllers'

const routes = Router()

routes.get('/stations', new StationControllers().get)
routes.get('/stations/:id', new StationControllers().getById)
routes.get('/station-references/:id', new StationControllers().getReferenceByStation)
routes.post('/stations', new StationControllers().create)
routes.delete('/stations/:id', new StationControllers().delete)
routes.put('/stations/:id', new StationControllers().update)
routes.put('/stations/activate/:id', new StationControllers().activate)
routes.put('/stations/deactivate/:id', new StationControllers().deactivate)

routes.post('/parameterTypes', new ParameterTypeControllers().create)
routes.get('/parameterTypes', new ParameterTypeControllers().get)
routes.put('/parameterTypes/:id', new ParameterTypeControllers().update)

routes.post('/parameters', new ParameterControllers().create)
routes.get('/parameters', new ParameterControllers().get)
routes.get('/parameters/:id', new ParameterControllers().getById)
routes.delete('/parameters/:id', new ParameterControllers().delete)
routes.put('/parameters/:id', new ParameterControllers().put)
routes.put('/parameters/activate/:id', new ParameterControllers().activate)

routes.post('/user', new UserControllers().create)
routes.get('/users', new UserControllers().get)
routes.post('/user-exists', new UserControllers().getByEmail)
routes.post('/login', new UserControllers().login)
routes.delete('/user/:id', new UserControllers().delete)
routes.put('/update-user/:id', new UserControllers().put)
routes.get('/profile', authMiddleware, new UserControllers().getProfile) //// exemplo de rota que precisa de autenticação para acessar

routes.post('/createValue', valueController.createValue)
routes.get('/readAllValues', valueController.readAll)

//routes.get('/test-csv', new GaugedControllers().createCsv)
routes.get('/measures', new GaugedControllers().getAllMeasures)
routes.get('/station-measures/:id', new GaugedControllers().getAllMeasuresPerStation)
routes.get('/station-measures/:id/:ref', new GaugedControllers().getAllMeasuresPerStationAndParemeter)
export default routes