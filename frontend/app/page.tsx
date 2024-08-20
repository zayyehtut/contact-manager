import AddContactForm from "../components/AddContactForm";
import ContactList from "../components/ContactList";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Manager</h1>
      <AddContactForm />
      <ContactList />
    </main>
  );
}
