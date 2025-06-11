import { CrearCue } from "./utils/CrearCue"
import { IniciarSe } from "./utils/IniciarSe"


export const Botones = () => {
  return (
    <div className="row">
            <div className=" bg-black d-flex flex-direction-row ">
        <CrearCue />
        <IniciarSe />
    </div>
    </div>
  )
}
