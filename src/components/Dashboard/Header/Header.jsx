import React from 'react';

function Header({ firstName }) {
  return (
    <section className='dashboard-greeting'>
      <h1 className='text-greeting'>Bonjour <span>{firstName}</span></h1>
      <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
      </section>
  );
}

export default Header;