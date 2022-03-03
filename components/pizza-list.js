import PizzaCard from "./pizza-card";
import classes from "./pizza-list.module.css";

const PizzaList = ({ pizzaList }) => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={classes.desc}>
        Enjoy nothing but the best of pizzas that you definitely deserve.
        Experience the happiness obtained from the tasty deliciousness of
        PizzaRack`s Pizzas and the guarantee of delight.
      </p>
      <div className={classes.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </section>
  );
};

export default PizzaList;
