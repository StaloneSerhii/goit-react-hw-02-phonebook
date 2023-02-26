import React from 'react';

export const Contact = ({ dataContact, onDelete }) => {
  return (
    <ul>
       <h2>Contacts</h2>
      {dataContact.map(data => (
        <li key={data.id}>
          {data.name}: {data.number}
          <button
            type="button"
            onClick={() => {
              onDelete(data.id);
            }}
          >X</button>
        </li>
      ))}
    </ul>
  );
};
