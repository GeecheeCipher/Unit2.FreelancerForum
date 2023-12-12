const freeLancers = [
  {
    name: "Alice",
    occupation: "Writer",
    startingPrice: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startingPrice: 50,
  },
  {
    name: "Carol",
    occupation: "Programmer",
    startingPrice: 70,
  },
];
for (let i = 0; i < freeLancers.length; i++) {
  console.log(freeLancers[i]);
}

const table = document.createElement("table");
const root = document.getElementById("root");
root.appendChild(table);

function addFreeLancer() {
  const name = name[Math.floor(Math.random() * name.length)];
  const occupation = occupation[Math.floor(Math.random() * occupation.length)];
  const startingPrice =
    startingPrice[Math.floor(Math.random() * startingPrice.length)];
}
function calculate(freeLancers) {
    if (freeLancers.length === 0) {
        return 0;
}

const total = freeLancers.reduce((sum, freeLancer) => {
    return sum + freeLancer.startingPrice;
}, 0);

return average = total / freeLancers.length;
}

const total = calculate(freeLancers);

console.log('total starting price', total);