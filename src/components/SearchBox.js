import "./searchBox.css";
import { createElement } from "../utils/elements";

function SearchBox(props) {
  const input = createElement("input", {
    placeholder: props.placeholder,
  });
  const button = createElement("button", { innerText: "🔎" });
  const container = createElement(
    "div",
    {
      className: "searchBox",
    },
    [input, button]
  );

  input.addEventListener("input", updateValue);

  function updateValue() {
    if (input.value.length === 5) {
      props.onChange(input.value);
    }
  }

  let timeoutId = null;
  input.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      props.onChange(input.value);
    }, 500);
  });

  input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      props.onChange(input.value);
    }
  });

  return container;
}

export default SearchBox;
