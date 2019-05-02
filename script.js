class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [new Contact("Snoopy", "Snoopy@cooldog.com", "111-222-3333", "my dog"),
        new Contact("Porkchop", "Porkchop@cooldog.com", "333-444-5555", "a dog")
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, 
            Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
        }
    }
}

const book = new AddressBook();

while (true) {
    let choice = prompt("Add, Delete, Print, or Quit?");
    if (choice === "Quit") {
        console.log("Goodbye");
        break;
    } else if (choice === "Print") {
        book.print();
    } else if (choice === "Delete") {
        book.deleteAt(prompt("Index to delete?"));
    } else if (choice === "Add") {
        book.add(new Contact(
            prompt("Enter a name."),
            prompt("Enter an email."),
            prompt("Enter a phone number."),
            prompt("Enter a relation.")
        ));
    }
}

// --------------------> COMMENTS PER LINE <---------------------------------------

// // creates a class named contact
// class Contact {
//     // creates constructor with these 4 properties
//     constructor(name, email, phone, relation) {   
//         this.name = name;  
//         this.email = email;  
//         this.phone = phone;  
//         this.relation = relation;
//     }
// }
// // creates class addressbook
// class AddressBook {
// //    creates class constructor with no defined properites
//     constructor() {
// //    creates 2 this.contacts index objects
//         this.contacts = [new Contact("Snoopy", "Snoopy@cooldog.com", "111-222-3333", "my dog"),
//         new Contact("Porkchop", "Porkchop@cooldog.com", "333-444-5555", "a dog")
//         ];
//     }
//     // method called add that adds
//     add(info) {
//     // uses .push to add info to this.contacts object  
//         this.contacts.push(info);
//     }
//     // method called deleteAt
//     deleteAt(index) {
//     // uses .splice to delete 1 index by number
//         this.contacts.splice(index, 1);
//     }
//     // method to print
//     print() {
//     // for loop to scan through list of this.contacts
//         for (let i = 0; i < this.contacts.length; i++) {
//         //  console logs all 4 properties in each index
//             console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, 
//             Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
//         }
//     }
// }
// // defines variable book to have properties of new addressbook
// const book = new AddressBook();
// // starts and continues while loop for prompts
// while (true) {
//     // prompts with 4 options
//     let choice = prompt("Add, Delete, Print, or Quit?");
//     // if statement to follow quit option logic
//     if (choice === "Quit") {
//     // consloe logs goodbye if quite typed in
//         console.log("Goodbye");
//     // stops loop if quit is typed
//         break;
//     // begins else if for choice Print
//     } else if (choice === "Print") {
//     // prints const book via print method to console log
//         book.print();
//     // begins else if loop for choice Delete
//     } else if (choice === "Delete") {
//     // calls deletAT method to remove index entry with prompt asking which index
//         book.deleteAt(prompt("Index to delete?"));
//     //  begins else if loop for choice Add
//     } else if (choice === "Add") {
//     // calls .add methos to add a new contact
//         book.add(new Contact(
//     //  series of prompts to input name, email, phone number, relation values
//             prompt("Enter a name."),
//             prompt("Enter an email."),
//             prompt("Enter a phone number."),
//             prompt("Enter a relation")
//         ));
//     }
// }