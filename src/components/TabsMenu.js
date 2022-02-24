import styled from "styled-components";
import React from 'react';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import {devices} from './MediaQueries';
import "./TabTypes";
import Filter from "./Filter/Filter";
import PopUp from "./ModalPopUp";
import TabSearch from "./TabSearch";
import { useState } from "react";
import Dropdown from "./TabDropdown";

const Tabs = styled.button`
    cursor: pointer;
    outline: 0;
    margin: 0 1rem;
    background: none;
    border: none;
    font-size: var(--font-fourteen);
    color: var(--hover-color);
    
    :focus{
        color: var(--purple-color);
    }
    ${({ active }) =>
    active &&
    `
        color: var(--purple-color);
    `}
`;

const TabList = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    margin: .75rem auto;

    @media ${devices.tabletL}{
        width: 35%;
    }
`  

let ellipsis = <IoEllipsisHorizontalSharp style={{height: "1.5rem", width: "1.5rem"}}/>

export default function TabMenu () {
    const [displaySearch, setDisplaySearch] = useState(false)
    const [displayFilter, setDisplayFilter] = useState(false)
    const [displayPopUp, setDisplayPopUp] = useState(false)
    const [displayDropdown, setDisplayDropdown] = useState(false)

    return(
        <div>
            <TabList>
                <Tabs onClick={() => {setDisplaySearch(!displaySearch)}}>Search</Tabs>
                <Tabs onClick={() => {setDisplayFilter(!displayFilter)}}>Filter</Tabs>
                <Tabs onClick={() => {setDisplayPopUp(!displayPopUp)}}>Submit</Tabs>
                <Tabs onClick={() => {setDisplayDropdown(!displayDropdown)}}>{ellipsis}</Tabs>
            </TabList>

            {displaySearch && <TabSearch onBlur={() => {setDisplaySearch(!displaySearch)}}/>}
            {displayFilter && <Filter onClick={() => {setDisplayFilter(!displayFilter)}}/>}
            {displayPopUp && <PopUp onClick ={() => {setDisplaySearch(!displaySearch)}} onClose={() => setDisplayPopUp(!displayPopUp)}/>}
            {displaySearch && <Dropdown onClick={() => {setDisplayDropdown(!displayDropdown)}}/>}
            
        </div>
    );
}
