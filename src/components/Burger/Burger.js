import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  const ingredientsArr = Object.keys(ingredients).map((key) => {
    return [...Array(ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key} />);
  });
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArr}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
