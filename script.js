const car = {
  carImg:
    "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg",
  name: "car",
 details: [
    {
      price: 200_000,
    },
    {
      hand: 2,
    },
    {
      km: "100_403",
    },
    {
      year: "2014",
    },
  ],
};

console.log(car.details);

const carCardViewer = window.document.getElementById("car-information");
carCardViewer.innerHTML =
  `
<div class="card" style="width: 18rem">
  <img src= " ` +
  car.carImg +
  `"
  class="card-img-top"
   alt="` + car.name + `/>
  <div class="card-body">
    <h5 class="card-title">car</h5>
    <p class="card-text">
        This car is about to sale
    </p>
  </div>
  <ul class="list-group list-group-flush">
    ` + car.details['0'].price + `
    <br>
    ` + car.details['1'].hand + `
    <br>
    `+ car.details['2'].km + `
    <br>
    `+ car.details['3'].year + `
  </ul>
  </div>
</div>
`;
