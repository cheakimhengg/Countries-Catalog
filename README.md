# Countries Catalog

This project is a Countries Catalog application built using React. The application fetches country-related data from the [REST Countries API](https://restcountries.com/) and displays it in a user-friendly format. Users can search, sort, and paginate through the country data, and they can also view detailed information about each country in a modal popup.

## Features

1. **Country Information Display:**
   - **Flags:** Display the country's flag (PNG format).
   - **Country Name:** Display the official name of the country.
   - **2-character Country Code:** Display the two-character country code (CCA2).
   - **3-character Country Code:** Display the three-character country code (CCA3).
   - **Native Country Name:** Display the native name(s) of the country.
   - **Alternative Country Name(s):** Display alternative spellings of the country name.
   - **Country Calling Codes:** Display the country's calling code(s).

2. **Search:**
   - Implemented fuzzy search functionality that allows users to search for a country by its name.

3. **Sorting:**
   - Sort the countries by their name in ascending or descending order.

4. **Pagination:**
   - Display 25 countries per page with the ability to navigate between pages.

5. **Detailed Information Modal:**
   - When a user clicks on a country name, a modal pops up displaying all the detailed information about that country.

## Getting Started

### Prerequisites

To run this project locally, you need to have Node.js and npm (Node Package Manager) installed on your machine. You can download Node.js from [here](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/countries-catalog.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd countries-catalog
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

### Running the Project

1. **Start the development server:**

   ```bash
   npm start
   ```

   This command will start the development server and open the application in your default web browser. The app will be running at `http://localhost:3000/`.
