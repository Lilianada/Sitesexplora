import styled from "styled-components"
import FilterColor from "./FilterColor";
import FilterTag from "./FilterTag";

const FilterContent = styled.section`
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    margin: .5rem; 
    border: 1px solid var(--grey-color);
    border-radius: 3px;
`

const FilterTags = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: .5rem
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Li = styled.li`
    display: table;
`;

const Pi = styled.p`
    //width: ${props => props.large ? "100px" : "70px"};
    line-height: 2rem;
    padding: 0 1rem;
    margin: .5rem;
    border: 1px solid var(--grey-color);
    border-radius: 3px;
`;


export default function Filter () {
    // const [display, setDisplay] = useState('');

    return(
        <FilterContent>

            <FilterTags>
                <Ul>
                    {FilterTag.map((tags, id) => (
                    <Li
                    key= {id}
                    active= {tags}
                    >
                        <Pi>{tags.tabName}</Pi>
                    </Li>
                    ))}
                </Ul>
            </FilterTags>
            <FilterTags>
                <Ul>
                    {FilterColor.map((tags, id) => (
                        <Li
                        key= {id}
                        active= {tags}
                        >
                            <Pi style={{color: tags.color}}>{tags.tabName}</Pi>
                        </Li>
                    ))}
                </Ul>
            </FilterTags>
        </FilterContent>
    );
}