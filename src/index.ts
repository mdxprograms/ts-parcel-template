const App = (attrs): HTMLElement => {
  const el = document.createElement("div");
  return Object.assign(el, { ...attrs });
};

const init = () => {
  document
    .getElementById("app")
    .appendChild(App({ className: "app", textContent: "App Element" }));
};

document.addEventListener("DOMContentLoaded", init);
