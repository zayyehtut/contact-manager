interface Contact {
  id: number;
  name: string;
  email: string;
}

class Node {
  data: Contact;
  next: Node | null;

  constructor(data: Contact) {
    this.data = data;
    this.next = null;
  }
}

export default class ContactList {
  private head: Node | null;
  private tail: Node | null;
  private length: number;
  private idCounter: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.idCounter = 1;
  }

  add(name: string, email: string): Contact {
    const newContact: Contact = { id: this.idCounter++, name, email };
    const newNode = new Node(newContact);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return newContact;
  }

  findMiddle(): Contact | null {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next.next;
    }

    return slow.data;
  }

  toArray(): Contact[] {
    const contacts: Contact[] = [];
    let current = this.head;
    while (current) {
      contacts.push(current.data);
      current = current.next;
    }
    return contacts;
  }
}
