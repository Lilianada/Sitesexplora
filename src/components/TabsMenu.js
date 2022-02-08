import styled from "styled-components";
import React, { useState } from 'react';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import {devices} from './MediaQueries';
import Button from "./Button";
import FilterColor from './FilterColor'

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


const TabLet = styled.div`
    

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
`;

const SearchInput = styled.form`
    display: none;
    position: absolute;
    width: 260px;
    background-color: var(--white-color);
    height: 41px;
    left: 0;
    right: 0;
    margin: -61px auto 0 auto;
    border-bottom: 1px solid #ddd;
    padding: 8px 16px 0 16px;
`
const Search = styled.input`
    display: none;
    outline: none;
    border: none;
    height: 30px;
    font-size: 13px;
    background: transparent;
    text-align: left;
    width: 100%;
    //text-indent: 10px;
    color: var(--black-color);

    &::placeholder{
        color: var(--grey-color);
    }
    `;
    
const ModalWrapper =styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 2;
    overflow-y: scroll;
    padding: 0 15px;
`

const SubmitModal = styled.div`
    display: none;
    background-color: var(--white-color);
    margin: 45px auto 0 auto;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 3px;
    
    @media ${devices.tabletL} {
        width: 400px;
    } 
    `
    const ModalHead = styled.h2`
    text-align: center;
    font-weight: 600;
`

const ModalText = styled.p`
    font-size: 16px;
    text-align: left;
    padding-top: 10px;
    max-width: 450px;
    margin: 0 auto;
`

const ModalInput = styled.input`
    font-size: 13px;
    width: 100%;
    display: block;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ddd;
    padding: 10px 45px 10px 15px;
    border-radius: 3px;
`
const Label = styled.label`
    display: inline-flex;
`
    

    
    let ellipsis = <IoEllipsisHorizontalSharp style={{height: "1.5rem", width: "1.5rem"}}/>

const content =
[
    {
        tabItems: 'Search',
        render:
            <SearchInput>
                <Search type="search" name="search" id="search" placeholder="Search for a site..." />
            </SearchInput>

    },
    {
        tabItems: 'Filter',
        render: 
            <Filter>
                <Ul>
                    <Li></Li>
                </Ul>
                <Ul>        
                    <Li></Li>
                </Ul>
            </Filter>

    },
    {
        tabItems: 'Submit',
        render: 
            <ModalWrapper>
                <SubmitModal>
                    <ModalHead>Be seen amongst the best</ModalHead>
                    <ModalText>If you'd like to have your site (or any site) considered for 
                        ModalTextlacement in our gallery, please complete the form below.
                    </ModalText>
                    <ModalInput type="search" name="search" id="search" placeholder="Site url" />
                    <ModalInput type="search" name="search" id="search" placeholder="Your email address" />
                    <Label>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <h4>Subscribe to our newsletter</h4>
                    </Label>
                    <Button>Submit</Button>
                </SubmitModal>
            </ModalWrapper>
    },
    {
        tabItems: 'Ellipsis',
        render: "ggd"  
    }
]



const types = ['Search','Filter', 'Submit', ellipsis];

export default function TabMenu () {
    const [active, setActive] = useState('');
    const [display, setDisplay] = useState('')

    return(
        <div>
            <TabList>
                {types.map(type => (
                    <Tabs
                        key= {type}
                        active= {active === type === display}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </Tabs>
                ))}
            </TabList>

            <ModalWrapper>
                <SubmitModal>
                    <ModalHead>Be seen amongst the best</ModalHead>
                    <ModalText>If you'd like to have your site (or any site) considered for 
                        ModalTextlacement in our gallery, please complete the form below.
                    </ModalText>
                    <ModalInput type="search" name="search" id="search" placeholder="Site url" />
                    <ModalInput type="search" name="search" id="search" placeholder="Your email address" />
                    <Label>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <h4>Subscribe to our newsletter</h4>
                    </Label>
                    <Button>Submit</Button>
                </SubmitModal>
            </ModalWrapper>
            
            <SearchInput>
                <Search type="search" name="search" id="search" placeholder="Search for a site..." />
            </SearchInput>

            <Filter>
                {FilterColor.map(tags => (
                    <Ul
                        key={id}
                        active= {display === tags}
                    >
                        <Li>
                            {tags.tabName}
                        </Li>
                    </Ul>
                ))}
                    <Ul>        
                        <Li></Li>
                    </Ul>
            </Filter>
        </div>
    );

}

   