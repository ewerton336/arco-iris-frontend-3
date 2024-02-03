import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const [anchorElAluno, setAnchorElAluno] = useState<null | HTMLElement>(null);
  const [anchorElQuestoes, setAnchorElQuestoes] = useState<null | HTMLElement>(null);
  const [anchorElProva, setAnchorElProva] = useState<null | HTMLElement>(null);

  const handleMenuOpenAluno = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElAluno(event.currentTarget);
  };

  const handleMenuCloseAluno = () => {
    setAnchorElAluno(null);
  };

  const handleMenuOpenQuestoes = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElQuestoes(event.currentTarget);
  };

  const handleMenuCloseQuestoes = () => {
    setAnchorElQuestoes(null);
  };

  const handleMenuOpenProva = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElProva(event.currentTarget);
  };

  const handleMenuCloseProva = () => {
    setAnchorElProva(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aplicador de Questoes Arco Iris
        </Typography>
        <div style={{ marginRight: "10px" }}>
          <Button color="inherit">
            <Link href="/">Home</Link>
          </Button>

          <div
            onMouseEnter={handleMenuOpenAluno}
            onMouseLeave={handleMenuCloseAluno}
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              Aluno
            </IconButton>
            <Menu
              anchorEl={anchorElAluno}
              open={Boolean(anchorElAluno)}
              onClose={handleMenuCloseAluno}
            >
              <MenuItem onClick={handleMenuCloseAluno}>
                <Link href="/Aluno/ListarAluno">Listar Alunos</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuCloseAluno}>
                <Link href="/Aluno/CadastrarAluno">Cadastrar Aluno</Link>
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div style={{ marginRight: "10px" }}>
          <div
            onMouseEnter={handleMenuOpenQuestoes}
            onMouseLeave={handleMenuCloseQuestoes}
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              Questoes
            </IconButton>
            <Menu
              anchorEl={anchorElQuestoes}
              open={Boolean(anchorElQuestoes)}
              onClose={handleMenuCloseQuestoes}
            >
              <MenuItem onClick={handleMenuCloseQuestoes}>
                <Link href="/Questao/ListarQuestoes">Listar Questoes</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuCloseQuestoes}>
                <Link href="/Questao/CadastrarQuestao">Cadastrar Questao</Link>
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div style={{ marginRight: "10px" }}>
          <div
            onMouseEnter={handleMenuOpenProva}
            onMouseLeave={handleMenuCloseProva}
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              Provas
            </IconButton>
            <Menu
              anchorEl={anchorElProva}
              open={Boolean(anchorElProva)}
              onClose={handleMenuCloseProva}
            >
              <MenuItem onClick={handleMenuCloseProva}>
                <Link href="/Prova">Iniciar Prova</Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
