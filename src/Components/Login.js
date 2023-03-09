import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { fetchFriends, fetchLogin } from "../Action";

function Login() {
  const userData = useSelector((state) => state.loginForm);
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { username: "", password: "" },
  });

  function onSubmit(log) {
    dispatch(fetchLogin(userData));
    setTimeout(() => {
      dispatch(fetchFriends());
      history.push("/FRIENDLIST");
      reset();
    }, 50);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Login_form">
        {" "}
        <div>
          {" "}
          <h2 className="Login_baslik">LOGIN</h2>
        </div>
        <div className="Login_input">
          <label htmlFor="username">USERNAME</label>
          <input
            id="username"
            name="username"
            type="text"
            {...register("username", {
              required: "İsim yazmalısınız",
              minLength: {
                value: 3,
                message: "İsim en az 5 karakter olmalı",
              },
            })}
          />
          {errors.friendName && <p>{errors.friendName.message}</p>}
        </div>
        <div className="Login_input">
          <label htmlFor="Password">PASSWORD</label>
          <input
            id="Password"
            type="password"
            {...register("password", {
              validate: {
                passwordRequired: (p) =>
                  p.length <= 10 || "En fazla 10 karakter girmelisiniz",
                minFive: (p) =>
                  p.length >= 5 || "En az 5 karakter girmeniz gerekir",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="Login_input">
          {" "}
          <button type="submit" disabled={!isValid}>
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
