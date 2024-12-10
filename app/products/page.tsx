"use client";

import { useState } from "react";

const Products = () => {
  const [data, setData] = useState<string>("");
  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    // Получаем целевой элемент из события
    const target = event.target as HTMLLIElement;

    // Проверяем, что целью клика является элемент <li>
    if (event.target && target.tagName.toLowerCase() === "li") {
      const itemId = target.getAttribute("data-event");
      if (itemId) setData(itemId);
    }
  };

  console.log("Step 1: In global scope");

  setTimeout(() => console.log("Step 2: In setTimeout"));

  new Promise((resolve) => {
    resolve(console.log("Step 3: In promise constructor"));
  }).then(() => console.log("Step 4: In then"));

  setTimeout(() => console.log("Step 5: In another setTimeout"));

  // page.tsx:18 Step 1: In global scope
  // page.tsx:23 Step 3: In promise constructor
  // page.tsx:20 Step 2: In setTimeout
  // page.tsx:26 Step 5: In another setTimeout
  // page.tsx:20 Step 2: In setTimeout
  // page.tsx:26 Step 5: In another setTimeout

  return (
    <div>
      <span>Status: {data}</span>
      <ul onClick={(e) => handleClick(e)}>
        <li data-event="save">Item 1</li>
        <li data-event="load">Item 2</li>
        <li data-event="preload">Item 3</li>
        {/* Вы можете добавлять больше элементов */}
      </ul>
    </div>
  );
};

export default Products;
