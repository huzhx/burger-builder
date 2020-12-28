import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

const BurgerIngredient = ({ type }) => {
  let ingredient = null;
  switch (type) {
    case 'bread-bottom':
      ingredient = <div className={styles.burger_ingredient__bread_bottom}></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={styles.burger_ingredient__bread_top}>
          <div className={styles.burger_ingredient__seeds1}></div>
          <div className={styles.burger_ingredient__seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={styles.burger_ingredient__meat}></div>;
      break;
    case 'cheese':
      ingredient = <div className={styles.burger_ingredient__cheese}></div>;
      break;
    case 'bacon':
      ingredient = <div className={styles.burger_ingredient__bacon}></div>;
      break;
    case 'salad':
      ingredient = <div className={styles.burger_ingredient__salad}></div>;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
