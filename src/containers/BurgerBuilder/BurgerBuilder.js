import React, { useState } from 'react';

import Burger from '../../components/Burger/Burger';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({ salad: 1, bacon: 1, cheese: 1 });

  return (
    <>
      <Burger ingredients={ingredients} />
      <div>Build Controls</div>
    </>
  );
};

export default BurgerBuilder;
