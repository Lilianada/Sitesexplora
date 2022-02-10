import styled from "styled-components";


const SearchInput = styled.form`
    display: block;
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
    display: block;
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
    


export default function TabSearch ({onBlur}) {
    return(
        <SearchInput>
            <Search type="search" name="search" id="search" placeholder="Search for a site..." onBlur={() => onBlur()} />
        </SearchInput>
    );
}