// import styled from "styled-components";

import { useState } from "react";


export default function Dropdown () {
    const dropMenu = ["Newsletter", "Chrome Extension", "Twitter"]
    const [activeLink, setActiveLink] = useState(false)
    return (
      <>
        <DropdownMenu>
            {
                dropMenu.map(menu, index) => (
                    <Link>
                        key= {menu}
                        {index === activeLink ? false : ""}
                    </Link>
                )
            }
        </DropdownMenu>
      </>  
    );
}