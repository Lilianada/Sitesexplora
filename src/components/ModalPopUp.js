import styled from "styled-components";
import Button from "./Button";
import { devices } from "./MediaQueries";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const ModalWrapper =styled.div`
    display: block;
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
    display: flex;
    background-color: var(--white-color);
    margin: 45px auto 0 auto;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 3px;
    
    @media ${devices.tablet} {
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
    padding-top: 1rem;
    max-width: 450px;
    margin: 0 auto 1rem;
`

const ModalInput = styled.input`
    font-size: 13px;
    width: 100%;
    display: block;
    margin-top: 10px;
    outline: none;
    border: 1px solid #ddd;
    padding: 10px 45px 10px 15px;
    border-radius: 3px;
    background: var(--white-color)
`
const Label = styled.label`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`

export default function PopUp () {
    const[isOpen, setIsOpen] = useState(false)
    
    return(

        <ModalWrapper >
            <AiOutlineClose onClick={() => setIsOpen(false)} style={{position: "absolute", right: "100px", top: "26px", color: "#fff", fontSize: "35px", cursor: "pointer"}} />
            
                <SubmitModal> 
                    <ModalHead>Be seen amongst the best</ModalHead>
                    <ModalText>If you'd like to have your site (or any site) considered for 
                        in our gallery, please complete the form below.
                    </ModalText>
                    <ModalInput type="search" name="search" id="search" placeholder="Site url" />
                    <ModalInput type="search" name="search" id="search" placeholder="Your email address" />
                    <Label>
                        <input type="checkbox" name="checkbox" id="checkbox" style={{marginRight: 5, outline: 'none'}}/>
                        <h4>Subscribe to our newsletter</h4>
                    </Label>
                    <Button>Submit</Button> 
                </SubmitModal>
            
            </ModalWrapper>
    )
}
