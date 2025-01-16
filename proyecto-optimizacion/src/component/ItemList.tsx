import React, { FC, memo } from "react";

interface ItemListProps {
  items: string[];
}

// const ItemList: FC<ItemListProps> = ({ items }) => {
//   return (
//     <div>
//       {
//       items.map((item, index) => (
//         <div key={index}>{item}</div>
//       ))}
//     </div>
//   );
// };

const ItemList: FC<ItemListProps> = memo(({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  });
export default ItemList;
