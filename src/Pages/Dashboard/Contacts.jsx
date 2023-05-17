import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { Footer } from './Footer';

export const Contacts = () => {
  const [showForm, setshowForm] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();


  const toggleForm = () => {
    setshowForm(!showForm);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddContact = () => {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
    };

    setContacts([...contacts, newContact]);
    setName('');
    setPhoneNumber('');
    // setShowForm(false); // Hide the form after saving the contact
  };

  const handleBackButton = () => {
    navigate(-1); // Go back to the previous route
  };

  return (
    <div className='mt-6 px-6'>
      <Button title='Back' btnstyles='hover:text-button' onclick={handleBackButton} />
      <div className="h-screen flex flex-col gap-6 justify-center items-center">
        {showForm ? <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-paragraph w-2/3 rounded-lg py-10'>
            <div className='flex flex-col gap-6 w-full px-5 md:px-10'>
              <div>Add New contact</div>
              <input className='p-4 border-2 border-primary text-primary rounded-lg'
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <input className='p-4 border-2 border-primary text-primary rounded-lg'
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <Button title="Save" btnstyles="py-3 bg-button font-semibold rounded-lg hover:bg-transparent border-2 border-button mt-4" onClick={handleAddContact}
              />
              <Button
                title="Cancel"
                btnstyles="py-3 bg-button font-semibold rounded-lg border-2 border-button mt-4"
                onClick={() => { console.log(showForm) }}
              />
            </div>
          </div>
        </div>
          : <div>
            <div className='text-3xl'>No Emergency contacts</div>
            <div>
              <Button title='+' btnstyles='hover:text-button hover:bg-white border text-center py-3 px-6 rounded-full text-4xl' onclick={toggleForm} />
            </div>
          </div>}
      </div>
      <Footer />
    </div>
  )
}
