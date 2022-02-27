import React from 'react'
import { Dropdown } from 'semantic-ui-react';



const TabDropdown = () => (
    <Dropdown
      icon='ellipsis horizontal'
      button
      floating
      className='icon'
    >
      <Dropdown.Menu>
        <Dropdown.Item>Newsletter</Dropdown.Item>
        <Dropdown.Item>Chrome Extension</Dropdown.Item>
        <Dropdown.Item>Twitter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
export default TabDropdown;
