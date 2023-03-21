import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SearchInput = styled(InputBase)(({ theme }) => ({
  borderRadius: 30,
  backgroundColor: '#f3f3f3',
  paddingLeft: 20,
  width: '200px',
  '&:hover': {
    backgroundColor: '#e2e2e2',
  },
}));

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const newOpacity = window.scrollY > 1 ? 0 : 1;
    setOpacity(newOpacity);
  };

  return (
    <AppBar position="fixed" elevation={0} color="primary" style={{ opacity }}>
      <Toolbar>
        <SearchInput
          placeholder="Pesquisar..."
          disableUnderline
          startAdornment={<SearchIcon />}
        />
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
