import React, { Fragment, useContext} from 'react'
import ContactContext from '../../context/contact/contactContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
const Contacts = () => {
    const contactContext = useContext(ContactContext); // now we have access to state and actions from Context

    const { contacts, filtered} = contactContext;

    return (
        <Fragment>
            <TransitionGroup>
                { filtered !== null
                    ? filtered.map(contact => (
                        <CSSTransition key ={contact.id} timeout = {500} classNames = "item">
                            <ContactItem  contact={contact}/>
                        </CSSTransition>
                    ))
                    : contacts.map(contact => (
                        <CSSTransition key ={contact.id} timeout = {500} classNames = "item">
                            <ContactItem contact={contact}/>
                        </CSSTransition>
                ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts;
