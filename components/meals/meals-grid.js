import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map((m) => <li key={m.id}>
            <MealItem {...m}></MealItem>
            </li>)}
        </ul>
    )
}