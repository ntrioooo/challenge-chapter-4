class App {
  constructor() {
    this.clearButton = document.getElementById("clear-car");
    this.loadButton = document.getElementById("find-car");
    this.carContainerElement = document.getElementById("cars-container");
    this.driverAvail = document.querySelector('#tipe-driver');
    this.availAt = document.querySelector('#date');
    this.time = document.querySelector('#time');
    this.capacity = document.querySelector('#penumpang');
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
    
    Car.list.forEach((car) => {
      let dateTime = `${this.availAt.value}T${this.time.value}`;
      // console.log(dateTime);
      let formDate = Date.parse(dateTime);
      // console.log(formDate);
      let waktu = Date.parse(car.availableAt);
      // console.log(waktu);
      let capacity = this.capacity.value;
      // console.log(capacity);
      
      const driver = this.driverAvail.value == 'Dengan Sopir' ? true : false;
      console.log(driver);

      if (car['available'] == driver && waktu >= formDate && car['capacity'] >= capacity) {
        console.log('berhasil');
        const node = document.createElement("div");
        node.className = 'col-md-3';
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    })
  };
  
  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
