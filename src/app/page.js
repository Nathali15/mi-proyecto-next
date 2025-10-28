"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Boton from "./componentes/boton/boton";

export default function Home() {
  const maleta = () => {
    alert("Bienvenido a la página de producto");
  };

  const obtProducto = () => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => {
        console.log("Estado del fetch:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
      });
  };

  useEffect(() => {
    maleta();
  }, []);

  return (
    <div className={styles.page}>
      <h1>Producto</h1>
      <div id="product" className="card">
        {" "}
        Cargando...
      </div>
      <Boton />
      <button
        onClick={obtProducto}
        style={{
          backgroundColor: "rgb(242, 198, 65)",
          color: "rgb(70, 0, 132)",
          fontWeight: "bold",
          fontFamily: "Jockey One",
          padding: "8px 4px",
          borderColor: "#daa402ff",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Obtener Producto
      </button>
    </div>
  );
}
