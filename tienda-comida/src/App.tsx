import React, { Suspense, useState } from "react";
import { MenuItem } from "./entities/entities";
import "./App.css";
import FoodOrder from "./components/FoodOrder/FoodOrder";
import ErrorBoundary from "./components/ErrorBoundary"; 
import ProblematicComponent from "./components/ProblematicComponent";

const Foods = React.lazy(() => import("./components/Food"));
export const foodItemsContext = React.createContext<MenuItem[]>([]);

function App() {
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null); // Estado para el producto seleccionado
  const [showForm, setShowForm] = useState(false);
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
    console.log(selectedFood);
  };
  const handleQuantityUpdate = (id: number, orderedQuantity: number) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity - orderedQuantity), // Resta y asegura que no sea negativo
            }
          : item
      )
    );
  };
  const handleReturnToMenu = () => {
    setSelectedFood(null);
    setIsChooseFoodPage(false)
    setShowForm(false);
  };
  return (
    <ErrorBoundary fallback={<h2 style={{ color: "red" }}>¡Algo salió mal en la aplicación!</h2>}>

    <foodItemsContext.Provider value={menuItems}>

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
                <li key={item.id} className="liApp">
                  <p>{item.name}</p>
                  <p>#{item.quantity}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {isChooseFoodPage && !selectedFood && (
        <Suspense fallback={<p>Cargando menú...</p>}>
          <Foods
            foodItems={menuItems}
            onFoodSelected={(food) => handleFoodSelect(food)}
          />
        </Suspense>
      )}

      {isChooseFoodPage && selectedFood && (
        <FoodOrder
          food={selectedFood}
         // onQuantityUpdated={handleQuantityUpdate}
          onReturnToMenu={handleReturnToMenu}
        />
      )}
    </div>
    </foodItemsContext.Provider>
    </ErrorBoundary>
  );

  // return (
  //   <ErrorBoundary fallback={<h2 style={{ color: "red" }}>¡Algo salió mal en la aplicación!</h2>}>
  //     <ProblematicComponent />
  //   </ErrorBoundary>
  // );

}
export default App;
