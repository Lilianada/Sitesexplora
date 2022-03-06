import Filter from "../Filter/Filter";
import PopUp from "../TabDrop/ModalPopUp";
import TabSearch from "./TabSearch";

export default [
        {
            tab: 'Search',
            render: () => <TabSearch/>
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