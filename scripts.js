let properties = [
  {
    ID: "1",
    title: "Two story apartment",
    type: " Loft Apartment",
    address: "8100 S Ashland Ave, Chicago, IL 60620, USA",
    price: "R50000 pm",
    imgURL: "https://i.postimg.cc/Hkq8pBVd/pexels-expect-best-323775.jpg",
    rooms: "5",
    bathrooms: "2",
    garage: "2",
    squarefoot: "6738 sq ft",
  },
  {
    ID: "2",
    title: " Modern 7 bedroom house",
    type: "House",
    address: "2195 SW 8th St, Miami, FL 33135, USA",
    price: "R750000 pm",
    imgURL: "https://i.postimg.cc/3xhLfCFf/pexels-binyamin-mellish-186077.jpg",
    rooms: "7",
    bathrooms: "3",
    garage: "3",
    squarefoot: "11743 sq ft",
  },
  {
    ID: "3",
    title: "vintage apartment",
    type: " Loft Apartment",
    address: "23 strawberry close, cape town, constancia",
    price: "R25000 pm",
    imgURL: "https://i.postimg.cc/dVYpCK7f/pexels-miguel-padri-n-434139.jpg",
    rooms: "3",
    bathrooms: "2",
    garage: "1",
    squarefoot: "5637 sq ft",
  },
  {
    ID: "4",
    title: "vintage house with garden ",
    type: "house",
    address: "58 cranberry road, cape town, sea point",
    price: "R670000 pm",
    imgURL: "https://i.postimg.cc/DyX3sgxS/pexels-pixabay-259588.jpg",
    rooms: "6",
    bathrooms: "3",
    garage: "3",
    squarefoot: "10345 sq ft",
  },
  {
    ID: "5",
    title: "Living room area",
    type: " Loft Apartment",
    address: "Fulton St, Brooklyn, NY, USA",
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
    type: "house",
    address: "Metro Plaza Dr, Jersey City, NJ 07302, USA",
    price: "R63000 pm",
    imgURL: "https://i.postimg.cc/L6b7yZ0r/pexels-binyamin-mellish-1396122.jpg",
    rooms: "6",
    bathrooms: "3",
    garage: "2",
    squarefoot: "9244 sq ft",
  },
  {
    ID: "7",
    title: "Modern Loft Apartment",
    type: "Loft Apartment",
    address: "NE 50th Terrace, Miami, FL 33137, USA",
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
    type: "house",
    address: "Marcy Ave, Brooklyn, NY, USA",
    price: "R670000 pm",
    imgURL: "https://i.postimg.cc/gj0kmZpv/pexels-pixabay-209296.jpg",
    rooms: "5",
    bathrooms: "4",
    garage: "1",
    squarefoot: "6790 sq ft",
  },
];
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

   
    <div class="container">
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

// sorting
// listing.sort((a, b) => {
//   return b.properties - a.properties;
// });

// listing.sort((a, b) => (a.atmosphere > b.atmosphere ? 1 : -1));

showItems(properties);

console.log(properties);
