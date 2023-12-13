/* State */
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

const addNameIntervalId = setInterval(addName, 1000); // Change to addName
render();

function render() {
  const namesList = document.querySelector("#names"); // Change to namesList
  const nameElements = freeLancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = `${freelancer.name} - ${freelancer.occupation} - ${freelancer.startingPrice}`;
    return element;
  });
  namesList.replaceChildren(...nameElements);
}

function addName() {
  const names = ["Alice", "Bob", "Carol", "Dave"];
  const occupations = ["Writer", "Teacher", "Programmer", "Designer"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = Math.floor(Math.random() * 100) + 20;

  const newFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    startingPrice: randomStartingPrice,
  };
  freeLancers.push(newFreelancer);

  // Update the table
  render();
}

function calculate(freeLancers) {
  if (freeLancers.length === 0) {
    return { total: 0, average: 0 };
  }

  const total = freeLancers.reduce(
    (sum, freelancer) => sum + freelancer.startingPrice,
    0
  );
  const average = total / freeLancers.length;

  return { total, average };
}

// Example usage
const { total, average } = calculate(freeLancers);
console.log("Total starting price:", total);
console.log("Average starting price:", average);
