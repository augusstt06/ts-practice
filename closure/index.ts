// function clickHandler(element: HTMLElement) {
//   let count = 0;
//   function handleClick() {
//     count++;
//     element.textContent = `Clicked ${count} times`;
//   }
//   element.addEventListener("click", handleClick);
// }

const Counter = () => {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log(`count is increase`);
    },
    decrement: () => {
      count--;
      console.log(`count is decrease`);
    },
    reset: () => {
      count = 0;
      console.log(`count is reset`);
    },
  };
};

const increase = Counter().increment();
