import React, { useState } from "react";
import { useRouter } from "next/router";
import { AlunoService } from "@/auto";
import { Button, TextField, Typography, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";
import Alert from "@mui/material/Alert";

const RootContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const FormContainer = styled("form")({
  width: "100%",
  marginTop: "8px",
});

const SubmitButton = styled(Button)({
  margin: "24px 0 16px",
});
const CadastrarAluno = () => {
  const router = useRouter();

  const [nome, setNome] = useState<string>("");
  const [matricula, setMatricula] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    try {
      await AlunoService.postApiAlunos({
        nome,
        matricula
      });
      
      router.push("/Aluno/ListarAluno");
    } catch (error) {
      console.error(error);
      setError("Erro ao cadastrar o aluno. Tente novamente mais tarde.");
    }
  };

  return (
    <RootContainer maxWidth="xs">
      <Paper elevation={3}>
        <Typography variant="h5" align="center">
          Cadastrar Aluno
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <FormContainer onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            required
            autoFocus
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="matricula"
            label="Matrícula"
            name="matricula"
            required
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Cadastrar
          </SubmitButton>
        </FormContainer>
      </Paper>
    </RootContainer>
  );
};

export default CadastrarAluno;
