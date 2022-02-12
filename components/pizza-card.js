import classes from "./pizza-card.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src="/images/pizza_select.png"
          alt=""
          width="12300"
          height="10000"
          layout="responsive"
        />
      </div>

      <h1 className={classes.title}>FIORI DI ZUCCA</h1>
      <span className={classes.price}>$19.90</span>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
