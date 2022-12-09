import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import React from 'react';


export const NavbarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
    },
    {
        title: 'Alunos',
        path: '/alunos',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text',
    },
    {
        title: 'Alunos Prospectados',
        path: '/alunos_prospectados',
        icon: <FaIcons.FaUserTie/>,
        cName: 'nav-text',
    },
    {
        title: 'Professores',
        path: '/professores',
        icon: <HiIcons.HiOutlineUserGroup/>,
        cName: 'nav-text',
    },
    {
        title: 'Cursos',
        path: '/cursos',
        icon: <HiIcons.HiDocumentReport/>,
        cName: 'nav-text',
    },
    {
        title: 'Turmas',
        path: '/turmas',
        icon: <HiIcons.HiDocumentReport/>,
        cName: 'nav-text',
    },
]