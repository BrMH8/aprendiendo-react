export const Ejercicio03 = () => {
    // Lógica del componente
    //const [Numerito, setNumerito] = useState(0);
    let numero = 0;
    const sumar = () => {
        numero+=1;
        console.log("El número actual es: " + numero);
        document.querySelector('.h1').textContent = numero;
    }
    const restar = () => {
        numero-=1;
        console.log("El número actual es: " + numero);
        document.querySelector('.h1').textContent = numero; 
    }
    const restart = () => {
        numero = 0;
        console.log("El número ha sido reiniciado a: " + numero);
        document.querySelector('.h1').textContent = numero; 
    }   
    return (
    <>
    <div className="row mt-4">
        <div className="col-12"> 
            <h2 className="h4 mt-4">
                Ejercicio 2 - Funciones y contador 
            </h2>
            <hr />
        </div>
        <div className="col-12 text-center">
            <p className="h1">0</p>
            <button className="btn btn-primary w-10 " onClick={sumar}>
                <i className="bi bi-plus-square align-items-center"></i>
                <span className=""></span>
            </button>
            <button className="btn btn-primary w-10 " onClick={restart}>
                <i class="bi bi-arrow-clockwise"></i>
                <span className=""></span>
            </button>
            <button className="btn btn-primary w-10 " onClick={restar}>
                <i class="bi bi-dash"></i>
                <span className=""></span>
            </button>
        </div>
        
    </div>
    </>
  )
}
