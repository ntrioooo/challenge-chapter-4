class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    // Dengan supir atau bukan
    this.available = available; 
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    
    return `
        <div class="card mb-3">
          <img src="${this.image}" class="card-img-top" height="350" width="300" alt="${this.manufacture}">
          <div class="card-body">
            <p class="card-text text-js mb-2">${this.type} ${this.model}</p>
            <h5 class="card-title text-js mb-2">Rp${this.rentPerDay.toLocaleString().replaceAll(',', '.')} / Hari</h5>
            <p class="card-text text-js mb-2">${this.description}</p>
            <p class="card-text"><i class="fa-solid fa-user-group i-js"></i> ${this.capacity}</p>
            <p class="card-text"><i class="fa-solid fa-gear i-js"></i> ${this.transmission}</p>
            <p class="card-text"><i class="fa-regular fa-calendar i-js"></i> ${this.year}</p>
            <a href="#" class="btn text-white btn-js mt-2" style="background: #5CB85F;">Pilih Mobil</a>
          </div>
        </div>
    `;
  }
}