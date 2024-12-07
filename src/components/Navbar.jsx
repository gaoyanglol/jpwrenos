import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleOpenMenu = () => {

        setOpenMenu(!openMenu);
    }

    return (
        <nav className="w-full mx-auto md:px-8 h-28 border-b border-b-primary md:border-b-0 flex justify-end items-center absolute z-10 bg-neutral-800 md:bg-transparent">
            <h1 className="font-logo text-2xl mr-auto ml-4 md:ml-0 text-white -z-20">JPW</h1>
            <ul className="hidden md:flex px-4 gap-3 mr-4 *:px-2 *:text-sm *:font-light *:text-white *:transition-all *:duration-300 *:ease-ease">
                <li className=" hover:text-secondary ">
                    <a href="/" className="inline-block leading-10">HOME</a>
                </li>
                <li className=" hover:text-secondary ">
                    <a href="#services" className="inline-block leading-10">SERVICES</a>
                </li>
                <li className=" hover:text-secondary ">
                    <a href="#projects" className="inline-block leading-10">PROJECTS</a>
                </li>
                <li className=" hover:text-secondary ">
                    <a href="#contact" className="inline-block leading-10">CONTACT</a>
                </li>
            </ul>

            <ul className={`absolute animate-fade-in top-0 -z-10 pt-20 w-full h-screen flex-col gap-6 items-center bg-neutral-800 *:text-lg *:font-light *:text-white *:transition-all *:duration-300 *:ease-ease ${openMenu ? 'flex' : 'hidden'}`}>
                <li className=" hover:text-secondary ">
                    <a href="/" onClick={handleOpenMenu} className="inline-block leading-10">HOME</a>
                </li>
                <li className=" hover:text-secondary ">
                    <a href="#services" onClick={handleOpenMenu} className="inline-block leading-10">SERVICES</a>
                </li>
                <li className=" hover:text-secondary ">
                    <a href="#projects" onClick={handleOpenMenu} className="inline-block leading-10">PROJECTS</a>
                </li>
                <li className=" hover:text-secondary ">
                    <a href="#contact" onClick={handleOpenMenu} className="inline-block leading-10">CONTACT</a>
                </li>
            </ul>

            <a
                href="tel:(705) 521-2300"
                className="px-4 py-2 text-sm font-light border border-white text-white hover:text-secondary hover:border-secondary transition-all duration-300 ease-ease -z-20"
            >
                CALL NOW
            </a>
            
            <div 
                onClick={handleOpenMenu} 
                className={`md:hidden group w-6 h-6 m-4 flex flex-col justify-between *:transition-all *:duration-300 *:ease-ease ${openMenu && 'open-menu'}`}
            >
                <span className="block bg-white rounded-full w-full h-0.5 group-[.open-menu]:translate-y-[11px] group-[.open-menu]:-rotate-45"></span>
                <span className="block bg-white rounded-full w-full h-0.5 group-[.open-menu]:opacity-0"></span>
                <span className="block bg-white rounded-full w-full h-0.5 group-[.open-menu]:-translate-y-[11px] group-[.open-menu]:rotate-45"></span>
            </div>

        </nav>
    )
}

export default Navbar;