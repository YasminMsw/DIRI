import { useState } from "react";
import { MenuItem } from "../entities/entities";
import FoodOrder from "./FoodOrder/FoodOrder";
import { useAuth } from "../contexts/AuthContext";
import { Role } from "../servicios/IAuthService";

interface FoodsProps {
  foodItems: MenuItem[];
  onFoodSelected: (food: MenuItem) => void;
}
function Foods(props: FoodsProps) {
  

  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null); // Estado para el producto seleccionado

  const handleFoodSelect = (food: MenuItem) => {
    setSelectedFood(food);
    props.onFoodSelected(food);
  };
  return (
    <>
      <h4 className="foodTitle">Choose from our Menu</h4>
      <ul className="ulFoods">
        {props.foodItems.map((item) => {
          return (
            <li
              key={item.id}
              className="liFoods"
              onClick={() => handleFoodSelect(item)}
            >
              <img
                className="foodImg"
                src={`/images/${item.image}`}
                alt={`Imagen de ${item.name}`}
                data-testid={`food-image-${item.id}`}
              />
              <div className="foodItem">
                <p className="foodDesc">{item.desc}</p>
                <p className="foodPrice">{item.price}$</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Foods;
