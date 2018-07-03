import React from 'react';
import {Menu} from 'semantic-ui-react';
import { navigateToUrl } from 'single-spa'

const NavBar = () => (
  <Menu>
    <a href="/" onClick={navigateToUrl}>
    <Menu.Item
      name='Home'
    />
    </a>
    <a href="/contacts" onClick={navigateToUrl}>
    <Menu.Item
      name='Contacts'
    />
    </a>
  </Menu>
)

export default NavBar