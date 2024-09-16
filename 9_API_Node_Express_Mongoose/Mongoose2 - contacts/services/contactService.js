const Contact = require("../models/contact");

// Method to add a new contact
const createContact = async (contactData) => {
  try {
    const contact = new Contact(contactData);
    await contact.save();
    console.log("Contact saved:", contact);
  } catch (err) {
    console.error("Error creating contact:", err.message);
  }
};

// Method to search for a contact by name
const searchContact = async (name) => {
  try {
    console.log("Collection name:", Contact.collection.collectionName);
    // Accessing collection name

    const contact = await Contact.findOne({ fullName: name });
    if (!contact) {
      console.log("Contact not found");
      return null;
    }
    console.log("Contact found:", contact);
    return contact;
  } catch (err) {
    console.error("Error searching contact:", err.message);
  }
};

// Method to search and update a contact
const updateContact = async (name, newContactData) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { fullName: name },
      newContactData,
      { new: true }
    );
    if (!contact) {
      console.log("Contact not found");
      return null;
    }
    console.log("Contact updated:", contact);
    return contact;
  } catch (err) {
    console.error("Error updating contact:", err.message);
  }
};

//update many contacts
const updateManyContacts = async (name, newContactData) => {
  try {
    const contact = await Contact.updateMany(
      {
        fullName: name,
      },
      newContactData
    );
  } catch (err) {
    console.error("Error updating contact:", err.message);
  }
};

// Method to search and remove a contact
const removeContact = async (name) => {
  try {
    const contact = await Contact.findOneAndDelete({ fullName: name });
    if (!contact) {
      console.log("Contact not found");
      return null;
    }
    console.log("Contact removed:", contact);
    return contact;
  } catch (err) {
    console.error("Error removing contact:", err.message);
  }
};

module.exports = { createContact, searchContact, updateContact, removeContact };
