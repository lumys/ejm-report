import React from 'react';
import { MenuItem, MenuItemProps, styled, Typography } from '@mui/material';

const NavButton = styled(MenuItem)(() => ({
  display: 'inline-block',
  marginRight: 60,
  '&:hover, &.Mui-selected': {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
}));

interface NavButtonProps extends MenuItemProps {
  title: string;
}

const Component = ({ title, ...rest }: NavButtonProps) => {
  return (
    <NavButton {...rest}>
      <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
    </NavButton>
  );
};

export default Component;
