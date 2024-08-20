import { Contact } from "@/types/contact";

const API_URL = "http://localhost:3001/api";

export async function getContacts(): Promise<Contact[]> {
  const response = await fetch(`${API_URL}/contacts`);
  return response.json();
}

export async function addContact(
  contact: Omit<Contact, "id">
): Promise<Contact> {
  const response = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return response.json();
}

export async function findMiddleContact(): Promise<Contact | null> {
  const response = await fetch(`${API_URL}/contacts/middle`);
  return response.json();
}
