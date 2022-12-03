const contactsOperation = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contacts = await contactsOperation.listContacts();
            console.table(contacts);
            break;
        
        case "get":
            const contactGetById = await contactsOperation.getContactById(id);
            console.log(contactGetById);
            break;
        
        case "add":
            const newContact = await contactsOperation.addContact(name, email, phone);
            console.log(newContact);
            break;
        
        case "remove":
            const removeContact = await contactsOperation.removeContact(id);
            console.log(removeContact);
            break;
        
        default:
            console.log("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);
