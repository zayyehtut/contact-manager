import { Request, Response } from "express";
import ContactList from "../models/ContactList";

const contactList = new ContactList();

export function getAllContacts(req: Request, res: Response) {
  res.json(contactList.toArray());
}

export function addContact(req: Request, res: Response) {
  const { name, email } = req.body;
  const newContact = contactList.add(name, email);
  res.status(201).json(newContact);
}

export function findMiddleContact(req: Request, res: Response) {
  const middleContact = contactList.findMiddle();
  if (middleContact) {
    res.json(middleContact);
  } else {
    res.status(404).json({ message: "No contacts found" });
  }
}
