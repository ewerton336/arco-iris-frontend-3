import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AlunoService, Aluno } from "@/auto";
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

const EditarAluno = () => {
  const router = useRouter();
  const queryId = router.query.id;
  const id = typeof queryId === 'string' ? parseInt(queryId) : typeof queryId === 'object' ? parseInt(queryId[0]) : null;

  
  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      AlunoService.getApiAlunos1(id).then((data) => {
        setAluno(data);
      }).catch((error) => {
        console.error("Erro ao carregar aluno", error);
        setError("Erro ao carregar informações do aluno.");
      });
    }
  }, [id]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const alunoAtualizado = {
      id: aluno?.id,
      nome: formData.get("nome") as string | null,
      matricula: formData.get("matricula") as string | null,
    };
    

    if (aluno && aluno.id) {
      try {
        await AlunoService.putApiAlunos(aluno.id, alunoAtualizado);
        router.push("/Aluno/ListarAluno");
      } catch (error) {
        console.error(error);
        setError("Erro ao atualizar o aluno. Tente novamente mais tarde.");
      }
    }
  };

  if (!aluno) {
    return <div>Carregando...</div>;
  }

  return (
    <RootContainer maxWidth="xs">
      <Paper elevation={3}>
        <Typography variant="h5" align="center">
          Editar Aluno
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
            defaultValue={aluno.nome}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="matricula"
            label="Matrícula"
            name="matricula"
            required
            defaultValue={aluno.matricula}
          />
          <SubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Atualizar
          </SubmitButton>
        </FormContainer>
      </Paper>
    </RootContainer>
  );
};

export default EditarAluno;
