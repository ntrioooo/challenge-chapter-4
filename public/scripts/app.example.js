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

    // Show All Cars
    if(this.driverAvail.value == 'Pilih Sopir') {
      // Disabled when showing all cars
      this.driverAvail.addEventListener('click', () => {
        this.driverAvail.addEventListener('change', () => {
          switch(this.driverAvail.value) {
            case 'Pilih Sopir':
              console.log('pilih sopir');
              this.availAt = document.querySelector('#date').disabled = true;
              this.time = document.querySelector('#time').disabled = true;
              this.capacity = document.querySelector('#penumpang').disabled = true;
              break;
            case 'Dengan Sopir' || 'Tanpa Sopir':
              console.log('tanpa');
            this.availAt = document.querySelector('#date').disabled = false;
              this.time = document.querySelector('#time').disabled = false;
              this.capacity = document.querySelector('#penumpang').disabled = false;
              break;
          }
        })
      })
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.className = 'col-md-3';
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      })
      // Not Show All Cars (Filtered)
    } else {
      this.driverAvail.addEventListener('click', () => {
        this.driverAvail.addEventListener('change', () => {
          switch(this.driverAvail.value) {
            case 'Pilih Sopir':
              console.log('pilih sopir');
              this.availAt = document.querySelector('#date').disabled = true;
              this.time = document.querySelector('#time').disabled = true;
              this.capacity = document.querySelector('#penumpang').disabled = true;
              break;
            case 'Dengan Sopir' || 'Tanpa Sopir':
              console.log('tanpa');
            this.availAt = document.querySelector('#date').disabled = false;
              this.time = document.querySelector('#time').disabled = false;
              this.capacity = document.querySelector('#penumpang').disabled = false;
              break;
          }
        })
      })
      Car.list.forEach((car) => {
        let dateTime = `${this.availAt.value}T${this.time.value}`;
        let formDate = Date.parse(dateTime);
        let waktu = Date.parse(car.availableAt);
        let capacity = this.capacity.value;
        
        // Get value by available driver
        const driver = this.driverAvail.value == 'Dengan Sopir' ? true : false;
        // console.log(driver);
  
        // Filter car
        if (car['available'] == driver && waktu >= formDate && car['capacity'] >= capacity) {
          // console.log('Filtered Success');
          const node = document.createElement("div");
          node.className = 'col-md-3';
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
        }
      })
    }
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
