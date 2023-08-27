import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./contacts.css"

function Contacts({ contacts }) {

    const [isWideScreen, setIsWideScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 768); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize the state based on initial window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className="contactsContainer">
                <h1>Contact List</h1>
                <table class="table table-striped">
                    {isWideScreen == true ?
                        <>
                            <thead>
                                <tr class="pl-3">
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead><tbody>
                                {contacts.map(contact => (
                                    <tr key={contact.id}>
                                        <td scope="row"><Link to={`/${contact.id}`} className="linkContact">{contact.name}</Link></td>
                                        <td><a href={`mailto:${contact.email}`} className="linkContact">{contact.email}</a></td>
                                        <td><a href={`tel:${contact.phone}`} className="linkContact">{contact.phone}</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                        : <>
                            <thead>
                                <tr class="pl-3">
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead><tbody>
                                {contacts.map(contact => (
                                    <tr key={contact.id}>
                                        <td scope="row"><Link to={`/${contact.id}`} className="linkContact">{contact.name}</Link></td>
                                        <td><a href={`tel:${contact.phone}`} className="linkContact">{contact.phone}</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </>}
                </table>
            </div>

        </>
    );
}

export default Contacts