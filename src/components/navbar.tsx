import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aplicador de Questoes Arco Iris
        </Typography>
        <div>
          <Button color="inherit">
            <Link href="/">Home</Link>
          </Button>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onMouseEnter={handleMenuOpen} // Alteração para onMouseEnter
          >
            Aluno
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/Aluno/ListarAluno">Listar Alunos</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/Aluno/CadastrarAluno">Cadastrar Aluno</Link>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
