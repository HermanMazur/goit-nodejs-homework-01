const fs = require("fs").promises;
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function updateContact(contact) {
    await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
}

async function listContacts() {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
}

async function getContactById(id) {
    const allContacts = await listContacts();
    const contactById = allContacts.find(contact => contact.id === `${ id }`);

    return contactById || null;
}

async function removeContact(id) {
    const allContacts = await listContacts();
    const deleteId = allContacts.findIndex(contact => contact.id === `${ id }`);
    
    if (deleteId === -1) {
        return null;
    }

    const [removeContact] = allContacts.splice(deleteId, 1);
    updateContact(allContacts);
    return removeContact;
}

async function addContact(name, email, phone) {
    const allContacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    };

    allContacts.push(newContact);
    updateContact(allContacts);
    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact

}