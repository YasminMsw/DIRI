import { useState } from "react";
import { MenuItem } from "./entities/entities";
import Foods from "./components/Food";
import './App.css'
import FoodOrder from "./components/FoodOrder/FoodOrder";

function App() {
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null); // Estado para el producto seleccionado
  
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Hamburguesa de Pollo",
      quantity: 40,
      desc: "Hamburguesa de pollo frito - … y mayonesa",
      price: 24,
      image: "1.jpg",
    },
    {
      id: 2,
      name: "Hot Dogs",
      quantity: 50,
      desc: "Hot Dogs con ketchup",
      price: 24,
      image: "2.jpg",
    },
    {
      id: 3,
      name: "Tacos al Pastor",
      quantity: 30,
      desc: "Tacos tradicionales con carne de cerdo marinada, piña, cilantro y cebolla.",
      price: 15,
      image: "3.jpg",
    },
    {
      id: 4,
      name: "Burrito Clásico",
      quantity: 25,
      desc: "Burrito relleno de carne, vegetales frescos y salsas, acompañado de papas fritas.",
      price: 18,
      image: "4.jpg",
    },
  ]);

  const handleFoodSelect = (food: MenuItem) => {
    setSelectedFood(food);
    console.log(food)
  };
  const handleQuantityUpdate = (id: number, quantity: number) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  return (
    <div className="App">
      <button
        className="toggleButton"
        onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
      >
        {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
      </button>
      <h3 className="title">Comida Rápida Online</h3>
      {!isChooseFoodPage && (
        <>
          <h4 className="subTitle">Menús</h4>
          <ul className="ulApp">
            {menuItems.map((item) => {
              return (
                <li key={item.id} className="liApp" >
                  <p>{item.name}</p>
                  <p>#{item.quantity}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}

      {selectedFood && (
        <FoodOrder
          food={selectedFood}
          onQuantityUpdated={handleQuantityUpdate}
          onReturnToMenu={handleReturnToMenu}
        />
      )}
    </div>
  );
}
export default App;
