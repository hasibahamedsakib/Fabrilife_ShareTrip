# Fabrilife ShareTrip

## [Live Demo](https://fabrilife-share-trip.vercel.app/)

Fabrilife ShareTrip is a React application built with Vite, TypeScript, and Tailwind CSS. It provides a user-friendly interface for browsing products, viewing details, and adding them to the cart.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Redux Setup](#redux-setup)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Configuration](#configuration)
- [License](#license)

## Features

- **SimpleNavBar**: A navigation bar displaying the brand name and cart/favorites icons.
- **Product Listing**: Displays product details such as image, title, brand, price, and discount.
- **Quick View**: A modal for detailed product information including rating and description.
- **Add to Cart**: Allows users to add/remove products from the cart and view quantities.
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive styling.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/fabrilife-sharetrip.git
   cd fabrilife-sharetrip
   ```

2. Install dependencies:

   ```sh
   yarn install
   ```

3. Start the development server:
   ```sh
   yarn run dev
   ```

## Usage

Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

```plaintext
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── discount-banner.png
│   ├── components
│   │   ├── Button
│   │   │   └── AddToCart
│   │   │       └── AddToCart.tsx
│   │   ├── Navbar
│   │   │   └── SimpleNavBar.tsx
│   │   └── Products
│   │       ├── CartContainer.tsx
│   │       ├── ProductCart.tsx
│   │       └── QuickViewModal.tsx
│   ├── redux
│   │   ├── hooks.ts
│   │   ├── service
│   │   │   └── api.ts
│   │   ├── slices
│   │   │   └── productSlice.ts
│   │   └── store.ts
│   ├── types
│   │   └── types.product.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Components

### SimpleNavBar

A simple navigation bar displaying the brand name and icons for cart and favorites.

### ProductCart

- Displays product details including image, title, brand, price, and discount.
- Includes buttons for adding products to the cart and viewing details in a modal.

### QuickViewModal

- A modal for detailed product information including title, brand, price, discount, rating, and description.
- Contains an "Add to Cart" button.

### AddToCart

- A button component to add/remove products from the cart and view quantities.

### CartContainer

- Fetches and displays a list of products using the `useGetProductsQuery` hook from Redux Toolkit Query.

## Redux Setup

The project uses Redux Toolkit for state management. The store is configured in `store.ts` and includes a slice for managing products in the cart (`src/redux/slices/productSlice.ts`).

### Custom Hooks

- **useAppDispatch**: A typed version of `useDispatch`.
- **useAppSelector**: A typed version of `useSelector`.

## API Integration

The project uses Redux Toolkit Query to fetch product data from an API. The API service is defined in `src/redux/service/api.ts`.

## Styling

Tailwind CSS is used for styling. Custom configurations are defined in `tailwind.config.js`. Global styles are imported in `index.css` and `App.css`.

## Configuration

- **Vite**: Configuration options are defined in `vite.config.ts`.
- **TypeScript**: Type configurations are defined in `tsconfig.json`.
- **ESLint**: Configuration options are defined in `eslint.config.js`.
- **PostCSS**: Configuration options are defined in `postcss.config.js`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
