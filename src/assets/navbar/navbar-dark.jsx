import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faHeart,faCartPlus, faUser} from '@fortawesome/free-solid-svg-icons';



function Navbar() {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/pages">Pages</Link></li>
            </ul>
        </nav>

        
<div className='ikon-login'>
     Login/Register <FontAwesomeIcon icon={faUser}/>
     </div>

<div className='ikon-bir'>    
<FontAwesomeIcon icon={faMagnifyingGlass} />
        

</div>

<div className='ikon-iki'>
<FontAwesomeIcon icon={faCartPlus} />
</div>

<div className='ikon-üc'>

<FontAwesomeIcon icon={faHeart} />

 </div>


        

        </>
    );
}

export default Navbar