import React from "react";
import {motion} from "framer-motion"



//import items section 
import "./navbar.css"
import NavbarIcon from "./navIcon";
import Navbarselect from "./navSelect";


const Navbar=()=>{


    return(
        <>
            <div className="Navbar-section">
                <Navbarselect/>
                <motion.div  initial="initial" animate="after" transition={{duration:1}} className="icon-serch-container">
                    <NavbarIcon/>
                </motion.div>
            </div>
        </>
    )
}

export default Navbar
