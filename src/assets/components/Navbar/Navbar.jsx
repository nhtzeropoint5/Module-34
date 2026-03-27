import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';




const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
    url: "https://example.com/"
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    url: "https://example.com/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
    url: "https://example.com/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
    url: "https://example.com/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    url: "https://example.com/contact"
  }
];

const Navbar = () => {

    const links =  navLinks.map(link => <li className='mx-1.5 hover:bg-amber-400 '><a href={link.url}>{link.name}</a></li>);


    const [togle, setTogle] = useState(false);

    function handleTogle(){
        setTogle(!togle);
    }


    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={() =>{handleTogle(togle)}}>
            {
                togle ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
            }
            <ul className={`md:hidden absolute duration-1000 bg-amber-200 ${togle ? 'top-8' : '-top-40'}`}>
            {links}
            </ul>
             <h3>My Navbar</h3>
            </span>
           
            <ul  className='md:flex hidden'>
                {
                   links
                }
            </ul>
        {/* <li className='m-1.5'><a href="/home">Home</a></li>
        <li className='m-1.5'><a href="/about">About</a></li>
        <li className='m-1.5'><a href="//blog">Blog</a></li> */}
            
        </nav>
    );
};

export default Navbar;