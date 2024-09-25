# 📚 Book Store & Renting App

### Aim
Provide a platform where users can browse books and purchase them, with an option to rent the books.

### Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite with Sequelize ORM (Alternate option for MongoDB)

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/your-repository/book-store-app.git
   ```

2. **Navigate to the project directory**:
   
   ```
   cd book-store-app
   ```

3. **Install dependencies**:
   
   ```
   npm install
   ```
   
4. **Run the application**:

   ```
   node app.js
   ```

5. **View in browser**: Open your browser and go to ```http://localhost:3000```.

## 💾 Using SQLite with Sequelize

This project uses **SQLite** for managing the database through Sequelize ORM. If you prefer, you can switch to MongoDB by following a similar structure.

## Database Setup

SQLite database will automatically be created as ```database.sqlite``` when the app runs.

- **Books Model**:

     - Title (String)

     - Author (String)

     - Price (Number)

     - Available for Rent (Boolean)

     - Rent Price (Number)

## 🛠 Project Structure

```
book-store-app/
│
├── public/               # Static assets (CSS, JavaScript, Images)
│
├── views/                # EJS views (HTML templates)
│
├── models/               # Sequelize models
│
├── routes/               # Application routes
│
├── app.js                # Main server file
└── package.json          # Project configuration
```

## 📂 License

This project is licensed under the MIT License.

## 🎉 Acknowledgments

“Good friends, good books, and a sleepy conscience: this is the ideal life.” – Mark Twain

Thank you for checking out this project! We hope it provides the ideal experience for browsing and renting books.
