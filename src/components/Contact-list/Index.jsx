import React, { useState } from "react";
import Input from "./Input";
import Table from "./Table";


function Contact() {
    const [contacts, setContacts] = useState([]);

    const getContact = (value) => {
        setContacts([].concat(contacts, value));
    }
    return (
        <div>
            <Input getContact={getContact} />
            <Table contacts={contacts} />
        </div>
    )
}


export default Contact;