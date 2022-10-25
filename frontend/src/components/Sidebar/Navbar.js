import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import { IconContext } from 'react-icons';


const Navbar = () => {
    return (
        <>
            <IconContext.Provider value={({ color: '#A0522D' })}>
                <nav className='nav-menu'>
                    <ul className='nav-menu-items'>
                        <li className='navbar-title'>
                            <span className='name-project'>Gerenciamento de Alunos</span>
                        </li>
                        
                        {NavbarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}


export default Navbar

