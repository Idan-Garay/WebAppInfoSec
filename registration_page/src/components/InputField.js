const InputField = ({ label, dispatch, data, eventType, type }) => {
  return (
    <div className="w-full md:w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type={type}
        placeholder={label}
        value={data}
        onChange={(e) => dispatch({ type: eventType, value: e.target.value })}
      />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
  );
};

export default InputField;
