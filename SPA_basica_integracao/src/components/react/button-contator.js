// button-contator.js
export const ButtonContator = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  return React.createElement(
    "button",
    { onClick: increment },
    "Contador: ",
    count
  );
};
