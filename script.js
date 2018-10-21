"use strict";




class AddressBook {
    constructor() {
      this.contacts = [
        new Contact("bob", "bob@bob.com", "111", "weird neighbor"),
        new Contact("steve", "steve@steve.com", "111", "that uncle"),
        new Contact("sally", "sally@sally.com", "111", "the mom")
      ];
    }
    add(info) {
      this.contacts.push(info);
    }
    deleteAt(index) {
      this.contacts.splice(index, 1);
    }
    get() {
        // for (let contact of this.contacts) {
          console.log(this.contacts[1].name, this.contacts[1].email, this.contacts[1].phone, this.contacts[1].relation); //proper calling contacts ++ prints bob, bob@bob...
          // const container = document.querySelector(".id-card");
          // container.innerHTML = "";
          // const p = document.createElement("p");
          // p.innerText = `Name:  Email:  Phone:  Relation: `;
          // container.appendChild(p);
        // }
    }
};

class Contact {
    constructor(name, email, phone, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
};


const book = new AddressBook();
book.get();
// const display = (contact) => {
//     const container = document.querySelector(".id-card");
//     container.innerHTML = "";
//     const p = document.createElement("p");
//     p.innerText = `Name: ${book.contact[0].name} Email: ${book.contact[0].email} Phone: ${book.contact[0].phone} Relation: ${book.contact[0].relation}`;
//     container.appendChild(p);
    
//     // displayTotal(total);
// };

// get();


//                 ************************** ORIGINAL ADRESS BOOK *****************************

// class AddressBook {
//     constructor() {
//       this.contacts = [
//         new Contact("bob", "bob@bob.com", "111", "weird neighbor"),
//         new Contact("steve", "steve@steve.com", "111", "that uncle"),
//         new Contact("sally", "sally@sally.com", "111", "the mom")
//       ];
//     }
//     add(info) {
//       this.contacts.push(info);
//     }
//     deleteAt(index) {
//       this.contacts.splice(index, 1);
//     }
//     print() {
//       for (let contact of this.contacts) {
//         console.log(contact);
//       }
//     }
// };

// class Contact {
//     constructor(name, email, phone, relation) {
//       this.name = name;
//       this.email = email;
//       this.phone = phone;
//       this.relation = relation;
//     }
// };

// const book = new AddressBook();
// while (true) {
//     const choice = prompt("Would you like to Add, Remove, Print, or Quit?");
//     if (choice === "Add") {
//       const name = prompt("Enter name: ");
//       const phone = prompt("Enter phone: ");
//       const email = prompt("Enter email: ");
//       const relation = prompt("Enter relation: ");
//       book.add(new Contact(name, email, phone, relation));
//     } else if (choice === "Remove") {
//       const index = prompt("Enter an index to delete by.");
//       book.deleteAt(index);
//     } else if (choice === "Print") {
//       book.print();
//     } else if (choice === "Quit") {
//       break;
//     }
// };