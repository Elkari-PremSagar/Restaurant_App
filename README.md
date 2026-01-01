# 🍽️Restaurant App (React)
A fully functional Restaurant Application built using React that allows users to browse restaurant menu items, manage a cart, and place orders. The app includes authentication, protected routes, and dynamic rendering of menu categories based on API responses.

--- 
🔗 **Live App** : 👉 https://PremRestaurant.ccbp.tech
🔗 **GitHub Repository**: 👉 https://github.com/Elkari-PremSagar/Restaurant_App.git 

---
## 🔐 Demo Credentials Use the following credentials to log in:
json
{
  "username": "rahul",
  "password": "rahul@2021"
}

-----

# ✨ Features
# 🔑 Authentication

Secure login using username and password

JWT token stored using cookies

Protected routes for Home and Cart

Authenticated users visiting /login are redirected to Home

---
# 🏠 Home Page

Displays restaurant name “UNI Resto Cafe”

Menu categories (tabs) rendered dynamically from API

Dish availability status shown

Increase / decrease dish quantity

Add to Cart enabled only when quantity > 0

Displays “Customizations available” when addons exist

---

# 🛒 Cart Page

Shows selected cart items

Increase / decrease quantity of items

Automatically removes item when quantity reaches zero

Calculates total price dynamically

Remove individual cart items

Remove All Cart Items option

Displays empty cart view when cart is empty

---

# 🧭 Navigation

Header with:

Restaurant title (navigates to Home)

Cart icon with item count badge

---

# 🛠️ Tech Stack

## React

## React Router DOM

## Context API

## JavaScript (ES6+)

## CSS

## JWT Authentication

## REST APIs

## 🔗 APIs Used
Login API
POST https://apis.ccbp.in/login

## Restaurant Menu API
GET https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details

# 📁 Project Structure

src/
│── components/
│   ├── Header
│   ├── DishItem
│   ├── CartItem
│   ├── NotFound
│
│── routes/
│   ├── Home
│   ├── Cart
│   ├── Login
│
│── context/
│   └── CartContext.js
│
│── App.js
│── index.js

---

# 🚀 Getting Started
Install Dependencies
npm install

# Start the Application
npm start

---

#### Web Interface
<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" target=_blank_ >
    <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" alt="restaurant-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
    </div>
</a>
