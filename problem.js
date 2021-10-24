//a. Get all the countries from Asia continent /region using Filter function

async function countries() {
  let country = await fetch("https://restcountries.com/v2/all");
  let data = await country.json();
  data = data
    .filter((value) => {
      return value.region === "Asia";
    })
    .map((country) => country.name);
  console.log(data);
}
countries();

//b. Get all the countries with a population of less than 2 lakhs using Filter function

async function population() {
  let population = await fetch("https://restcountries.com/v2/all");
  let data = await population.json();
  data = data
    .filter((pop) => pop.population < 2_00_000)
    .map((countries) => countries.name);
  console.log(data);
}
population();

//c. Print the following details name, capital, flag using forEach function

async function details() {
  let details = await fetch("https://restcountries.com/v2/all");
  let data = await details.json();
  data = data.forEach((country) => {
    console.log(country.name, country.capital, country.flag);
  });
}
details();

//d. Print the total population of countries using reduce function

async function totalPopulation() {
  let totalPop = await fetch("https://restcountries.com/v2/all");
  let data = await totalPop.json();
  data = data.reduce((total, pop) => {
    return total + pop.population;
  }, 0);
  console.log(data);
}

totalPopulation();

//e. Print the country which uses US Dollars as currency.

async function currency() {
  let dollars = await fetch("https://restcountries.com/v2/all");
  let data = await dollars.json();

  data = data
    .filter((country) => {
      return country.currencies;
    })
    .forEach((country) => {
      let [{ code }] = country.currencies;
      if (code === "USD") console.log(country.name);
    });
}
currency();
