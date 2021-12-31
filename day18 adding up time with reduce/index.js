const timenodes = Array.from(document.querySelectorAll("[data-time]"));
const seconds = timenodes
  .map((node) => node.dataset.time)
  .map((timecode) => {
    const [min, secs] = timecode.split(":").map(parseFloat);
    return min * 60 + secs;
  })
  .reduce((total, vidsec) => total + vidsec);

let secondsleft = seconds;
const hours = Math.floor(secondsleft / 3600);
secondsleft = secondsleft % 3600;
const minute = Math.floor(secondsleft / 60);
const second = secondsleft % 60;

console.log(hours, minute, second);
