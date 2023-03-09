import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { fetchAddFriend } from "../Action";

function AddFriend() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { id: "", name: "", email: "" },
  });

  function onSubmit(log) {
    console.log(log);
    let ID = Date.now();
    const Friend = {
      id: ID,
      name: log.name,
      email: log.email,
    };
    console.log(Friend);
    dispatch(fetchAddFriend(Friend));
    history.push("/FRIENDLIST");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Login_form">
        {" "}
        <div>
          {" "}
          <h2 className="Login_baslik">ADD FRIEND</h2>
        </div>
        <div className="Login_input">
          <label htmlFor="Username">FRIEND NAME</label>
          <input
            id="Username"
            type="text"
            name="friendName"
            {...register("name", {
              required: "İsim yazmalısınız",
              minLength: {
                value: 3,
                message: "İsim en az 3 karakter olmalı",
              },
            })}
          />
        </div>
        <div className="Login_input">
          <label htmlFor="Password">FRIEND MAIL</label>
          <input
            id="Password"
            type="text"
            {...register("email", {
              validate: {
                passwordRequired: (p) =>
                  p.length <= 10 || "En fazla 10 karakter girmelisiniz",
                minFive: (p) =>
                  p.length >= 5 || "En az 5 karakter girmeniz gerekir",
              },
            })}
          />
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

export default AddFriend;
