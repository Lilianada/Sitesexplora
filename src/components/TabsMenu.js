//import styled from "styled-components";
import React from 'react';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
//import {devices} from './MediaQueries';
import "./TabTypes";
//import TabTypes from "./TabTypes";
import Filter from "./Filter/Filter";
import PopUp from "./ModalPopUp";
import TabSearch from "./TabSearch";
import Tab from "./Menu"

// const Tabs = styled.button`
//     cursor: pointer;
//     outline: 0;
//     margin: 0 1rem;
//     background: none;
//     border: none;
//     font-size: var(--font-fourteen);
//     color: var(--hover-color);
    

//     ${({ active }) =>
//     active &&
//     `
//         color: var(--purple-color);
//     `}
// `;

// const TabList = styled.div`
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     width: 70%;
//     margin: .75rem auto;

//     @media ${devices.tabletL}{
//         width: 35%;
//     }
// `;  

// const Tab = styled.div`
//  display: flex;
// `

const tabContent = [
    {
        tab: 'Search',
        render: () =>   <TabSearch />
    },
    { 
        tabs: 'Filter', 
        render: () => <Filter />
    },
    {
        tabs: 'Submit', 
        render: () => <PopUp />
    } 
]
let ellipsis = <IoEllipsisHorizontalSharp style={{height: "1.5rem", width: "1.5rem"}}/>
const types = ['Search', 'Filter', 'Submit']


export default function TabMenu () {

    return(
        <div>
            <Tab active={1}>
                {tabContent.map((tab, idx) =>(
                    <Tab.TabPane key={`tab.${idx}`} tab={tab.title}>
                        {Tab}
                    </Tab.TabPane>
                ))}
            </Tab>

        </div>
    );

}

   
// export default function TabMenu () {
//     const [active, setActive] = useState('');
//     
//     return(
//         <div>
//             <TabList>
//                 {types.map(type => (
//                     <Tabs
//                         key= {type}
//                         active= {active === type}
//                         onClick={() => setActive(type)}
//                     >
//                         {type}
//                     </Tabs>
//                 ))}
//             </TabList>

//             <PopUp />
            
//             <SearchInput>
//                 <Search type="search" name="search" id="search" placeholder="Search for a site..." />
//             </SearchInput>
                
//             <Filter />
//         </div>
//     );
