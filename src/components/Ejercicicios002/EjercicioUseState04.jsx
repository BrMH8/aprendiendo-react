import { useState } from "react";

export const EjercicioUseState04 = () => {
    const [color, setColor] = useState("blue");

    return (
        <>
        <h1>pelota cambia color</h1>
        <div className="row mt-4">
        <div className="bg-black mb-2  col-12" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "300px"
        }}>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: color,
                    marginBottom: "24px",
                    border: "2px solid #fff"
                }}
            />
            <div>
                <button className="btn btn-primary" onClick={() => setColor("blue")} style={{ margin: "0 8px" }} >Azul</button>
                <button className="btn btn-danger" onClick={() => setColor("red")} style={{ margin: "0 8px" }}>Rojo</button>
                <button className="btn btn-success" onClick={() => setColor("green")} style={{ margin: "0 8px" }}>Verde</button>
            </div>
        </div>
        </div>
        
        </>
        
    );
}
