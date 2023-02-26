import React from 'react';
import shortid from 'shortid';

export const Contact = ({ dataContact }) => {
  return (
    <ul>
       <h2>Contacts</h2>
      {dataContact.map(data => (
        <li id={shortid.generate()}>
          {data.name}: {data.number}
          <button type='click'>X</button>
        </li>
      ))}
    </ul>
  );
};
