export const Ejercicio02 = () => {
    //logica del componente
    //variables, funciones, hooks, etc.
    const nombreProducto = 'smart tv 90';

    function agregarACarritoDeCompras() {
        console.log('EL producto ' + nombreProducto + ' ha sido agregado al carrito de compras');
    }
    function eliminarDelCarritoDeCompras() {
        console.log('El producto ' + nombreProducto + ' ha sido eliminado del carrito de compras');
    }
  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <h2 className="h4 mt-4">
                Ejercicio 2 - Botón y funciones 
            </h2>
            <hr />
        </div>
        <button onClick={agregarACarritoDeCompras} className="w-25 btn btn-primary">
            <i class="bi bi-plus-square"></i>
            <span className="ms-2">Agregar Articulo</span>
        </button>
        <button onClick={eliminarDelCarritoDeCompras} className="w-25 btn btn-danger ">
            <i className="bi bi-trash3"></i>
            <span className="ms-2">Eliminar Articulo</span>
        </button>
    </div>
    </>
  );
};
