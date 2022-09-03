import React, { useEffect, useState } from 'react'
import Card_Catagory_page from './card/category'
import "./mainPage.css"
import {motion} from "framer-motion";
import {Catagory_Create_Context} from "../../context-api/catagory-context";
import { useContext } from 'react';

import AllData from "../../data/data.json"


function Main_catagory_page() {
  const [dataUse,setdataUse]=useState(false);
  const CatagoryContext=useContext(Catagory_Create_Context);
  
  useEffect(()=>{
    let dataWillUse=AllData.filter((data)=>(data.category==CatagoryContext.catagory));
    setdataUse(dataWillUse)
  },[CatagoryContext.catagory])


  return (

    <motion.div className='main-all-catagory'  initial={{x:"-100vh"}} animate={{x:0}} transition={{duration:.5}}>

      {dataUse!==false? dataUse.map((a,i)=>( <Card_Catagory_page key={i} dataCard={a}/>)):<></>}
    </motion.div>
  )
}

export default  Main_catagory_page