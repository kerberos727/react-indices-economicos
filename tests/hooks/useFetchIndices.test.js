import { renderHook, waitFor } from "@testing-library/react";
import { useFetchIndices } from "../../src/hooks/useFetchIndices";

describe('useFetchIndices,js', () => { 
  test('should return initial state', () =>{

    const {result } = renderHook( () => useFetchIndices());
    const { indices, isLoading } = result.current;

    expect( indices.length).toBe(0);
    expect(isLoading).toBeTruthy()
  })
  test('should return data & isLoading = false', async() =>{

    const {result } = renderHook( () => useFetchIndices());
    
    await waitFor(
      () => expect( result.current.indices.length).toBeGreaterThan(0),
      {timeout:10000}
    );
    const { indices, isLoading } = result.current;

    expect( indices.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy()
  })
 })