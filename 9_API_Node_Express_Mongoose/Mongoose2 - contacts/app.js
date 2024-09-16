const mongoose = require("mongoose");
const {
  createContact,
  searchContact,
  updateContact,
  removeContact,
} = require("./services/contactService");
// Connect to your local MongoDB instance
mongoose
  .connect("mongodb://localhost:27017/my_db")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
// Example usage of the methods
//Creating a new contact
createContact({
  fullName: "nouveau contact",
  email: "nouveau@example.com",
  phoneNumber: 1234567890,
  birthdate: 19900101,
});
// Searching for a contact
searchContact("nouveau").then((contact) => {
  if (contact) {
    console.log(contact);
  }
});
// Updating a contact
// updateContact("John Doe", {
//   email: "new.email@example.com",
//   phoneNumber: 9876543210,
// }).then((updatedContact) => {
//   if (updatedContact) {
//     // Do something with the updated contact
//   }
// });
// Removing a contact
removeContact("nouveau").then((removedContact) => {
  if (removedContact) {
    console.log("removed :", removedContact);
  }
});
