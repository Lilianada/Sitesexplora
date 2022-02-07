import styled from "styled-components";

const Button = styled.button`
    background: var(--button-color);
    border: none;
    border-radius: 3px;
    color: var(--white-color);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--fontTwo);
    margin: 1rem;
    padding: .9rem;
    cursor: pointer;
    width: ${props => props.theme.main};

    :hover{
        background: var(--hover-color); 
        width: ${props => props.hover ? "#2f3032" : "#212121"};
    }
`
export default Button;

Button.defaultProps = {
    theme: {
      main: "100px"
    }
}
  
 