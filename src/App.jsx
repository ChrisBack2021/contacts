import "./App.css";
import Contacts from "./pages/Contacts/Contacts"
import Contact from "./pages/Contact/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";

function App() {

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();
        setContacts(json);
        setSearch(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContacts();
  }, [])

  

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contacts contacts={contacts} />} />
          <Route path="/:id" element={<Contact contacts={contacts} />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;