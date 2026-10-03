# Book Store MERN Stack

A full-stack bookstore application built with the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to manage books with create, read, update, and delete functionality, along with a clean and responsive frontend.

## Overview

This project demonstrates a complete CRUD workflow for a bookstore application. It includes:

- A Node.js and Express backend for API handling
- MongoDB integration using Mongoose
- A React + Vite frontend for the user interface
- Book listing, detail view, creation, editing, and deletion
- Routing and navigation for a seamless user experience

## Tech Stack

- Frontend: React, Vite, React Router DOM, Axios
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Styling: CSS
- Additional Libraries: React Icons, Notistack

## Features

- View all books in a dashboard layout
- Add new books to the collection
- View detailed information for a specific book
- Update book details
- Delete books with confirmation
- Responsive design for desktop and smaller screens
- Clean loading and notification states

## Project Structure

```text
book-store-mern-stack/
├── backend/
│   ├── config.js
│   ├── index.js
│   ├── models/
│   │   └── bookModel.models.js
│   ├── package.json
│   └── routes/
│       └── bookRoute.js
├── frontend/
│   └── book-store-mern/
│       ├── src/
│       ├── package.json
│       ├── vite.config.js
│       └── index.html
├── README.md
└── package-lock.json
```

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm
- MongoDB Atlas account or a local MongoDB instance

## Installation

1. Clone the repository

```bash
git clone <repository-url>
cd book-store-mern-stack
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend/book-store-mern
npm install
```

4. Configure MongoDB

Open the backend configuration file and update the MongoDB connection string:

```js
// backend/config.js
export const PORT = 5555;
export const mongoDBURL = 'YOUR_MONGODB_CONNECTION_STRING';
```

## Running the Application

Start the backend server:

```bash
cd backend
npm run dev
```

Start the frontend development server:

```bash
cd frontend/book-store-mern
npm run dev
```

Then open the local URL shown by Vite in your browser.

## API Endpoints

The backend exposes the following REST API routes:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /books | Fetch all books |
| POST | /books | Create a new book |
| GET | /books/:id | Fetch a single book by ID |
| PUT | /books/:id | Update a book |
| DELETE | /books/:id | Delete a book |

### Example Book Object

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "publishYear": 1988
}
```

## Notes

- The backend runs on port `5555` by default.
- The app uses CORS so the React frontend can communicate with the Express API.
- MongoDB is required for storing and retrieving book records.

## License

This project is licensed under the ISC License.

## Author

Huzaifa

## Contributing

Contributions are welcome. If you want to improve the project, feel free to fork the repository and submit a pull request.
