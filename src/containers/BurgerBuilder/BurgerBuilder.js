import React, { useState, useEffect } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({ salad: 1, bacon: 1, cheese: 1 });

  const handleAddIngredients = (type) => {
    setIngredients((prev) => {
      const newIngredients = { ...prev };
      if (type in newIngredients) {
        newIngredients[type]++;
      } else {
        newIngredients[type] = 1;
      }
      return newIngredients;
    });
  };

  useEffect(() => {
    console.log({ ingredients });
  }, [ingredients]);

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls onAddIngredients={handleAddIngredients} />
    </>
  );
};

export default BurgerBuilder;
