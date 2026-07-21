import { useState } from "react";
import "./App.css";
import imagen2 from "./assets/Jake.jpg";

function App() {
  const ciudades = {
    "República Dominicana": [
      "Santo Domingo",
      "Santiago",
      "San Pedro de Macoris",
    ],
    "Estados Unidos": [
      "Nueva York",
      "Miami",
      "Los Ángeles",
    ],
    España: [
      "Madrid",
      "Barcelona",
      "Sevilla",
    ],
  };

  const [pais, setPais] = useState("");

  return (
    <div className="App">
      <h1>Actividad 5</h1>

      <h2>Imagen desde la carpeta public</h2>
      <img
        src="/Rolo.jpg"
        alt="Imagen desde public"
        width="300"
      />

      <h2>Imagen desde la carpeta src</h2>
      <img
        src={imagen2}
        alt="Imagen desde src"
        width="300"
      />

      <hr />

      <h2>Select dependiente</h2>

      <label>País:</label>
      <br />

      <select
        value={pais}
        onChange={(e) => setPais(e.target.value)}
      >
        <option value="">Seleccione un país</option>
        <option value="República Dominicana">
          República Dominicana
        </option>
        <option value="Estados Unidos">
          Estados Unidos
        </option>
        <option value="España">
          España
        </option>
      </select>

      <br />
      <br />

      <label>Ciudad:</label>
      <br />

      <select disabled={!pais}>
        <option value="">Seleccione una ciudad</option>

        {pais &&
          ciudades[pais].map((ciudad) => (
            <option key={ciudad} value={ciudad}>
              {ciudad}
            </option>
          ))}
      </select>
    </div>
  );
}

export default App;