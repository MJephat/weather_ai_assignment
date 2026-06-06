# Weather_AI_Assignment
Application designed to consume APIs from [weather](https://weather-ai.co/docs)]

## Structure
###
- `backend/`: Contains the Express server that acts as a proxy to the Weather API.
  - `server.js`: The main server file that handles API requests and forwards them to the Weather API.
  - `.env`: Contains environment variables for the backend, including the API key and base URL.
### frontend
- `src/`: Contains the source code of the application.
  - `components/`: Contains reusable React components.
  - `service/`: Contains files that consumes backend APIs.
  - `data/`: contins file with sample data.
  - `App.jsx`: The main application component that sets up routing and layout.
  - `main.jsx`: The entry point of the application that renders the App component.
  

## Installation
Backend: npm install dotenv, express, nodemon, cors
-npm install 
-npm install tailwindcss @tailwindcss/vite
-npm install react-toastify: For showing Notfication 
-npm install react-icons: For icons
-npm instal luxon : For date, time and timezones


## Run
Frontend: npm run dev 
Backend: npm run dev or npm start

Open: http://localhost:3000/
Deployed
