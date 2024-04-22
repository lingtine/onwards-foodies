import styles from "@/app/components/meals/meals-grid.module.css";
import MealItem from "../components/meals/meal-items";
import curryImg from "@/public/images/curry.jpg";

export default function Meals() {
  return (
    <div className={styles.meals}>
      <MealItem
        creator={"Hùng anh"}
        image={curryImg.src}
        slug={2}
        summary={"helo"}
        title={"Curry"}
      />
      <MealItem
        creator={"Hùng anh"}
        image={curryImg.src}
        slug={2}
        summary={"helo"}
        title={"Curry"}
      />
      <MealItem
        creator={"Hùng anh"}
        image={curryImg.src}
        slug={2}
        summary={"helo"}
        title={"Curry"}
      />
    </div>
  );
}
