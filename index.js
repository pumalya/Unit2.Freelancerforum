const AVERAGE_TEXT = document.querySelector("#average");
const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];
const names = ["Alex", "Maria", "Cody", "Donna", "Mark"];
const prices = [25, 30, 40, 60, 85];
const occupations = ["teacher", "gardener", "writer", "programmer", "journalist" ];

const addFreelancerIntervalId = setInterval(addFreelancers, 5000);
render();

function calcAverage(freelancers) {
  const sum = freelancers.reduce((acc, curr) => acc + curr.price, 0);
  const average = sum / freelancers.length;
  return average;
}

function render() {
    // Render the other freelancers
    const freelancer = document.querySelector("#freelancers");
    freelancer.innerHTML = "";
    const freelancerElement = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.textContent = freelancer.name + " " + freelancer.price + " " + freelancer.occupation;
      return element;
    });
    freelancer.append(...freelancerElement);
    AVERAGE_TEXT.textContent = calcAverage(freelancers);

  }

function addFreelancers() {
  const name = names[Math.floor(Math.random() * names.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  
  freelancers.push({ name, price, occupation,});
  render();
};
 