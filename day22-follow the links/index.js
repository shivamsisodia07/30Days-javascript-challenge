const triggers = document.querySelectorAll("a");
const sp = document.createElement("span");
sp.classList.add("highlight");
document.body.append(sp);

function highlight() {
  const linkcoord = this.getBoundingClientRect();
  console.log(linkcoord);

  const coord = {
    width: linkcoord.width,
    height: linkcoord.height,
    left: linkcoord.left + window.scrollX,
    top: linkcoord.top + window.scrollY,
  };
  sp.style.width = `${coord.width}px`;
  sp.style.height = `${coord.height}px`;
  sp.style.transform = `translate(${coord.left}px, ${coord.top}px)`;
}
triggers.forEach((a) => a.addEventListener("mouseenter", highlight));
