import React from 'react';
import { Card, IngredientsList, Instructions } from '../../components/recepies';

// Дані про наш рецепт
const cookieRecipe = {
  title: "Класичне шоколадне печиво",
  ingredients: ["200г борошна", "150г цукру", "100г темного шоколаду", "2 яйця", "100г масла"],
  instructions: "Змішайте сухі інгредієнти. Додайте яйця та розтоплене масло, замісіть тісто. Сформуйте печиво, додавши шматочки шоколаду. Випікайте 15 хвилин при 180°C."
};

export const RecepiesPage = () => {
  return (
    <Card title={cookieRecipe.title}>
      <IngredientsList items={cookieRecipe.ingredients} />
      <Instructions steps={cookieRecipe.instructions} />
    </Card>
  );
}