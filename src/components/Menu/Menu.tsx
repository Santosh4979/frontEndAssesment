import Link from 'next/link';
import { Avatar, Box, Container, NavLink } from 'theme-ui';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'src/context/userContext';
import { Logo } from '../Icons/Logo';

export const Menu: React.FC = () => {
  const {  avatar } = useContext(UserContext) || {}; // TODO('useContext', useContext(UserContext));
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
      
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  
  }, [])
  
  return (
    <Box
      as="menu"
      sx={{
        position: 'fixed',
        top: visible ? 0 : '-70px',
        left: '0',
        width: '100%',
        background: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0 0 10px',
        display: 'flex',
      }}
    >
      <Container p={10} sx={{ flex: '1 auto' }}>
        <NavLink as={Link} href="/en/US">
          <Logo />
        </NavLink>
        <NavLink as={Link} href="/en/US/product" pl={20}>
          Product
        </NavLink>
        <NavLink as={Link} href="/en/US/about" pl={20}>
          About
        </NavLink>
      </Container>
      {avatar && 
        <Avatar
          data-testid="usericon"
          alt="avatar"
          src={avatar}
          sx={{
            margin: 10,
            width: 48,
            height: 48,
            padding: 1,
            backgroundColor: '#d8d8d8',
          }}
        />}
    </Box>
  );
}
