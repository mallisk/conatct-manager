
import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // const contacts = [
  //   {id:"1" , name:"Mallik", email:"malli@gmail.com"},
  //   {id:"2" , name:"Arjun", email:"Arjun@gmail.com"},
  // ]

  const[contacts, setConatcts] = useState([])
  const addContactHandler = (contact) =>{
    setConatcts([...contacts,contact])
  }
  return (
    
    <div className='ui container'>
    <Header></Header>
    <AddContact addContactHandler={addContactHandler}></AddContact>
    <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
