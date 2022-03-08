import Image from "next/image";
import classes from "./menu-data.module.css";
import { useRouter } from "next/router";

const MenuData = ({ pizzaList }) => {
  const router = useRouter();

  return (
    <section className={classes.container}>
      <div className={classes.block}>Pizza Rack`s Pizza Menu</div>
      <div className={classes.content}>
        Below is our pizza menu. You are more than welcome to make your choice
        and experience true ecstasy and satisfaction!
      </div>
      <ul className={classes.ul}>
        {pizzaList.map((pizza) => (
          <li
            className={classes.li}
            key={pizza._id}
            onClick={() => router.push(`/product/${pizza._id}`)}
          >
            <div>
              <Image
                src={pizza.img}
                alt="pizza pic"
                width="99px"
                height="94px"
              />
            </div>
            <div>{pizza.title}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuData;
