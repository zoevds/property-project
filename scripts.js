let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        ID: "1",
        title: "Two story apartment",
        type: "Loft Apartment",
        address: "Chicago",
        price: "R50000 pm",
        imgURL: "https://i.postimg.cc/Hkq8pBVd/pexels-expect-best-323775.jpg",
        rooms: "5",
        bathrooms: "2",
        garage: "2",
        squarefoot: "6738 sq ft",
      },
      {
        ID: "2",
        title: "Modern 7 bedroom house",
        type: "House",
        address: "Miami",
        price: "R750000 pm",
        imgURL:
          "https://i.postimg.cc/3xhLfCFf/pexels-binyamin-mellish-186077.jpg",
        rooms: "7",
        bathrooms: "3",
        garage: "3",
        squarefoot: "11743 sq ft",
      },
      {
        ID: "3",
        title: "vintage apartment",
        type: "Loft Apartment",
        address: "Cape Town",
        price: "R25000 pm",
        imgURL:
          "https://i.postimg.cc/dVYpCK7f/pexels-miguel-padri-n-434139.jpg",
        rooms: "3",
        bathrooms: "2",
        garage: "1",
        squarefoot: "5637 sq ft",
      },
      {
        ID: "4",
        title: "vintage house with garden",
        type: "house",
        address: "Cape Town",
        price: "R25000 pm",
        imgURL: "https://i.postimg.cc/DyX3sgxS/pexels-pixabay-259588.jpg",
        rooms: "6",
        bathrooms: "3",
        garage: "3",
        squarefoot: "10345 sq ft",
      },
      {
        ID: "5",
        title: "Living room",
        type: "Loft Apartment",
        address: "Brooklyn",
        price: "R52000 pm",
        imgURL: "https://i.postimg.cc/JhtSKzPT/pexels6.jpg",
        rooms: "2",
        bathrooms: "1",
        garage: "1",
        squarefoot: "1230 sq ft",
      },
      {
        ID: "6",
        title: "20th century design home",
        type: "House",
        address: "Jersey City",
        price: "R63000 pm",
        imgURL:
          "https://i.postimg.cc/L6b7yZ0r/pexels-binyamin-mellish-1396122.jpg",
        rooms: "6",
        bathrooms: "3",
        garage: "2",
        squarefoot: "9244 sq ft",
      },
      {
        ID: "7",
        title: "Modern Loft Apartment",
        type: "Loft Apartment",
        address: "Miami",
        price: "R870000 pm",
        imgURL: "https://i.postimg.cc/Kj7PttTd/pexels2.jpg",
        rooms: "4",
        bathrooms: "2",
        garage: "2",
        squarefoot: "2650 sq ft",
      },
      {
        ID: "8",
        title: "Wooden home with 5 rooms",
        type: "House",
        address: "Brooklyn",
        price: "R670000 pm",
        imgURL: "https://i.postimg.cc/gj0kmZpv/pexels-pixabay-209296.jpg",
        rooms: "5",
        bathrooms: "4",
        garage: "1",
        squarefoot: "6790 sq ft",
      },
      {
        ID: "9",
        title: "two story Apartment",
        type: "Loft Apartment",
        address: "Brooklyn",
        price: "R70000 pm",
        imgURL:
          "https://i.postimg.cc/SNqf7Qrc/pexels-martijn-adegeest-633563.jpg",
        rooms: "2",
        bathrooms: "1",
        garage: "1",
        squarefoot: "2690 sq ft",
      },
      {
        ID: "10",
        title: "Modern home for family",
        type: "House",
        address: "Miami",
        price: "R670000 pm",
        imgURL: "https://i.postimg.cc/02cmxk0d/pexels3.jpg",
        rooms: "5",
        bathrooms: "3",
        garage: "2",
        squarefoot: "7490 sq ft",
      },
      {
        ID: "11",
        title: "Loft styled home",
        type: "House",
        address: "Chicago",
        price: "R820000 pm",
        imgURL: "https://i.postimg.cc/Y9VG2THq/pexels-expect-best-323780.jpg",
        rooms: "8",
        bathrooms: "5",
        garage: "4",
        squarefoot: "12790 sq ft",
      },
      {
        ID: "12",
        title: "Apartment",
        type: "Loft Apartment",
        address: " Brooklyn",
        price: "R870000 pm",
        imgURL: "https://i.postimg.cc/150cm0Wh/pexels-mike-b-144632.jpg",
        rooms: "5",
        bathrooms: "4",
        garage: "1",
        squarefoot: "6790 sq ft",
      },
    ];
console.log(properties);
function showItems(properties) {
  document.querySelector("#properties").innerHTML = "";
  properties.forEach((property, i) => {
    document.querySelector("#properties").innerHTML += `
    
    
    <div class="column ">
   <div id="cards" class="card mb-3">
    <img src=${property.imgURL} id="img" />
     <p id="title">${property.title}</p>
    <p><i class="fa-solid fa-location-dot me-1"></i>${property.address}</p>
    <p>${property.price}</p>

   
    <div class="container-fluid">
  <div class="row align-items-start">
    <div class="col-3">
     <p id="rooms"><i class="fa-solid fa-bed me-1"></i>${property.rooms}</p>
    </div>
    <div class="col-3">
      <p id="bathrooms"><i class="fa-solid fa-bath me-1"></i>${property.bathrooms}</p>
    </div>
    <div class="col-3">
       <p id="garage"><i class="fa-solid fa-warehouse me-1"></i>${property.garage}</p>
    </div>
    <div class="col-3">
       <p id="garage"><i class="fa-solid fa-ruler-combined me-1"></i>${property.squarefoot}</p>
    </div>
  </div>
    </div>
    `;
  });
}

showItems(properties);
localStorage.setItem("properties", JSON.stringify(properties));
console.log(properties);

// Filter

// function displayAll() {
//   showItems(properties);
// }
// filter location
function filterLocation(e) {
  const location = e.target.value;
  if (location == "all") {
    return showItems(properties);
  }
  const filtered = properties.filter(
    (property) => property.address == location
  );

  return showItems(filtered);
}
// filter category
function categoryFilter(e) {
  const category = e.target.value;
  if (category == "all") {
    return showItems(properties);
  }
  const filtered = properties.filter((property) => property.type == category);
  return showItems(filtered);
}
// filter price
function priceFilter(e) {
  const price = e.target.value;
  if (price == "all") {
    return showItems(properties);
  }
  const filtered = properties.filter((property) => property.price == price);
  return showItems(filtered);
}
// filter
function sizeFilter(e) {
  const size = e.target.value;
  if (size == "all") {
    return showItems(properties);
  }
  const filtered = properties.filter((property) => property.squarefoot == size);
  return showItems(filtered);
}
