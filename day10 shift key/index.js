const checkbox = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastchecked;

function handleCheck(e) {
  let inbetween = true;
  if (e.shiftKey && this.checked) {
    checkbox.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastchecked) {
        inbetween = !inbetween;
        console.log("hi");
      }

      if (inbetween) {
        checkbox.checked = true;
      }
    });
  }
}
checkbox.forEach((checkbox) => checkbox.addEventListener("click", handleCheck));
