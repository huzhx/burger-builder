import React, { useState } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({ salad: 1, bacon: 1, cheese: 1 });

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </>
  );
};

export default BurgerBuilder;
