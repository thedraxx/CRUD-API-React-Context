import CrudApi from "./Components/CrudApi";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div>
      <h1>REACT con Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
    </div>
  );
}

export default App;
