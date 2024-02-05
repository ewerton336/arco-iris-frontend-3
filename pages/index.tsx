import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link'; // Importe o Link do Next.js


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff8a80', 
    },
    secondary: {
      main: '#80deea', 
    },

  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      color: '#4a148c', 
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px' }}>
      <img src="/images/arcoiris.png" alt="Arco-Íris" style={{ maxWidth: '50%', height: 'auto' }} />
        <Typography variant="h1" gutterBottom>
          Bem-vindo ao Arco-Íris!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Aplicador de Provas para as garotas do Arco-Íris
        </Typography>
        <Box mt={4}>
          <Link href="/Aluno/ListarAluno" passHref>
            <Button component="a" variant="contained" color="primary">
              Listar alunos
            </Button>
          </Link>
          <Link href="/Questao/ListarQuestoes" passHref>
            <Button component="a" variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
              Listar questões
            </Button>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default HomePage;
