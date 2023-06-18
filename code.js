const mysql = require("mysql");
const fs = require("fs");

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bmmotodb",
});

// Open the MySQL connection
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Connected to the database.");

  // Read the image file into a buffer object
  const logoPath = "C:/Users/esami/Downloads/zontes.png";
  const logoData = fs.readFileSync(logoPath);

  // Define the values to be inserted into the table
  const name = "zontes";
  const logo = logoData;

  // Define the SQL query to insert a row into the table
  const sql = "INSERT INTO brands (name, logo) VALUES (?, ?)";

  // Execute the SQL query with the values
  connection.query("select * from brands;", (error, result) => {
    if (error) {
      console.error("Error inserting row into the table:", error);
      return;
    }

    console.log("Row inserted into the table:", result);
  });

  // Close the MySQL connection
  connection.end((error) => {
    if (error) {
      console.error("Error closing the database connection:", error);
      return;
    }

    console.log("Database connection closed.");
  });
});
