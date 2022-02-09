import classes from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* <div className={classes.item}>
        <Image
          src="/images/background-image.png"
          alt="background photo"
          // width="300px"
          // height="300px"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      <div className={classes.item}>
        <div className={classes.card}>
          <h2 className={classes.motto}>
            PIZZARACK PIZZAS - MADE JUST FOR YOU
          </h2>
        </div>
        <div className={classes.card}>
          <h1 className={classes.title}>FIND OUR RESTAURANTS</h1>
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

          <p className={classes.text}>
            1774 CHARLES STREET.
            <br /> IMO, 110088
            <br /> (234) 20882917
          </p>

          <p className={classes.text}>
            1774 GRACE AVENUE.
            <br /> KADUNA, 110889
            <br /> (234) 30799917
          </p>
        </div>
        <div className={classes.card}>
          <h1 className={classes.title}>WORKING HOURS</h1>
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
