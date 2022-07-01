// function editItem(ID) {
//   let item = ID.find((item) => item.ID === ID);
//   item.title = "new";
// }

// editItem($[item.ID]);
let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
      {
        ID: "1",
        title: "Two story apartment",
        type: " Loft Apartment",
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
        title: " Modern 7 bedroom house",
        type: "House",
        address: " Miami",
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
        type: " Loft Apartment",
        address: " cape town",
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
        title: "vintage house with garden ",
        type: "house",
        address: " cape town",
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
        address: " Brooklyn",
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
        address: " Jersey City",
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
        address: " Miami",
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
        address: " Brooklyn",
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
        type: " Loft Apartment",
        address: " Brooklyn",
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
        type: "house",
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
        type: "house",
        address: " Chicago",
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
        price: "R670000 pm",
        imgURL: "https://i.postimg.cc/150cm0Wh/pexels-mike-b-144632.jpg",
        rooms: "5",
        bathrooms: "4",
        garage: "1",
        squarefoot: "6790 sq ft",
      },
    ];
console.log(properties);

localStorage.setItem("properties", JSON.stringify(properties));

// table function
const propertiesContainer = document.querySelector("#adminstable");
function showItems(properties) {
  document.querySelector("#adminstable").innerHTML = "";
  properties.forEach((property) => {
    document.querySelector("#adminstable").innerHTML += `
    <tr>
          <td> ${property.ID} </td>
          <td> ${property.title} </td>
          <td> ${property.type} </td>
          <td> ${property.address}</td>
          <td> ${property.price} </td>
          <td> ${property.imgURL}</td>
          <td> ${property.rooms} </td>
          <td> ${property.bathrooms} </td>
          <td> ${property.garage} </td>
          <td> ${property.squarefoot} </td>

          
          <td>
            <button class="btn" onclick="delItem(${property.ID})"><i class="fa-solid fa-delete-left" ></i></button>
            <button class="btn" onclick="updateProperty(${property.ID})"><i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn" onclick="updateItem(${property.ID})"><i class="fa-solid fa-floppy-disk"></i></button>
            </td>
           
       </tr>
    `;
  });
}
showItems(properties);

// addItems
function addItems() {
  let property = {
    title: document.querySelector("#title").value,
    type: document.querySelector("#type").value,
    address: document.querySelector("#area").value,
    price: document.querySelector("#price").value,
    imgURL: document.querySelector("#imageURL").value,
    rooms: document.querySelector("#amount-rooms").value,
    bathrooms: document.querySelector("#bathrooms").value,
    garage: document.querySelector("#garage").value,
    squarefoot: document.querySelector("#property-size").value,
    ID: properties.length + 1,
  };
  properties.push(property);
  localStorage.setItem("properties", JSON.stringify(properties));
  showItems(properties);
}

document.querySelector("#addprop").addEventListener("click", addItems);

// Delete
function delItem(id) {
  properties = properties.filter((property) => {
    return property.ID != id;
  });

  localStorage.setItem("properties", JSON.stringify(properties));
  showItems(properties);
}
// edit
function updateProperty(id) {
  console.log("Being clicked");
  // variables for edited values
  let etitle = document.getElementById(`title${id}`).value;
  let etype = document.getElementById(`type${id}`).value;
  let eaddress = document.getElementById(`address${id}`).value;
  let eprice = document.getElementById(`price${id}`).value;
  let eimgURL = document.getElementById(`imgURL${id}`).value;
  let erooms = document.getElementById(`rooms${id}`).value;
  let ebathrooms = document.getElementById(`bathrooms${id}`).value;
  let egarage = document.getElementById(`garage${id}`).value;
  let esquarefoot = document.getElementById(`squarefoot${id}`).value;
  let property = properties.find((property) => property.id == id);
  // passing edited values into array
  property.title = etitle;
  property.type = etype;
  property.address = eaddress;
  property.price = eprice;
  property.imgURL = eimgURL;
  property.rooms = parseInt(erooms);
  property.bathrooms = parseInt(ebathrooms);
  property.squarefoot = parseInt(esquarefoot);
  localStorage.setItem("property", JSON.stringify(properties));
  loadData();
}
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
