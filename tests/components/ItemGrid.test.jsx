const { render, screen } = require("@testing-library/react");
const { ItemGrid } = require("../../src/components/ItemGrid");

const mockIndex = [
  {
    indice: {
      codigo: "uf",
      nombre: "Unidad de fomento (UF)",
      unidad_medida: "Pesos",
      fecha: "2022-08-20T04:00:00.000Z",
      valor: 33669,
    },
  },
];

describe("Tests in ItemGrid Component", () => {
  it("match with snapshot", () => {
    const index = mockIndex[0].indice;
    const { container } = render(<ItemGrid indice={index} />);
    expect(container).toMatchSnapshot();
  });

  it("should show title of indice in component", () => {
    const index = mockIndex[0].indice;
    render(<ItemGrid indice={index} />);
    expect(screen.getByText(index.nombre)).toBeTruthy();
  });
});
