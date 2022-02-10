import styled from "styled-components";
import Button from "./Button";
import { devices } from "./MediaQueries";
import { useDisclosure } from "@chakra-ui/core";
import React from "react";
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//   } from "@chakra-ui/core";

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

export default function PopUp () {
    return(
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
    )
}


// function InitialFocus() {
//     const { isOpen, onOpen, onClose } = useDisclosure();
  
//     const initialRef = React.useRef();
//     const finalRef = React.useRef();
  
//     return (
//       <>
//         <Button onClick={onOpen}>Open Modal</Button>
  
//         <Modal
//           initialFocusRef={initialRef}
//           finalFocusRef={finalRef}
//           isOpen={isOpen}
//           onClose={onClose}
//         >
//           <ModalOverlay />
//           <ModalContent>
//           <ModalHead>Be seen amongst the best</ModalHead>
//             <ModalCloseButton />
//             <ModalBody pb={6}>
//                 <ModalInput type="search" name="search" id="search" placeholder="Site url" />
//                 <ModalInput type="search" name="search" id="search" placeholder="Your email address" />
//                 <Label>
//                     <input type="checkbox" name="checkbox" id="checkbox" />
//                     <h4>Subscribe to our newsletter</h4>
//                 </Label>
//             </ModalBody>
  
//             <ModalFooter>
//               <Button mr={3}>
//                 Submit
//               </Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     );
//   }