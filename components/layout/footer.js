import classes from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.item}>
        <Image
          src="/images/background-image.png"
          alt="background photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classes.item}>
        <div className={classes.card}>
          <h2 className={classes.motto}>
            PIZZA RACK PIZZAS - MADE JUST FOR YOU
          </h2>
        </div>
        <div className={classes.card}>
          <h2 className={classes.title}>FIND OUR RESTAURANTS</h2>
          <p className={classes.text}>
            1774 LAGOS AVENUE.
            <br /> LAGOS, 110001
            <br /> (234) 91189827
          </p>

          <p className={classes.text}>
            1774 CONVENT AVENUE.
            <br /> ABUJA, 110012
            <br /> (234) 20772917
          </p>
          <p className={classes.textLink}>
            <Link href={"/stores"}>View all our stores...</Link>
          </p>
        </div>
        <div className={classes.card}>
          <h2 className={classes.title}>WORKING HOURS</h2>
          <p className={classes.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={classes.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
