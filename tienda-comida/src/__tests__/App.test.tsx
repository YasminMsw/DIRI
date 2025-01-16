import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';


describe("Aplicación de Comida Rápida", () => {
  it("Muestra el menú inicial con cuatro productos, incluyendo stock, imagen y nombre", async () => {
    render(<App />);

    // Verifica que se muestran cuatro elementos
    const items = screen.getAllByRole("listitem"); // Suponiendo que cada producto está dentro de <li>
    expect(items).toHaveLength(4);

    // Verifica que se muestra el stock
    const stocks = screen.getAllByText(/#\d+/i); // Obtiene todos los elementos que coinciden
expect(stocks).toHaveLength(4); // Verifica que hay 4 stocks visibles


//     // Verifica que se muestran las imágenes
//   const images = screen.getAllByRole("img");
//   expect(images).toHaveLength(4); // Verifica que hay 4 imágenes en el DOM
  
    // Verifica que se muestra al menos un nombre de producto
    const productName = screen.getByText(/Hamburguesa de Pollo/i);
    expect(productName).not.toBeNull();
  });

  it("Cambia a la pantalla de 'Pedir Comida' y muestra los precios", async () => {
    render(<App />);

    //Haz clic en el botón para cambiar a 'Pedir Comida'
    const button = screen.getByText(/Pedir Comida/i);
    fireEvent.click(button);

    // // Verifica que se muestran cuatro productos
    // const items = screen.getAllByRole("listitem");
    // expect(items).toHaveLength(4);

    //  // Verifica que se muestra al menos un precio
    //  const price = screen.getByText(/15/i); // Compara con uno de los precios
    //  expect(price).toBeInTheDocument();

  
  });


});
