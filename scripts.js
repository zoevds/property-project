let properties = [
  {
    name: "Apartment",
    address: "8100 S Ashland Ave, Chicago, IL 60620, USA",
    price: "R50000pm",
    imgURL: "https://i.postimg.cc/Hkq8pBVd/pexels-expect-best-323775.jpg",
    rooms: "5",
    bathrooms: "2",
    garage: "2",
  },
  {
    name: "House",
    address: "2195 SW 8th St, Miami, FL 33135, USA",
    price: "R750000pm",
    imgURL: "https://i.postimg.cc/Kj7PttTd/pexels2.jpg",
    rooms: "7",
    bathrooms: "3",
    garage: "3",
  },
  {
    name: "Apartment",
    address: "23 strawberry close, cape town, constancia",
    price: "R25000pm",
    imgURL: "https://i.postimg.cc/dVYpCK7f/pexels-miguel-padri-n-434139.jpg",
    rooms: "3",
    bathrooms: "2",
    garage: "1",
  },
  {
    name: "house",
    address: "58 cranberry road, cape town, sea point",
    price: "R670000pm",
    imgURL: "https://i.postimg.cc/DyX3sgxS/pexels-pixabay-259588.jpg",
    rooms: "6",
    bathrooms: "3",
    garage: "3",
  },
];
function showItems(properties) {
  document.querySelector("#properties").innerHTML = "";
  properties.forEach((property, i) => {
    document.querySelector("#properties").innerHTML += `
    
    <div class="row">
    <div class="column">
    <div class="card">
    <img src=${property.imgURL} />
            <h1 id="head-1">Bedroom with a work space</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
    `;
  });
}
showItems(properties);
// <h2>${property.name} </h2>
/* <p>${property.address}</p>
<p>${property.rooms}</p>
<p>${property.bathrooms}</p>
<p>${property.garage}</p>
<p>R${property.price}</p> */

console.log(properties);
