import styled from "styled-components";import React, { useState } from 'react';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import {devices} from './MediaQueries';
import Button from "./Button";

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
    margin: 1rem auto;

    @media ${devices.tabletL}{
        width: 35%;
    }
`;

const TabContent =styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
`

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;

`;

const Ul = styled.ul`
    display: table;
    margin-top: 1rem;
`;

const Li = styled.li`
    display: table;
    margin-top: 1rem;
`

const SearchInput = styled.div`
    display: flex;
`
const Search = styled.input`
    margin: 1.25rem 1.2rem;
    outline: none;
    padding: .75rem;
    border: 1px solid #dfdede;
    border-radius: 1.2rem;
    width: 85%;
    box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
    position: relative;
    font-size: var(--font-fourteen);
    color: var(--text-pri-color);

    &::placeholder{
        color: var(--text-sec-color);
    }
`;

const Submit = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 2;
    display: block;
    overflow-y: scroll;
    padding: 0 15px;
`

const SubmitModal = styled.div`
    margin: 45px auto 0 auto;
    width: 400px;
    padding: 30px;
    background-color: #fff;
    display: table;
    position: relative;
    border-radius: 3px;
`

const TabExampleText = () => <TabContent menu={{ text: true }} content={content} />
export default TabExampleText;

let ellipsis = <IoEllipsisHorizontalSharp style={{height: "1.5rem", width: "1.5rem"}}/>
const content =
[
    {
        tabItems: 'Search',
        render: () => <TabContent attached={false}>
            <SearchInput>
                <Search type="search" name="search" id="search" placeholder="Search for a site..." />
            </SearchInput>
        </TabContent>
    },
    {
        tabItems: 'Filter',
        render: () => <TabContent attached={false}>
            <Filter>
                <Ul>
                    <Li></Li>
                </Ul>
                <Ul>        
                    <Li></Li>
                </Ul>
            </Filter>
        </TabContent>
    },
    {
        tabItems: 'Submit',
        render: () => 
        <TabContent attached={false}>
            <SubmitModal>
                <h3>Be seen amongst the best</h3>
                <p>If you'd like to have your site (or any site) considered for 
                    placement in our gallery, please complete the form below.
                </p>
                <input type="search" name="search" id="search" placeholder="Site url" />
                <input type="search" name="search" id="search" placeholder="Your email address" />
                <label>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <h4>Subscribe to our newsletter</h4>
                </label>
                <Button>Submit</Button>
            </SubmitModal>
        </TabContent>
    },
    {
        tabItems: 'Ellipsis',
        render: () => <TabContent attached={false}>
            
        </TabContent>
    }
]



