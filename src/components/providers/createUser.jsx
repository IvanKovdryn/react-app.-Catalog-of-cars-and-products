import { useContext } from "react";
import deleteBtn from "../screens/Products/Products";
import { AuthContext } from "./AuthProvider";
import { ModalContext } from "./ModalContext";
import { useForm } from "react-hook-form";

export function CreateUser() {
  const { closeModal } = useContext(ModalContext);
  const { user, setUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const getName = () => {
    const inputValue = document.getElementById("inputName");
    setUser({ name: `${inputValue.value}` });
    reset();
    setTimeout(closeModal, 1500);
    if (user) {
      deleteBtn();
    }
  };

  return (
    <>
      <h1 className="text-2xl text-center mb-3 font-semibold">
        Enter your name to view more information
      </h1>
      <form
        className="w-full flex items-center flex-col"
        onSubmit={handleSubmit(getName)}
      >
        <div className="relative w-1/2">
          <input
            {...register("name", { required: "true" })}
            id="inputName"
            type="text"
            placeholder="Name"
            className="block p-2 outline-none w-full bg-gray-200 m-2"
          />
          {errors?.name?.message && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                position: "absolute",
                bottom: "-12px",
                paddingLeft: "10px",
              }}
            >
              name is required
            </p>
          )}
        </div>
        <button className="py-3 mt-5 w-2/3 px-20 bg-gray-400 rounded-lg text-center m-2">
          Log in
        </button>
        {user && (
          <h1 className="text-2xl p-2 bg-green-300  w-[350px] md:w-[600px] mb-[-25px] mt-3 text-center">
            Welcome, {user.name}!
          </h1>
        )}
      </form>
    </>
  );
}
