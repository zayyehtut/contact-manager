"use client";

import { useEffect, useState } from "react";
import { getContacts, findMiddleContact } from "@/lib/api";
import ContactItem from "./ContactItem";
import { Button } from "@/components/ui/button";
import { Contact } from "@/types/contact";

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [middleContact, setMiddleContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const fetchedContacts = await getContacts();
    setContacts(fetchedContacts);
  };

  const handleFindMiddle = async () => {
    const middle = await findMiddleContact();
    setMiddleContact(middle);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
      <Button onClick={handleFindMiddle} className="mb-4">
        Find Middle Contact
      </Button>
      {middleContact && (
        <div className="mb-4 p-4 bg-yellow-100 rounded">
          <h3 className="font-bold">Middle Contact:</h3>
          <ContactItem contact={middleContact} />
        </div>
      )}
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
