import React from 'react';
import { Navigation, NavList, ListItem, NavLink } from './Nav.styled';
export default function Nav() {
  return (
    <>
      <Navigation>
        <NavList>
          <ListItem>
            <NavLink href="">News</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="">Find pet</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="">Our friends</NavLink>
          </ListItem>
        </NavList>
      </Navigation>
    </>
  );
}