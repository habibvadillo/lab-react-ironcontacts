import React, { useState } from "react";
import "./App.css";
import Contacts from "./contacts.json";
function App() {
  const [contactsState, updateContactsState] = useState(Contacts.slice(0, 5));

  const addRandomContact = () => {
    let newContactState = [...contactsState];
    while (newContactState.length === contactsState.length) {
      let randomIndex = Math.floor(Math.random() * Contacts.length);
      if (!contactsState.includes(Contacts[randomIndex])) {
        newContactState.push(Contacts[randomIndex]);
      }
    }
    updateContactsState(newContactState);
  };

  const sortByName = () => {
    let newContactState = [...contactsState];
    newContactState.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    updateContactsState(newContactState);
  };

  const sortByPop = () => {
    let newContactState = [...contactsState];
    newContactState.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    updateContactsState(newContactState);
  };

  const deleteContact = (index) => {
    let newContactState = contactsState.filter((c, i) => {
      return i !== index;
    });

    updateContactsState(newContactState);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <div className="buttons">
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPop}>Sort by popularity</button>
      </div>
      <ul className="list">
        <li>
          <strong>Picture</strong>
          <strong>Name</strong>
          <strong>Popularity</strong>
          <strong>Action</strong>
        </li>
        {contactsState.map((contact, i) => {
          return (
            <li key={contact.id}>
              <img width="50px" src={contact.pictureUrl} />
              <p>{contact.name}</p>
              <p>{contact.popularity.toFixed(2)}</p>
              <button onClick={() => deleteContact(i)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
