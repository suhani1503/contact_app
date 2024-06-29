import React from 'react';
import ContactCard from './ContactCard';
//import { render } from 'react-dom';

const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map((contact) => {
        return(
           <ContactCard contact={contact}>   </ContactCard> 
        );
      });

    return <div className="ui called list">{renderContactList}</div>
   };

export default ContactList;