import { useMemo, useState } from "react";

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "chips", value: 20 },
    { name: "cookies", value: 30 },
    { name: "fruit", value: 30 },
    { name: "icecream", value: 40 },
  ]);
// we create this using 3 methods , first is normal function , 2nd one is using reduce and the third one is useMemo() hook
  let TotalValue = 0;
  for (let i = 0; i < items.length; i++) {
    // TotalValue += items[i].value;
    TotalValue = items.reduce((sum,number) => sum+items[i].value,0)
  }
// let useMemox = useMemo( () =>{
//     let TotalValue = 0;
//         for (let i = 0; i < items.length; i++) {
//         TotalValue += items[i].value;
//         } 
//     return TotalValue;
//     }
//     ,[items])
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} = price ${item.value}
          </li>
        ))}
      </ul>
      <p>Total value is {TotalValue}</p>
    </div>
  );
};
