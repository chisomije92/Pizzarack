import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import classes from "./login-data.module.css";

const LoginData = () => {
  const [enteredUsername, setEnteredUsername] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState(null);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: enteredUsername,
        password: enteredPassword,
      });
      if (result.error) {
        throw new Error(`${result.error}`);
      }
      console.log(result);
      router.push("/admin");
    } catch (err) {
      setError(true);
      setErrorMsg(`${err.message}`);
    }
  };

  return (
    <section className={classes.container}>
      <div>
        <h1>Admin Dashboard</h1>
        <form
          className={classes.wrapper}
          onSubmit={(evt) => evt.preventDefault()}
        >
          <input
            placeholder="username"
            className={classes.input}
            onChange={(e) => setEnteredUsername(e.target.value)}
            autoComplete="true"
          />
          <input
            placeholder="password"
            type="password"
            className={classes.input}
            onChange={(e) => setEnteredPassword(e.target.value)}
            autoComplete="true"
          />
          <button className={classes.button} onClick={handleClick}>
            Sign In
          </button>
          {error && <span className={classes.error}>{errorMsg}</span>}
        </form>
      </div>
    </section>
  );
};

export default LoginData;
