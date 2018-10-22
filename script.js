"use strict";

//  listens for 'add' button and sends input values to address book
document.querySelector('button').addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  console.log(inputs[0].value, inputs[1].value)
  book.add(new Contact(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value))
});



class AddressBook {
    constructor() {
      this.contacts = [
        new Contact("bob", "bob@bob.com", "111", "weird neighbor"),
        new Contact("steve", "steve@steve.com", "111", "that uncle"),
        new Contact("merle", "merle@haggard.com", "888", "dad"),
        new Contact("sally", "sally@sally.com", "111", "the mom")
      ];
    }
    add(info) {
      
      this.contacts.push(info);
      this.display();
    }
    deleteAt(index) {
      // this.contacts.splice(index, 1);
    }
    display() {
          console.log(this.contacts.length);
            for(var i = 0; i < this.contacts.length; i++) {
            console.log(i);
            const container = document.querySelectorAll(".id-card")[i];
            container.style.display = "inline-flex";
            container.innerHTML = "";
            const p = document.createElement("p");
            p.innerText = `Name: ${this.contacts[i].name}\n\nEmail: ${this.contacts[i].email}\n\nPhone: ${this.contacts[i].phone}\n\nRelation: ${this.contacts[i].relation}`;
            container.appendChild(p);
          } 
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
book.display();


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