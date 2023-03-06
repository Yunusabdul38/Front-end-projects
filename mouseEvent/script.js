const body = document.body;

document.addEventListener("mousemove", (e) => {
  const el = document.createElement("div");
  el.classList.add("box");
  el.style.top = `${e.clientY}px`;
  el.style.left = `${e.clientX}px`;
  body.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 1500);
 
});
