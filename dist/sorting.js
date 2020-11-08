let products = [
  {
    Brand: "Infinix",
    Model: "I22",
    Price: 110,
    Rom: 32,
    Ram: 2,
    Display: 5,
    Camera: 8,
    Rating: 4.8,
  },
  {
    Brand: "Samsung",
    Model: "J5",
    Price: 145,
    Rom: 16,
    Ram: 2,
    Display: 5,
    Camera: 8,
    Rating: 5,
  },
  {
    Brand: "Symphony",
    Model: "H100",
    Price: 110,
    Rom: 16,
    Ram: 2,
    Display: 5,
    Camera: 8,
    Rating: 4.9,
  },
  {
    Brand: "Motorola",
    Model: "M31",
    Price: 110,
    Rom: 16,
    Ram: 2,
    Display: 5.2,
    Camera: 8,
    Rating: 4.9,
  },
  {
    Brand: "Honor",
    Model: "H19",
    Price: 110,
    Rom: 32,
    Ram: 3,
    Display: 5.5,
    Camera: 13,
    Rating: 4.9,
  },
  {
    Brand: "Honor",
    Model: "H19",
    Price: 110,
    Rom: 32,
    Ram: 3,
    Display: 5.3,
    Camera: 13,
    Rating: 4.8,
  },
  {
    Brand: "Lenova",
    Model: "L11",
    Price: 110,
    Rom: 32,
    Ram: 1,
    Display: 5.2,
    Camera: 12,
    Rating: 4.7,
  },
  {
    Brand: "Asus",
    Model: "A33",
    Price: 180,
    Rom: 32,
    Ram: 2,
    Display: 5.2,
    Camera: 12,
    Rating: 4.9,
  },
  {
    Brand: "One Plus",
    Model: "O20",
    Price: 380,
    Rom: 64,
    Ram: 4,
    Display: 5.3,
    Camera: 13,
    Rating: 4.9,
  },
  {
    Brand: "LG",
    Model: "L44",
    Price: 96,
    Rom: 16,
    Ram: 1,
    Display: 5,
    Camera: 8,
    Rating: 4.8,
  },
  {
    Brand: "Lava",
    Model: "Iris 100",
    Price: 85,
    Rom: 16,
    Ram: 2,
    Display: 5,
    Camera: 8,
    Rating: 4.7,
  },
  {
    Brand: "iTel",
    Model: "i44",
    Price: 80,
    Rom: 16,
    Ram: 2,
    Display: 5,
    Camera: 13,
    Rating: 4.7,
  },
  {
    Brand: "HTC",
    Model: "H44",
    Price: 130,
    Rom: 32,
    Ram: 3,
    Display: 5.1,
    Camera: 13,
    Rating: 4.9,
  },
  {
    Brand: "Sony",
    Model: "S33",
    Price: 99,
    Rom: 16,
    Ram: 1,
    Display: 5,
    Camera: 8,
    Rating: 4.6,
  },
  {
    Brand: "Samsung",
    Model: "J1",
    Price: 105,
    Rom: 8,
    Ram: 1.5,
    Display: 4.3,
    Camera: 5,
    Rating: 4.8,
  },
  {
    Brand: "Vivo",
    Model: "Y91",
    Price: 100,
    Rom: 16,
    Ram: 2,
    Display: 5.4,
    Camera: 13,
    Rating: 4.9,
  },
  {
    Brand: "Nokia",
    Model: "N21",
    Price: 180,
    Rom: 32,
    Ram: 2,
    Display: 5,
    Camera: 13,
    Rating: 4.8,
  },
  {
    Brand: "Walton",
    Model: "RH3",
    Price: 120,
    Rom: 16,
    Ram: 2,
    Display: 5,
    Camera: 8,
    Rating: 4.7,
  },
  {
    Brand: "Xiomi",
    Model: "Realme 10",
    Price: 220,
    Rom: 32,
    Ram: 4,
    Display: 5.2,
    Camera: 13,
    Rating: 4.9,
  },
  {
    Brand: "Huawei",
    Model: "H2",
    Price: 350,
    Rom: 32,
    Ram: 3,
    Display: 5.3,
    Camera: 13,
    Rating: 4.8,
  },
  {
    Brand: "Symphony",
    Model: "R100",
    Price: 200,
    Rom: 16,
    Ram: 2,
    Display: 5,
    Camera: 13,
    Rating: 5,
  },
  {
    Brand: "Google Pixed",
    Model: "G+",
    Price: 1100,
    Rom: 128,
    Ram: 8,
    Display: 5.2,
    Camera: 20,
    Rating: 5,
  },
  {
    Brand: "Samsung",
    Model: "J7 Pro",
    Price: 500,
    Rom: 64,
    Ram: 4,
    Display: 5.2,
    Camera: 20,
    Rating: 4.9,
  },
  {
    Brand: "Oppo",
    Model: "F7",
    Price: 420,
    Rom: 64,
    Ram: 4,
    Display: 5.5,
    Camera: 20,
    Rating: 4.9,
  },
  {
    Brand: "Samsung",
    Model: "S10",
    Price: 1100,
    Rom: 128,
    Ram: 8,
    Display: 6.2,
    Camera: 32,
    Rating: 4.8,
  },
  {
    Brand: "Apple",
    Model: "iPhone 12Pro",
    Price: 1500,
    Rom: 128,
    Ram: 8,
    Display: 5.5,
    Camera: 32,
    Rating: 5,
  },
];

let productsDOM;
function DOM() {
  productsDOM = document.querySelector(".products-container");
  let productsHTML = "";
  products.map((product) => {
    productsHTML += `
 <div class="singleProduct">
 <img src="src/images/mobile.png" alt="" class="pImage">
 <div class="pDescription">
   <p class="pBrand"> <b>Brand:</b> ${product.Brand} </p>
   <p class="pName"> <b>Model:</b> ${product.Model} </p>
   <p class="Price"> <b>Price: </b> $${product.Price} </p>
   <p class="pRom"> <b>Rom:</b> ${product.Rom}GB </p>
   <p class="pRam"> <b>Ram:</b> ${product.Ram}GB </p>
   <p class="pDisplay"> <b>Display:</b> ${product.Display}inc </p>
   <p class="pCamera"> <b>Back Camera:</b> ${product.Camera}MP </p>
   <p class="Rating"> <b>Rating:</b> <i class="fas fa-star"></i> ${product.Rating} </p>
 </div>
</div>
 `;
  });
  productsDOM.innerHTML = productsHTML;
}
DOM();

// sort method
const sortByTitle = document.querySelector(".sortByTitle");
const openAngle = document.querySelector(".openAngle");
const sortOption = document.querySelector(".sortOption");
const sortAction = document.querySelectorAll(".sortOption p");
let is = false;
sortByTitle.addEventListener("click", () => {
  is = !is;
  if (is) {
    sortOption.classList.add("showSort");
    openAngle.innerHTML = `<i class="fas fa-angle-up"></i>`;
  } else {
    sortOption.classList.remove("showSort");
    openAngle.innerHTML = `<i class="fas fa-angle-down"></i>`;
  }
});
const sortType = ["Name", "Price", "Ram", "Rom", "Camera", "Rating", "Display"];
sortAction.forEach((action, i) => {
  action.innerHTML = sortType[i];

  action.addEventListener("click", function () {
    sortAction.forEach((item, i) => {
      item.classList.remove("actv");
      this.classList.add("actv");
      if (item.classList.contains("actv")) {
        this.innerHTML += `  <i class="fas fa-circle"></i>`;
      } else { item.innerHTML=sortType[i]}});
      
    is = !is;
    const th = this.innerText;
    openAngle.innerHTML = `<i class="fas fa-angle-down"></i>`;
    const loading = document.getElementById("loading");
    sortOption.classList.remove("showSort");
    loading.setAttribute("style", "transform:scale(1)");
    productsDOM.setAttribute("style", "opacity:0.1");

    setTimeout(() => {
      loading.removeAttribute("style");
      productsDOM.removeAttribute("style");
      if (th == "Name") {
        products.sort((a, b) => {
          if (a.Brand < b.Brand) {
            return -1;
          }
          a.Brand > b.Brand ? 1 : 0;
        });
      }
      th == "Ram" && products.sort((a, b) => a.Ram - b.Ram);
      th == "Price" && products.sort((a, b) => a.Price - b.Price);
      th == "Rom" && products.sort((a, b) => a.Rom - b.Rom);
      th == "Camera" && products.sort((a, b) => a.Camera - b.Camera);
      th == "Rating" && products.sort((a, b) => a.Rating - b.Rating);
      th == "Display" && products.sort((a, b) => a.Display - b.Display);
      DOM();
    }, 700);
  });
});
