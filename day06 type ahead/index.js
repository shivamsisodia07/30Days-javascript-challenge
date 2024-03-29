const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findmatches(wordMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function dispalyMatches() {
  const matchArray = findmatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityname = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const statename = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class='name'>
          ${cityname},${statename}
        </span>
        <span class='population'> ${place.population}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchinput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchinput.addEventListener("change", dispalyMatches);
searchinput.addEventListener("keyup", dispalyMatches);
