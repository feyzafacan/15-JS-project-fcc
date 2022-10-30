const menu = [
    {
        id: 1,
        title: "Chicken and Bacon Sandwich",
        category: "Sandwiches",
        price: 6.00,
        img: "./images/pexels-rajesh-tp-1603901.jpg",
        desc: `Melted brie cheese, walnuts, sweet onions, fresh basil leaves`,
    },
    {
        id: 2,
        title: "Veg sandwich",
        category: "Sandwiches",
        price: 5.50,
        img: "./images/pexels-suzy-hazelwood-1209029.jpg",
        desc: `Mozzarella, cream cheese, tomato slices, arugula, pine nuts`,
    },
    {
        id: 3,
        title: "Cheese chicken Pizza",
        category: "Pizza",
        price: 13.60,
        img: "./images/pexels-kristina-paukshtite-1146760.jpg",
        desc: `Chicken, cheddar cheese, blue cheese, chanterelle mushrooms, garlic sauce`,
    },
    {
        id: 4,
        title: "Meat feast Pizza",
        category: "Pizza",
        price: 17.50,
        img: "./images/pexels-jonathan-petersson-1166120.jpg",
        desc: `Ham, chicken, bacon, mozzarella, white sauce`,
    },
    {
        id: 5,
        title: "Veg Pizza",
        category: "Pizza",
        price: 9.00,
        img: "./images/pexels-edward-eyer-1049620.jpg",
        desc: `Tomato, mushrooms, sweet pepper, onions, basil, mozzarella, red sauce`,
    },
    {
        id: 6,
        title: "House Burger",
        category: "Burgers",
        price: 13.80,
        img: "./images/black_and_blue_burger_95881_16x9.jpg",
        desc: `Beef burger topped with tomato, onion, lettuce, cheddar cheese, BBQ sauce`,
    },
    {
        id: 7,
        title: "Cheese Burger",
        category: "Burgers",
        price: 14.00,
        img: "./images/pexels-valeria-boltneva-1639557.jpg",
        desc: `Beef patty, cheddar cheese, grilled onions, pickles, lettuce, ketchup, mustard`,
    },
    {
        id: 8,
        title: "Chicken Burger",
        category: "Burgers",
        price: 12.20,
        img: "./images/pexels-anush-gorak-1431305.jpg",
        desc: `Crispy chicken, cheddar cheese, tomato, sweet onion, garlic sauce and chipotle sauce`,
    },
    {
        id: 9,
        title: "Chicken Wrap",
        category: "Wraps",
        price: 6.00,
        img: "./images/pexels-bam-awey-2015191.jpg",
        desc: `Chicken, cheddar cheese, white and red cabbage, tomato, lettuce, garlic sauce`,
    },
    {
        id: 10,
        title: "Beef Wrap",
        category: "Wraps",
        price: 5.00,
        img: "./images/501a2739-bbf3-467a-8994-517fec045a1c.jpg",
        desc: `Mozzarella, cream cheese, tomato slices, lettuce, arugula, pine nuts, white sauce`,
    },


];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
