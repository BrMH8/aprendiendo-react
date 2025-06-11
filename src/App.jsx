import { Botones } from './components/Botones.jsx';
import { Ejercicio01 } from './components/ejercicio01.jsx';
import { Ejercicio02 } from './components/Ejercicio02.jsx';
import { Ejercicio03 } from './components/Ejercicio03.jsx';
import { BotonGeneral } from './components/utils/BotonGeneral.jsx';
function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">Hola UTSH</h1>

          </div>
        </div>
        <Ejercicio01 />
        <BotonGeneral />
        <Botones />
        <Ejercicio02 />
        <Ejercicio03 />
      </div>
    </>
  )
}

export default App