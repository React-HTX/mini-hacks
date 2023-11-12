// Create heading component
const Heading = ({ children }) => (
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
    {children}
  </h1>
);

export default Heading;
