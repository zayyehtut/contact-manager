# Contact Manager Application

This project is a Contact Manager application built as part of a comprehensive full-stack engineering course. It demonstrates the use of linked lists and the two-pointer technique in both frontend and backend development.

## Tech Stack

- Frontend: Next.js 14 with App Router and ShadCN
- Backend: Node.js with Express
- Language: TypeScript

## Project Structure

```
contact-manager/
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/
│   │       └── contacts.ts
│   ├── components/
│   │   ├── ContactList.tsx
│   │   ├── ContactItem.tsx
│   │   └── AddContactForm.tsx
│   ├── lib/
│   │   └── api.ts
│   ├── types/
│   │   └── contact.ts
│   ├── package.json
│   └── tsconfig.json
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   │   └── contacts.ts
│   │   ├── controllers/
│   │   │   └── contactController.ts
│   │   └── models/
│   │       └── ContactList.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Features

- Add new contacts
- View list of contacts
- Find middle contact using two-pointer technique
- Responsive design using ShadCN components

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/zayyehtut/contact-manager.git
   cd contact-manager
   ```

2. Install frontend dependencies:

   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

## Running the Application

1. Start the backend server:

   ```
   cd backend
   npm run dev
   ```

   The server will start on http://localhost:3001

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```
   The frontend will be available at http://localhost:3000

## Usage

- To add a new contact, fill in the name and email fields and click "Add Contact"
- To find the middle contact, click the "Find Middle Contact" button
- Contacts are displayed in a list below the form

## Learning Outcomes

This project demonstrates:

- Implementation of a singly linked list data structure
- Use of the two-pointer technique to find the middle element of a linked list
- Integration of frontend (Next.js) with backend (Express) using RESTful API
- Use of React hooks for state management
- Styling with ShadCN components and Tailwind CSS
- TypeScript type safety and best practices

## Next Steps

- Implement contact deletion and updating
- Add user authentication
- Persist data using a database
- Implement additional linked list operations (e.g., reversing the list, detecting cycles)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
