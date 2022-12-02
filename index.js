const contactsOperation = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contacts = await contactsOperation.listContacts();
            // console.table(contacts);
            break;
        
        case "get":
            const contactGetById = await contactsOperation.getContactById(id);
            console.log(contactGetById);
            break;
    }
}

// invokeAction({ action: "list" }); i  
invokeAction({ action: "get", id: "2" });