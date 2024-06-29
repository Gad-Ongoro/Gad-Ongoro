import React, { useEffect, useState } from 'react';
import apiUrl from '../api';

function Admin() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/contacts/`)
    .then(res => res.json())
    .then(data => setMessageList(data))

  }, [])

  function handleDelete(id) {
    fetch(`${apiUrl}/contacts/${id}/`, {
      method: 'DELETE',
      headers: {
				'Content-Type': 'application/json',
			}
    })
    .then(res => res.json())
    .then(data => {
      window.location.reload();
      console.log(data)
    }
    )
  }

  const messages = messageList.map(msg => {
    return(
      <div key={msg.id} className='border rounded-lg p-2'>
        <p className=''>Name: {msg.name}</p>
        <p>Message: {msg.message}</p>
        <button type='button' onClick={()=> handleDelete(msg.id)} className='p-1 bg-red-500 text-white font-bold border rounded-lg'>Delete</button>
      </div>
    )
  })

  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-3 justify-center'>
        {messages}
      </div>
    </div>
  )
}

export default Admin;