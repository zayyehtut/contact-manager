import { Contact } from "@/types/contact";
import { Card, CardContent } from "@/components/ui/card";

interface ContactItemProps {
  contact: Contact;
}

export default function ContactItem({ contact }: ContactItemProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold">{contact.name}</h3>
        <p className="text-sm text-gray-600">{contact.email}</p>
      </CardContent>
    </Card>
  );
}
