import React, { MouseEventHandler, useState } from "react";
import { MenuItem } from "../../entities/entities";
import './FoodOrder.css'

interface FoodOrderProps {
  food: MenuItem;
  onQuantityUpdated(id: number, quantity: number): void;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}
function FoodOrder(props: FoodOrderProps) {
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar el mensaje de confirmación

  const totalPrice = quantity * props.food.price;

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQuantity = parseInt(event.target.value) || 1;
    setQuantity(updatedQuantity);
    props.onQuantityUpdated(props.food.id, updatedQuantity);
  };
  const handleOrderSubmit = () => {
    setShowConfirmation(true); // Muestra el mensaje de confirmación
  };
  return (
    <div className="foodOrder">
      <h3>Ordenar: {props.food.name}</h3>
      <p>{props.food.desc}</p>
      <p>Precio unitario: {props.food.price}€</p>

      {/* Selección de cantidad */}
      <label>
        Cantidad:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <p>Total: {totalPrice}€</p>

      {/* Botón para enviar el pedido */}
      <button onClick={handleOrderSubmit} className="submitOrderButton">
        Enviar Pedido
      </button>

      {/* Mensaje de confirmación */}
      {showConfirmation && (
        <p className="confirmationMessage">
          ¡Pedido enviado con éxito por un total de {totalPrice}€!
        </p>
      )}

      {/* Botón para volver al menú */}
      <button onClick={props.onReturnToMenu} className="returnButton">
        Volver al Menú
      </button>
    </div>
  );
}

export default FoodOrder;
