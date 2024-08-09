import Paper from 'components/Paper';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import styles from './Header.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    scale: 1.05;
  }

  &.active {
    color: orange;
  }
`;

export default function Header() {
  return (
    <header>
      <Paper className={styles.paper}>
        <nav className={styles.nav}>
          <StyledLink to="goit-react-hw-05-movies/" end>
            Home
          </StyledLink>
          <StyledLink to="goit-react-hw-05-movies/movies">Movies</StyledLink>
        </nav>
      </Paper>
    </header>
  );
}
