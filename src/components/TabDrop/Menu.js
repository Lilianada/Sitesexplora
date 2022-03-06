import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

//import { Children } from "react";

const Tabs = styled.button`
    cursor: pointer;
    outline: 0;
    margin: 0 1rem;
    background: none;
    border: none;
    font-size: var(--font-fourteen);
    color: var(--hover-color);
    

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

    @media screen and (min-width: 900px){
        width: 35%;
    }
`;  


const Tab = ({Children, active = 0}) => {
    const [activeTab, setActiveTab] = useState(active);
    const [tabData, setTabData] = useState([]);

    useEffect (() => {
        let data = []
         
        React.Children.forEach(Children, element =>{
            if( React.isValidElement(element)) return

            const {
                props: { tab, children }
            } = element;
            data.push({tab, children})
        })

        setTabData(data);
    }, [Children])

    return(
        <div>
            <TabList>
                {
                    tabData.map(({tab}, idx) => (
                        <Tabs
                            key= {tab}
                            {...idx === activeTab ? "active" : ""}
                            onClick={() => setActiveTab(idx)}
                        >
                            {tab}
                        </Tabs> 
                    ))
                }
            </TabList>

        </div>
    )
}
export default Tab;