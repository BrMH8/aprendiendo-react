import { Botones } from './components/Botones.jsx';
import { EjercicioUseState03 } from './components/Ejercicicios002/EjercicioUseState03.jsx';
import { EjercicioUseState04 } from './components/Ejercicicios002/EjercicioUseState04.jsx';
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
        <EjercicioUseState03 />
        <EjercicioUseState04 />
        
      </div>
    </>
  )
}

export default App