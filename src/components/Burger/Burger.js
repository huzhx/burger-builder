import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
  let ingredientsTransformed = Object.keys(ingredients)
    .map((key) => {
      return [...Array(ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key} />);
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log({ ingredientsTransformed });
  if (ingredientsTransformed.length === 0) {
    console.log('im here');
    ingredientsTransformed = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsTransformed}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
