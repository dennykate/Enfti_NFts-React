export const Button = ({ children }) => (
  <button
    className="btn md:px-6 md:py-3 px-4 py-2 rounded-md font-raleway font-bold text-white
transition-all duration-300 ease-in-out md:text-sm text-xs"
  >
    {children}
  </button>
);

export const Title = ({ children, color }) => (
  <h1 className={`text-3xl font-poppins font-medium ${color} z-10`}>
    {children}
  </h1>
);
