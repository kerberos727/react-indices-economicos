import { ItemGrid } from "./components/ItemGrid";
import { useFetchIndices } from "./hooks/useFetchIndices";

const App = () => {
  const { indices, isLoading } = useFetchIndices();

  return (
    <>
      <h1>Indices Economicos Chilenos</h1>
      <hr />
      {isLoading && <h1>Cargando...</h1>}
      <div className="card-grid">
        {indices.map((i) => (
          <ItemGrid key={i.codigo} indice={i} />
        ))}
      </div>
    </>
  );
};

export default App;
