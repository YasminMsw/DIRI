import { useState } from "react";
import { MenuItem } from "../entities/entities";

interface FoodsProps {
  foodItems: MenuItem[];
}
function Foods(props: FoodsProps) {
      const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null); // Estado para el producto seleccionado
    
    const handleFoodSelect = (food: MenuItem) => {
        setSelectedFood(food);
        console.log(food)
      };
  return (
    <>
      <h4 className="foodTitle">Choose from our Menu</h4>
      <ul className="ulFoods">
        {props.foodItems.map((item) => {
          return (
            <li key={item.id} className="liFoods" onClick={() => handleFoodSelect(item)}>
              <img
                className="foodImg"
                src={`/images/${item.image}`}
                alt={item.name}
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
