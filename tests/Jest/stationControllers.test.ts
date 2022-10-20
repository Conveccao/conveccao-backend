import { StationControllers} from "../../src/controllers/stationControllers"
import TesteUtil from "../../src/common/test/testeUtil"
import {describe, expect, test, it, jest } from '@jest/globals';
import { stationRepository } from "../../src/repositories/stationRepository";

const teste = 'testing'

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
      let mockStation = mockRepository.find.mockReturnValue([station]);
      expect(mockStation).toBeTruthy();
  })
});

 describe('Teste de test', () => {
  test('Testing Jest', () => {
    expect(teste).toBe('testing')
 });
})
