const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function updateContact(contact) {
    await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
}

async function listContacts() {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
}

async function getContactById(contactId) {
    const allContacts = await listContacts();
    const ContactById = allContacts.findIndex(contact => contact.id === contactId);

    return ContactById || null;
}

async function removeContact(contactId) {
    const allContacts = await listContacts();
    const deleteId = allContacts.findIndex(contact => contact.id === contactId);
    if (deleteId === -1) {
        return null;
    }
    const [removeContact] = allContacts.splice(deleteId, 1);
    updateContact(allContact);
    return removeContact;
}

async function addContact(name, email, phone) {
 
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact

}