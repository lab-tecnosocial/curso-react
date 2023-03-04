import "./App.css";
import React, { useState, useEffect } from "react";
import Personaje from "./Personaje";

function App() {
  const [loading, setLoading] = useState(true);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getDataFromAPI(); //Traer datos desde una BD o API
  }, []);

  const getDataFromAPI = async () => {
    try {
      const response = await fetch(
        "https://naruto-api.fly.dev/api/v1/characters"
      );
      await response.json().then((data) => {
        setPersonajes(data);
        setLoading(false);
        console.log(data);
      });
    } catch (error) {
      console.log("Hubo un problema: " + error.message);
    }
  };

  return (
    <div>
      Ejercicio useState y useEffect
      <hr />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        personajes.map((item) => (
          <Personaje key={item.id} name={item.name} image={item.images[0]} />
        ))
      )}
    </div>
  );
}

export default App;
