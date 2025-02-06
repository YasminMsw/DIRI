import React, { MouseEventHandler, useContext, useState } from "react";
import { MenuItem } from "../../entities/entities";
import './FoodOrder.css'
import { foodItemsContext } from "../../App";
import logger from '../../servicios/loggings';
import { addOrder } from "../../servicios/firebaseService";



interface FoodOrderProps {
  food: MenuItem;
  //onQuantityUpdated(id: number, quantity: number): void;
  onReturnToMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}
function FoodOrder(props: FoodOrderProps) {
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad seleccionada
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar el mensaje de confirmación
  const [isOrdered, setIsOrdered] = useState(false); // si está pedido

  const totalPrice = quantity * props.food.price;

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    logger.debug("Empezando el cambio de la cantidad");
    const updatedQuantity = parseInt(event.target.value) || 1;
    setQuantity(updatedQuantity);
    // props.onQuantityUpdated(props.food.id, updatedQuantity);
    logger.info("Cantidad cambiada!")
  };
  const handleOrderSubmit = async() => {
   // props.onQuantityUpdated(props.food.id, quantity);
    handleClick();
    console.log("hola");

    setShowConfirmation(true); // Muestra el mensaje de confirmación
    const orderData = {
      name: props.food.name,
      quantity: quantity,
      price: totalPrice,
      date: new Date().toISOString(), // Guarda la fecha del pedido
    };
    console.log("hola")
  //guardar el pedido en firebase
    try {
      await addOrder(orderData);
      console.log(`Pedido enviado a Firebase`,orderData);
      logger.info(`Pedido enviado a Firebase`);
    } catch (error) {
      console.error("Error al guardar el pedido en Firebase",error);
      logger.error("Error al guardar el pedido en Firebase");
    }




  };
  const menuItems: MenuItem[] = useContext(foodItemsContext);
  const handleClick = () => {
    setIsOrdered(true);
    menuItems.map((item: MenuItem) => {
    if (item.id === props.food.id) {
    item.quantity = item.quantity - quantity;
    }
    });
    };
  return (
    <div className="foodOrder">
      <h1>{props.food.name}</h1>
      <img src={`/images/${props.food.image}`} style={{ width: '500px', height: 'auto', borderRadius: '8px' }}/>

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
