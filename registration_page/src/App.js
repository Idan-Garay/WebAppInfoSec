import InputField from "./components/InputField";
import PasswordField from "./components/PasswordField";

const App = () => {
  return (
    <div className="flex h-screen content-center border">
      <form className="border w-1/2 m-auto p-3 rounded">
        <InputField label="Username" />
        <PasswordField label="Password" />
        <InputField label="Email" />
        <div className="flex justify-end px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
