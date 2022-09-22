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
          <img src="${this.image}" class="card-img-top" height="400" alt="${this.manufacture}">
          <div class="card-body">
            <p class="card-text">${this.model}</p>
            <h5 class="card-title">Rp.${this.rentPerDay} / Hari</h5>
            <p class="card-text">${this.description}</p>
            <p class="card-text">${this.capacity}</p>
            <p class="card-text">${this.transmission}</p>
            <p class="card-text">${this.year}</p>
            <a href="#" class="btn btn-primary">Pilih Mobil</a>
          </div>
        </div>
    `;
  }
}