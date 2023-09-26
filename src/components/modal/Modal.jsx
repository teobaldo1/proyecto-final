import "./Modal.css";

function Modal({
  obtenerDato,
  active,
  activarModal,
  london,
  barcelona,
  longBeach,
}) {
  return (
    <div className={active}>
      <div id="x">
        <button onClick={activarModal} id="botonx">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <div id="cajaModal">
        <form className="cajaInput" onSubmit={obtenerDato}>
          <input type="text" id="inputModal" placeholder="Search Location" />
          <button onClick={activarModal} id="boton">
            Search
          </button>
        </form>

        <div className="listaFija">
          <form className="contenedoinput" onClick={activarModal}>
            <input
              type="text"
              className="inputs"
              placeholder="London"
              onClick={london}
            />
          </form>
          <form className="contenedoinput" onClick={activarModal}>
            <input
              type="text"
              className="inputs"
              placeholder="Barcelona"
              onClick={barcelona}
            />
          </form>
          <form className="contenedoinput" onClick={activarModal}>
            <input
              type="text"
              className="inputs"
              placeholder="Long Beach"
              onClick={longBeach}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
