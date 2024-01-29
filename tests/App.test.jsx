import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { useFetchIndices } from "../src/hooks/useFetchIndices";

jest.mock("../src/hooks/useFetchIndices");

describe("App Component", () => {
  test("should show loading... to init", () => {
    useFetchIndices.mockReturnValue({
      indices: [],
      isLoading: true,
    });
    render(<App />);
    expect(screen.getByText("Cargando..."));
  });
  test("should show data when load data finished", () => {
    const mockIndices = [
      {
        codigo: "uf",
        nombre: "Unidad de fomento (UF)",
        unidad_medida: "Pesos",
        fecha: "2022-08-21T04:00:00.000Z",
        valor: 33685.1,
      },
      {
        codigo: "ivp",
        nombre: "Indice de valor promedio (IVP)",
        unidad_medida: "Pesos",
        fecha: "2022-08-21T04:00:00.000Z",
        valor: 34223.11,
      },
    ];
    useFetchIndices.mockReturnValue({
      indices: mockIndices,
      isLoading: true,
    });
    render(<App />);
    expect(screen.getAllByTestId("title").length).toBe(2);
  });

  it("match with snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
