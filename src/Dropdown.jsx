import React, { useEffect, useState } from "react";
import "./dropdown.css";
import data from "./data.json"; // Import the JSON data

function DropdownCategories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [index, setIndex] = useState(0);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  useEffect(() => {
    console.log(selectedCategory);
  }, []);
  console.log(selectedCategory);
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown bg-success">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SHOP BY CATEGORY
            </a>
            <ul class="dropdown-menu">
              <li className="nav-item dropend">
                <a  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Fruits & Vegatables
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Foodgrains,Oil & Masala
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Bakery,Cakes & Dairy
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Beverages
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                 Snacks & Branded Foods
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                 Beauty & Hygiene
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Cleaning & Household
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Kitchen, Garden &Pets
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                 Eggs, Meat &Fish
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                 Gourmet & World Food
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Baby Care
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  View All
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li class="nav-item dropend">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fruits and Vegetables
                </a>
                <ul class="dropdown-menu bg-light fw-bold">
                  <li>
                    <a class="dropdown-item" href="#">
                      Fresh Vegetables
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Herbs & Seasonings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fresh Fruits
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cuts & Sprouts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Exotic fruits & Veggies
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Flower Bouquotes & Bunches
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Organic Fruits & Vegetables
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DropdownCategories;
