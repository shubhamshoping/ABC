// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const { MongoClient } = require("mongodb");
// const path = require("path");
// const fs = require("fs");
// const { SMTPClient } = require("emailjs");

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // .....upload immages to local drive using Multer........
// app.use("/uploads", express.static("uploads")); // Serve uploaded images

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadDir = "uploads/";
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir);
//     }
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// // MongoDB configuration
// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);
// let db;

// // Connect to MongoDB
// client.connect()
//   .then(() => {
//     db = client.db("mydb");
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Function to generate the next product ID
// const getNextProductId = async () => {
//   const collection = db.collection("immagelink");
//   const lastItem = await collection.find().sort({ productId: -1 }).limit(1).toArray();
//   return lastItem.length > 0 ? lastItem[0].productId + 1 : 1;
// };

// // Endpoint to get the next productId
// app.get("/nextProductId", async (req, res) => {
//   try {
//     const nextProductId = await getNextProductId();
//     res.status(200).json({ productId: nextProductId });
//   } catch (err) {
//     console.error("Error fetching next product ID:", err);
//     res.status(500).json({ error: "Failed to fetch next product ID" });
//   }
// });

// // Route to handle image upload
// app.post("/upload", upload.single("image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const { price, productName } = req.body;
//     const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
//     const productId = await getNextProductId();

//     const collection = db.collection("immagelink");

//     // Insert the image link, price, product name, and product ID into the database
//     await collection.insertOne({ productId, price, productName, imageUrl });

//     res.status(200).json({ message: "Image uploaded successfully", productId, imageUrl });
//   } catch (err) {
//     console.error("Error uploading image:", err);
//     res.status(500).json({ error: "Failed to upload image" });
//   }
// });





// // ............fetch  and get  data from the collection "immagelink".................

// app.get("/products", async (req, res) => {
//     try {
//       const collection = db.collection("immagelink");
//       const products = await collection.find().toArray();
//       res.status(200).json(products);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//       res.status(500).json({ error: "Failed to fetch products" });
//     }
//   });
//   // .................Update and Delete data from collection "immagelink".....................................................
// // ............ update products from the collection "immagelink"............
// // PUT route to update a product
// app.put("/products/:id", upload.single("image"), async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { price, productName } = req.body;

//     const updatedData = {
//       price,
//       productName,
//     };

//     if (req.file) {
//       const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
//       updatedData.imageUrl = imageUrl;
//     }

//     const collection = db.collection("immagelink");
//     const result = await collection.updateOne({ productId: parseInt(id) }, { $set: updatedData });

//     if (result.modifiedCount === 0) {
//       return res.status(404).json({ error: "Product not found or no changes made" });
//     }

//     res.status(200).json({ message: "Product updated successfully" });
//   } catch (err) {
//     console.error("Error updating product:", err);
//     res.status(500).json({ error: "Failed to update product" });
//   }
// });
// // DELETE route to delete a product and the associated image
// app.delete("/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const collection = db.collection("immagelink");

//     // Find the product to get the image URL
//     const product = await collection.findOne({ productId: parseInt(id) });

//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     // Delete the product from the database
//     const result = await collection.deleteOne({ productId: parseInt(id) });

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ error: "Failed to delete product from database" });
//     }

//     // Extract the image file path from the URL and delete it from the uploads folder
//     const imagePath = product.imageUrl.replace(`http://localhost:${PORT}/`, "");
//     if (fs.existsSync(imagePath)) {
//       fs.unlinkSync(imagePath); // Remove the image file
//     }

//     res.status(200).json({ message: "Product and image deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting product:", err);
//     res.status(500).json({ error: "Failed to delete product" });
//   }
// });



// const jwt = require("jsonwebtoken"); // Add jsonwebtoken for JWT token generation

// // POST route for admin registration
// app.post("/adminresister", async (req, res) => {
//   try {
//     const { name, gmail, password } = req.body;

//     // Check if the collection already contains a document
//     const existingAdmin = await db.collection("adminresister").findOne({});
//     if (existingAdmin) {
//       return res.status(400).json({ success: false, message: "Admin is full" });
//     }

//     // Insert the new admin document without password hashing
//     await db.collection("adminresister").insertOne({ name, gmail, password });
//     res.status(201).json({ success: true, message: "Admin registered successfully" });
//   } catch (error) {
//     console.error("Error registering admin:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });

// // POST route for admin login
// app.post("/adminlogin", async (req, res) => {
//   try {
//     const { name, gmail, password } = req.body;

//     // Check if data exists in the adminresister collection
//     const matchingAdmin = await db.collection("adminresister").findOne({ name, gmail });

//     if (!matchingAdmin) {
//       return res.status(400).json({ success: false, message: "Your data is not matching with adminresister" });
//     }

//     // Compare the provided password directly (without hashing)
//     if (password !== matchingAdmin.password) {
//       return res.status(400).json({ success: false, message: "Invalid password" });
//     }

//     // Generate a JWT token after successful login
//     const token = jwt.sign({ adminId: matchingAdmin._id }, "your_jwt_secret", { expiresIn: "1h" });

//     // Insert the data into adminlogin collection and send back the token
//     await db.collection("adminlogin").insertOne({ name, gmail, password });
//     res.status(201).json({ success: true, message: "Login data successfully added to adminlogin collection", token });
//   } catch (error) {
//     console.error("Error in admin login:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });




// // SMTP Client Configuration
// const smtpClient = new SMTPClient({
//   user: "shubham.ap.sharma@gmail.com",
//   password: "jvsx sumk xdqu hgmb",
//   host: "smtp.gmail.com",
//   ssl: true,
// });

// // Endpoint to check Gmail and send a password reset link
// app.post("/check-gmail", async (req, res) => {
//   const { gmail } = req.body;

//   if (!gmail || !gmail.includes("@gmail.com")) {
//     return res.status(400).json({ error: "Invalid Gmail address provided." });
//   }

//   try {
//     const collection = db.collection("adminresister");
//     const user = await collection.findOne({ gmail });

//     if (user) {
//       const resetLink = `http://localhost:3000/adminpassword`;
//       const message = {
//         text: `Click the link to reset your password: ${resetLink}`,
//         from: "shubham.ap.sharma@gmail.com",
//         to: gmail,
//         subject: "Password Reset Request",
//       };

//       smtpClient.send(message, (err, result) => {
//         if (err) {
//           console.error("Error sending email:", err);
//           return res.status(500).json({ error: "Failed to send email." });
//         }
//         console.log("Email sent successfully:", result);
//         res.json({ message: "Password reset email sent successfully!" });
//       });
//     } else {
//       res.status(404).json({ error: "Gmail not found in the database." });
//     }
//   } catch (error) {
//     console.error("Error processing request:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// });



// app.put("/update-password", async (req, res) => {
//   const { gmail, password } = req.body;

//   if (!gmail || !password) {
//     return res.status(400).json({ error: "Gmail and password are required." });
//   }

//   try {
//     const collection = db.collection("adminresister");
//     const result = await collection.updateOne(
//       { gmail },
//       { $set: { password } }
//     );

//     if (result.matchedCount === 0) {
//       return res.status(404).json({ error: "Gmail not found." });
//     }

//     res.json({ message: "Password updated successfully." });
//   } catch (err) {
//     console.error("Error updating password:", err);
//     res.status(500).json({ error: "Internal server error." });
//   }
// });



// app.delete("/delete-admin", async (req, res) => {
//   try {
//     const { name, gmail, password } = req.body;

//     // Check if admin exists
//     const adminCollection = db.collection("adminresister");
//     const existingAdmin = await adminCollection.findOne({
//       name,
//       gmail,
//       password
//     });

//     if (!existingAdmin) {
//       return res.status(404).json({ error: "Admin not found with these credentials" });
//     }

//     // Delete the admin
//     const result = await adminCollection.deleteOne({
//       name,
//       gmail,
//       password
//     });

//     if (result.deletedCount === 1) {
//       res.json({ message: "Admin deleted successfully" });
//     } else {
//       res.status(500).json({ error: "Failed to delete admin" });
//     }
//   } catch (error) {
//     console.error("Delete admin error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });




// app.post("/customer-resister", async (req, res) => {
//   const { name, gmail, password } = req.body;

//   if (!name || !gmail || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   try {
//     const collection = db.collection("CustomerResister");

//     // Check if the Gmail already exists
//     const existingCustomer = await collection.findOne({ gmail });
//     if (existingCustomer) {
//       return res.status(400).json({ message: "Customer already exists" });
//     }

//     // Insert the new customer
//     await collection.insertOne({ name, gmail, password });
//     res.status(201).json({ message: "Customer registered successfully" });
//   } catch (error) {
//     console.error("Error processing the request:", error);
//     res.status(500).json({ message: "An error occurred on the server" });
//   }
// });




// app.post("/customerlogin", async (req, res) => {
//   try {
//     const { name, gmail, password } = req.body;

//     // Check if the data exists in the CustomerResister collection
//     const customerExists = await db.collection("CustomerResister").findOne({
//       name,
//       gmail,
//       password,
//     });

//     if (customerExists) {
//       // Insert the data into the CustomerLogin collection
//       await db.collection("CustomerLogin").insertOne({ name, gmail, password });
//       res.status(200).json({ message: "Login successful and data inserted into CustomerLogin" });
//     } else {
//       res.status(404).json({ message: "No such data found in CustomerResister" });
//     }
//   } catch (error) {
//     console.error("Error handling customer login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });




//   // PUT method to update customer password
// app.put("/CustomerResister", async (req, res) => {
//   const { gmail, password } = req.body;
//   if (!gmail || !password) {
//     return res.status(400).json({ error: "Gmail and password are required" });
//   }

//   try {
//     const collection = db.collection("CustomerResister");
//     const customer = await collection.findOne({ gmail });

//     if (!customer) {
//       return res.status(404).json({ error: "Gmail not found" });
//     }

//     await collection.updateOne(
//       { gmail },
//       { $set: { password } }
//     );

//     res.status(200).json({ message: "Password updated successfully" });
//   } catch (error) {
//     console.error("Error updating password:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });



   
// // SMTP client users
// const users = [
//   { email: 'shubham.ds.sharma@gmail.com', password: 'imng xayi lleh friy' },
//   { email: 'shubham.jack.sharma@gmail.com', password: 'sxal ebnp rxqz qcen' }
// ];

// // POST route for Gmail submission
// app.post("/sendCustomerLink", async (req, res) => {
//   const { gmail } = req.body;

//   if (!gmail || !gmail.includes("@gmail.com")) {
//     return res.status(400).json({ error: "Invalid Gmail provided." });
//   }

//   try {
//     const customer = await db.collection("CustomerResister").findOne({ gmail });

//     if (!customer) {
//       return res.status(404).json({ error: "Gmail not found in the database." });
//     }

//     const resetLink = `http://localhost:3000/customerpassword`;

//     // Loop through SMTP users to send the email
//     let emailSent = false;
//     for (const { email, password } of users) {
//       const client = new SMTPClient({
//         user: email,
//         password,
//         host: 'smtp.gmail.com',
//         ssl: true,
//       });

//       const message = {
//         text: `Click this link to update your password: ${resetLink}`,
//         from: email,
//         to: gmail,
//         subject: "Password Reset Link",
//       };

//       try {
//         await new Promise((resolve, reject) =>
//           client.send(message, (err, message) => {
//             if (err) reject(err);
//             else resolve(message);
//           })
//         );
//         emailSent = true;
//         break; // Exit loop if email is sent successfully
//       } catch (err) {
//         console.error(`Failed to send from ${email}:`, err);
//       }
//     }

//     if (emailSent) {
//       res.status(200).json({ message: "Password reset link sent successfully." });
//     } else {
//       res.status(500).json({ error: "Failed to send email." });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal server error." });
//   }
// });





// // Route to fetch product data
// app.get("/products", async (req, res) => {
//   try {
//     const collection = db.collection("immagelink");
//     const products = await collection.find().toArray();
//     res.status(200).json(products);
//   } catch (err) {
//     console.error("Error fetching products:", err);
//     res.status(500).json({ error: "Failed to fetch products" });
//   }
// });







// // Serve uploaded images
// app.use("/uploads2", express.static("uploads2"));

// // Configure multer for file uploads
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadDir = "uploads2/";
//     if (!fs.existsSync(uploadDir)) {
//       fs.mkdirSync(uploadDir);
//     }
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const myupload = multer({ storage: multerStorage });




// // Route to handle image upload and add to cart
// app.post("/addToCart", myupload.single("imageUrl"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const { price, productName } = req.body;
//     const imageUrl = `http://localhost:${PORT}/uploads2/${req.file.filename}`;

//     const collection = db.collection("Addtocart");

//     // Insert the image link, price, product name into the database
//     await collection.insertOne({ price, productName, imageUrl });

//     res.status(200).json({ message: "Added to cart successfully", imageUrl });
//   } catch (err) {
//     console.error("Error adding to cart:", err);
//     res.status(500).json({ error: "Failed to add to cart" });
//   }
// });




// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });





































































// .......................................copy of original code....................................................................







const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { MongoClient } = require("mongodb");
const path = require("path");
const fs = require("fs");
const { SMTPClient } = require("emailjs");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// .....upload immages to local drive using Multer........
app.use("/uploads", express.static("uploads")); // Serve uploaded images

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// MongoDB configuration
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
let db;

// Connect to MongoDB
client.connect()
  .then(() => {
    db = client.db("mydb");
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Function to generate the next product ID
const getNextProductId = async () => {
  const collection = db.collection("immagelink");
  const lastItem = await collection.find().sort({ productId: -1 }).limit(1).toArray();
  return lastItem.length > 0 ? lastItem[0].productId + 1 : 1;
};

// Endpoint to get the next productId
app.get("/nextProductId", async (req, res) => {
  try {
    const nextProductId = await getNextProductId();
    res.status(200).json({ productId: nextProductId });
  } catch (err) {
    console.error("Error fetching next product ID:", err);
    res.status(500).json({ error: "Failed to fetch next product ID" });
  }
});

// Route to handle image upload
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { price, productName } = req.body;
    const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    const productId = await getNextProductId();

    const collection = db.collection("immagelink");

    // Insert the image link, price, product name, and product ID into the database
    await collection.insertOne({ productId, price, productName, imageUrl });

    res.status(200).json({ message: "Image uploaded successfully", productId, imageUrl });
  } catch (err) {
    console.error("Error uploading image:", err);
    res.status(500).json({ error: "Failed to upload image" });
  }
});





// ............fetch  and get  data from the collection "immagelink".................

app.get("/products", async (req, res) => {
    try {
      const collection = db.collection("immagelink");
      const products = await collection.find().toArray();
      res.status(200).json(products);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  // .................Update and Delete data from collection "immagelink".....................................................
// ............ update products from the collection "immagelink"............
// PUT route to update a product
app.put("/products/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { price, productName } = req.body;

    const updatedData = {
      price,
      productName,
    };

    if (req.file) {
      const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
      updatedData.imageUrl = imageUrl;
    }

    const collection = db.collection("immagelink");
    const result = await collection.updateOne({ productId: parseInt(id) }, { $set: updatedData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Product not found or no changes made" });
    }

    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ error: "Failed to update product" });
  }
});
// DELETE route to delete a product and the associated image
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const collection = db.collection("immagelink");

    // Find the product to get the image URL
    const product = await collection.findOne({ productId: parseInt(id) });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Delete the product from the database
    const result = await collection.deleteOne({ productId: parseInt(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Failed to delete product from database" });
    }

    // Extract the image file path from the URL and delete it from the uploads folder
    const imagePath = product.imageUrl.replace(`http://localhost:${PORT}/`, "");
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath); // Remove the image file
    }

    res.status(200).json({ message: "Product and image deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});



const jwt = require("jsonwebtoken"); // Add jsonwebtoken for JWT token generation

// POST route for admin registration
app.post("/adminresister", async (req, res) => {
  try {
    const { name, gmail, password } = req.body;

    // Check if the collection already contains a document
    const existingAdmin = await db.collection("adminresister").findOne({});
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: "Admin is full" });
    }

    // Insert the new admin document without password hashing
    await db.collection("adminresister").insertOne({ name, gmail, password });
    res.status(201).json({ success: true, message: "Admin registered successfully" });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// POST route for admin login
app.post("/adminlogin", async (req, res) => {
  try {
    const { name, gmail, password } = req.body;

    // Check if data exists in the adminresister collection
    const matchingAdmin = await db.collection("adminresister").findOne({ name, gmail });

    if (!matchingAdmin) {
      return res.status(400).json({ success: false, message: "Your data is not matching with adminresister" });
    }

    // Compare the provided password directly (without hashing)
    if (password !== matchingAdmin.password) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    // Generate a JWT token after successful login
    const token = jwt.sign({ adminId: matchingAdmin._id }, "your_jwt_secret", { expiresIn: "1h" });

    // Insert the data into adminlogin collection and send back the token
    await db.collection("adminlogin").insertOne({ name, gmail, password });
    res.status(201).json({ success: true, message: "Login data successfully added to adminlogin collection", token });
  } catch (error) {
    console.error("Error in admin login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});




// SMTP Client Configuration
const smtpClient = new SMTPClient({
  user: "shubham.ap.sharma@gmail.com",
  password: "jvsx sumk xdqu hgmb",
  host: "smtp.gmail.com",
  ssl: true,
});

// Endpoint to check Gmail and send a password reset link
app.post("/check-gmail", async (req, res) => {
  const { gmail } = req.body;

  if (!gmail || !gmail.includes("@gmail.com")) {
    return res.status(400).json({ error: "Invalid Gmail address provided." });
  }

  try {
    const collection = db.collection("adminresister");
    const user = await collection.findOne({ gmail });

    if (user) {
      const resetLink = `http://localhost:3000/adminpassword`;
      const message = {
        text: `Click the link to reset your password: ${resetLink}`,
        from: "shubham.ap.sharma@gmail.com",
        to: gmail,
        subject: "Password Reset Request",
      };

      smtpClient.send(message, (err, result) => {
        if (err) {
          console.error("Error sending email:", err);
          return res.status(500).json({ error: "Failed to send email." });
        }
        console.log("Email sent successfully:", result);
        res.json({ message: "Password reset email sent successfully!" });
      });
    } else {
      res.status(404).json({ error: "Gmail not found in the database." });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});



app.put("/update-password", async (req, res) => {
  const { gmail, password } = req.body;

  if (!gmail || !password) {
    return res.status(400).json({ error: "Gmail and password are required." });
  }

  try {
    const collection = db.collection("adminresister");
    const result = await collection.updateOne(
      { gmail },
      { $set: { password } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Gmail not found." });
    }

    res.json({ message: "Password updated successfully." });
  } catch (err) {
    console.error("Error updating password:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});



app.delete("/delete-admin", async (req, res) => {
  try {
    const { name, gmail, password } = req.body;

    // Check if admin exists
    const adminCollection = db.collection("adminresister");
    const existingAdmin = await adminCollection.findOne({
      name,
      gmail,
      password
    });

    if (!existingAdmin) {
      return res.status(404).json({ error: "Admin not found with these credentials" });
    }

    // Delete the admin
    const result = await adminCollection.deleteOne({
      name,
      gmail,
      password
    });

    if (result.deletedCount === 1) {
      res.json({ message: "Admin deleted successfully" });
    } else {
      res.status(500).json({ error: "Failed to delete admin" });
    }
  } catch (error) {
    console.error("Delete admin error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




app.post("/customer-resister", async (req, res) => {
  const { name, gmail, password } = req.body;

  if (!name || !gmail || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const collection = db.collection("CustomerResister");

    // Check if the Gmail already exists
    const existingCustomer = await collection.findOne({ gmail });
    if (existingCustomer) {
      return res.status(400).json({ message: "Customer already exists" });
    }

    // Insert the new customer
    await collection.insertOne({ name, gmail, password });
    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({ message: "An error occurred on the server" });
  }
});




// ..................................original Customer login code...............................................




// app.post("/customerlogin", async (req, res) => {
//   try {
//     const { name, gmail, password } = req.body;

//     // Check if the data exists in the CustomerResister collection
//     const customerExists = await db.collection("CustomerResister").findOne({
//       name,
//       gmail,
//       password,
//     });

//     if (customerExists) {
//       // Insert the data into the CustomerLogin collection
//       await db.collection("CustomerLogin").insertOne({ name, gmail, password });
//       res.status(200).json({ message: "Login successful and data inserted into CustomerLogin" });
//     } else {
//       res.status(404).json({ message: "No such data found in CustomerResister" });
//     }
//   } catch (error) {
//     console.error("Error handling customer login:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });









// .............................testing......................................................................

app.post("/customerlogin", async (req, res) => {
  try {
    const { name, gmail, password } = req.body;

    // Check if the data exists in the CustomerResister collection
    const customerExists = await db.collection("CustomerResister").findOne({
      name,
      gmail,
      password,
    });

    if (customerExists) {
      // Generate a JWT token after successful login
      const token = jwt.sign({ customerId: customerExists._id }, "your_jwt_secret", { expiresIn: "1h" });

      // Insert the data into the CustomerLogin collection
      await db.collection("CustomerLogin").insertOne({ name, gmail, password });
      res.status(200).json({ message: "Login successful and data inserted into CustomerLogin", token });
    } else {
      res.status(404).json({ message: "No such data found in CustomerResister" });
    }
  } catch (error) {
    console.error("Error handling customer login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});





















  // PUT method to update customer password
app.put("/CustomerResister", async (req, res) => {
  const { gmail, password } = req.body;
  if (!gmail || !password) {
    return res.status(400).json({ error: "Gmail and password are required" });
  }

  try {
    const collection = db.collection("CustomerResister");
    const customer = await collection.findOne({ gmail });

    if (!customer) {
      return res.status(404).json({ error: "Gmail not found" });
    }

    await collection.updateOne(
      { gmail },
      { $set: { password } }
    );

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



   
// SMTP client users
const users = [
  { email: 'shubham.ds.sharma@gmail.com', password: 'imng xayi lleh friy' },
  { email: 'shubham.jack.sharma@gmail.com', password: 'sxal ebnp rxqz qcen' }
];

// POST route for Gmail submission
app.post("/sendCustomerLink", async (req, res) => {
  const { gmail } = req.body;

  if (!gmail || !gmail.includes("@gmail.com")) {
    return res.status(400).json({ error: "Invalid Gmail provided." });
  }

  try {
    const customer = await db.collection("CustomerResister").findOne({ gmail });

    if (!customer) {
      return res.status(404).json({ error: "Gmail not found in the database." });
    }

    const resetLink = `http://localhost:3000/customerpassword`;

    // Loop through SMTP users to send the email
    let emailSent = false;
    for (const { email, password } of users) {
      const client = new SMTPClient({
        user: email,
        password,
        host: 'smtp.gmail.com',
        ssl: true,
      });

      const message = {
        text: `Click this link to update your password: ${resetLink}`,
        from: email,
        to: gmail,
        subject: "Password Reset Link",
      };

      try {
        await new Promise((resolve, reject) =>
          client.send(message, (err, message) => {
            if (err) reject(err);
            else resolve(message);
          })
        );
        emailSent = true;
        break; // Exit loop if email is sent successfully
      } catch (err) {
        console.error(`Failed to send from ${email}:`, err);
      }
    }

    if (emailSent) {
      res.status(200).json({ message: "Password reset link sent successfully." });
    } else {
      res.status(500).json({ error: "Failed to send email." });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});













// Serve uploaded images
app.use("/uploads2", express.static("uploads2"));

// Configure multer for file uploads
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads2/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const myupload = multer({ storage: multerStorage });




// Route to handle image upload and add to cart
app.post("/addToCart", myupload.single("imageUrl"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { price, productName } = req.body;
    const imageUrl = `http://localhost:${PORT}/uploads2/${req.file.filename}`;

    const collection = db.collection("Addtocart");

    // Insert the image link, price, product name into the database
    await collection.insertOne({ price, productName, imageUrl });

    res.status(200).json({ message: "Added to cart successfully", imageUrl });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});
























// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Configure multer for file uploads
const mystorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const yourupload = multer({ storage: mystorage });




// Fetch product data
app.get("/products", async (req, res) => {
  try {
    const collection = db.collection("immagelink");
    const products = await collection.find().toArray();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Handle image upload and add to cart
app.post("/addToCart", yourupload.single("imageUrl"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { price, productName } = req.body;
    const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;

    const collection = db.collection("Addtocart");

    // Insert the image link, price, product name into the database
    await collection.insertOne({ price, productName, imageUrl });

    res.status(200).json({ message: "Added to cart successfully", imageUrl });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});












// Fetch products from "Addtocart" collection
app.get("/getCartProducts", async (req, res) => {
  try {
    const collection = db.collection("Addtocart");
    const products = await collection.find().toArray();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching cart products:", err);
    res.status(500).json({ error: "Failed to fetch cart products" });
  }
});












// Delete product by image URL
app.delete("/deleteProduct", async (req, res) => {
  try {
    const { imageUrl } = req.body;
    const collection = db.collection("Addtocart");

    // Find the product in the database
    const product = await collection.findOne({ imageUrl });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product from the collection
    await collection.deleteOne({ imageUrl });

    // Extract the local image path from the image URL
    const imagePath = path.join(__dirname, "uploads2", path.basename(imageUrl));

    // Delete the image file
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    res.status(200).json({ message: "Product and image deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
});









// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});














































































