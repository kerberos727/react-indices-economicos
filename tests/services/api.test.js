import { getIndices } from "../../src/services/api";

describe('api.js', () => { 
   test('should get data from endpoint', async() => { 
    jest.setTimeout(15000)
    const indices = await getIndices();

    expect( indices.length ).toBeGreaterThan(0)
    expect( indices[0] ).toEqual(
        {
            codigo: expect.any(String),
            nombre: expect.any(String),
            unidad_medida: expect.any(String),
            fecha: expect.any(String),
            valor: expect.any(Number),
        }
    )

    })
 })