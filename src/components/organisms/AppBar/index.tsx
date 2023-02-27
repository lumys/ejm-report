import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomDataRouteObject } from '@c-types/common';
import NavButton from '@components/atoms/NavButton';

const LogoArea = styled(Box)`
  flex: 0;
`;

const NavArea = styled(Box)`
  flex: 1;
`;

interface AppBarProps extends MuiAppBarProps {
  routes: CustomDataRouteObject[];
}

const Component = ({ routes }: AppBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const renderMenuItem = useCallback(
    (pages: CustomDataRouteObject[], currPathname: string) => {
      return pages.map((page) => {
        const { id, path, headerOptions } = page;
        const { title } = headerOptions || {};

        return title && path ? (
          <NavButton
            key={id}
            selected={path === currPathname}
            onClick={() => navigate(path)}
            title={title}
          />
        ) : null;
      });
    },
    [navigate],
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <LogoArea>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
        </LogoArea>

        <NavArea>{renderMenuItem(routes, pathname)}</NavArea>
      </Toolbar>
    </AppBar>
  );
};

export default Component;
