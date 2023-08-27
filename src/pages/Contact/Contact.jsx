import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'
import BackBtn from '../../Components/BackBtn/BackBtn';
import "./contact.css"

function Contact({ contacts }) {
    const { id } = useParams();
    const [showAddress, setShowAddress] = useState(false);
    const [showCompany, setShowCompany] = useState(false);
    const contact = contacts.filter(c => c.id == id)[0]


    const toggleAddress = () => {
        setShowAddress(!showAddress);
    };

    const toggleCompany = () => {
        setShowCompany(!showCompany)
    }

    return (
        <div className="contactContainer">
            {contact ?
                <>
                    <h1 className='mb-5'>Contact information for {contact.name}</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row" className="w-50" >Name</th>
                                <td className="w-50">{contact.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Username</th>
                                <td>{contact.username}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td><a href={`mailto:${contact.email}`} className="linkContact">{contact.email}</a></td>
                            </tr>
                            <tr>
                                <th scope="row">Phone number</th>
                                <td><a href={`tel:${contact.phone}`} className="linkContact">{contact.phone}</a></td>
                            </tr>
                            <tr>
                                <th scope="row">Website</th>
                                <td><a href={`${contact.website}`} className="linkContact">{contact.website}</a></td>
                            </tr>
                            <tr>
                                <th scope="row">City</th>

                                <td>
                                    {contact.address && contact.address.city}
                                    <span onClick={toggleAddress}>
                                        {showAddress ? <BsFillCaretUpFill className="right-align" /> : <BsFillCaretDownFill className="right-align" />}
                                    </span>
                                </td>
                            </tr>
                            {
                                (showAddress && (
                                    <>
                                        <tr>
                                            <th scope="row" >Suite</th>
                                            <td>{contact.address.suite}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Street</th>
                                            <td>{contact.address.street}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zipcode</th>
                                            <td>{contact.address.zipcode}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Latitude</th>
                                            <td>{contact.address.geo.lat}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Longitude</th>
                                            <td>{contact.address.geo.lng}</td>
                                        </tr>
                                    </>
                                ))
                            }
                            <tr>
                                <th scope="row">Company</th>
                                <td>{contact.company && contact.company.name}
                                    <span onClick={toggleCompany}>
                                        {showCompany ? <BsFillCaretUpFill className="right-align" /> : <BsFillCaretDownFill className="right-align" />}
                                    </span></td>
                            </tr>
                            {
                                (showCompany && (
                                    <>
                                        <tr>
                                            <th scope="row">Slogan</th>
                                            <td className="w-50">{contact.company.catchPhrase}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Services</th>
                                            <td className="w-50">{contact.company.bs}</td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </table>
                    <BackBtn className="backBtn" />

                </>
                : "Loading ..."}

        </div>
    );
}

export default Contact;