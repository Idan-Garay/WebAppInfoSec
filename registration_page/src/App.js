import InputField from "./components/InputField";
import { useReducer, useEffect } from "react";
import axios from "axios";

const App = () => {
  // flag is for validation purposes
  let flag = 1;
  const reducer = (state, action) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.value };
      case "password":
        return { ...state, password: action.value };
      case "email":
        return { ...state, email: action.value };
      default:
        return state;
    }
  };

  const validate = (data) => {
    if (!(typeof data.username == "string" && data.username.length > 2)) {
      flag = -1;
      dispatch({
        type: "username",
        value: "Username has a minimum of 3 characters",
      });
    }
    if (!(typeof data.password == "string" && data.password.length > 6)) {
      flag = -1;
      dispatch({
        type: "password",
        value: "Password has a minimum of 7 characters",
      });
    }
    if (!(typeof data.email == "string" && data.email.length > 7)) {
      flag = -1;
      dispatch({ type: "email", value: "Email has a minimum of 8 characters" });
    }
  };

  const [formData, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    validate(formData);
    if (flag !== -1) {
      console.log("Registered!");
    } else {
      console.log(formData);
    }
  };

  useEffect(() => {
    const getCSRFToken = async () => {
      const response = await axios.get("https://localhost:8000/");
      axios.defaults.headers.post["X-CSRF-Token"] = response.data.CSRFToken;
    };
    getCSRFToken();
  }, []);

  return (
    <div className="flex h-screen content-center border">
      <form className="border w-1/2 m-auto p-3 rounded" onSubmit={onSubmit}>
        {/* No hidden input/field for authentication purposes */}
        <InputField
          label="Username"
          type="text"
          data={formData.username}
          eventType="username"
          dispatch={dispatch}
        />
        <InputField
          label="Password"
          type="password"
          data={formData.password}
          eventType="password"
          dispatch={dispatch}
        />
        <InputField
          label="Email"
          type="email"
          data={formData.email}
          eventType="email"
          dispatch={dispatch}
        />
        <div className="flex justify-end px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
