import React from 'react'
import {BsGrid1X2Fill, BsFillArchiveFill, BsListCheck, BsFillGearFill} from 'react-icons/bs'
import { MdOutlineCoronavirus } from "react-icons/md";
import { AiFillMedicineBox } from "react-icons/ai";
import { VscCompassActive } from "react-icons/vsc";



function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}> 
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <MdOutlineCoronavirus  className='icon_header'/> Covid-19
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=""><BsGrid1X2Fill className='icon'/> Dashboard</a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""><BsFillArchiveFill className='icon'/> Total Cases</a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""><VscCompassActive className='icon'/> Active Cases</a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""><AiFillMedicineBox className='icon'/> Recovered</a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""><BsListCheck className='icon'/> Total Death</a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""><BsFillGearFill className='icon'/> Setting</a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
