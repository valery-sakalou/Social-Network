import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img className='logo' src='https://cdn1.truelancer.com/upload-full/984522-6a26c28a68ac5cb7091da4a72a4416785f0abd05.jpg' />
    </header>
}

export default Header;