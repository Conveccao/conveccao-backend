import { StationControllers} from "../../src/controllers/stationControllers"
import TesteUtil from "../../src/common/test/testeUtil"

const mockRepository = {
  create: jest.fn(),
  delete: jest.fn(),
  save: jest.fn(),
  send: jest.fn(), 
  status: jest.fn(),
  findOneBy: jest.fn(),
  find: jest.fn(),
  getById: jest.fn(),

};

describe('getById', () => {
    it(' deve puxar uma estação cadastrada pelo Id', async () =>{
      const station = TesteUtil.giveMeaValidStation();
      mockRepository.find.mockReturnValue([station]);
      const stationfound = StationControllers.getById("2")
      expect(stationfound).toMatchObject({nome: station.name})

    })
  });
  
describe("criando estação", () =>{
  it('Deve criar uma estação', async () => {
    const station = TesteUtil.giveMeaValidStation();
    mockRepository.save.mockReturnValue(station);
    mockRepository.create.mockReturnValue(station);
    const savedstation = await StationControllers.create(station);
    expect(savedstation).toMatchObject(station);
    expect(mockRepository.create).toBeCalledTimes(1);

  })
})
