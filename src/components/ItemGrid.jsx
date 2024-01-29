import PropTypes from "prop-types";

export const ItemGrid = ({ indice }) => {
  return (
    <>
      <div className="card">
        <div data-testid="title" className="title">
          {indice.nombre}
        </div>
        <div className="value">{indice.valor?.toLocaleString()}</div>
        <div className="detail">
          {indice.unidad_medida}
          <br />
          {new Date(indice.fecha).toDateString()}
        </div>
      </div>
    </>
  );
};

ItemGrid.propTypes = {
  indice: PropTypes.object.isRequired,
};
