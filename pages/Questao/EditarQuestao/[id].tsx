import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QuestaoService, Questao, Alternativa } from "@/auto";
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

const EditarQuestao = () => {
  const router = useRouter();
  const queryId = router.query.id;
  const id =
    typeof queryId === "string"
      ? parseInt(queryId)
      : typeof queryId === "object"
      ? parseInt(queryId[0])
      : null;

  const [questao, setQuestao] = useState<Questao | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      QuestaoService.getApiQuestoes1(id)
        .then((data) => {
          setQuestao(data);
        })
        .catch((error) => {
          console.error("Erro ao carregar questão", error);
          setError("Erro ao carregar informações da questão.");
        });
    }
  }, [id]);

  const handleFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const questaoAtualizada = {
      id: questao?.id,
      enunciado: formData.get("enunciado") as string | null,
      alternativas: questao?.alternativas || [], 
    };

    if (questao && questao.id) {
      try {
        await QuestaoService.putApiQuestoes(questao.id, questaoAtualizada);
        router.push("/Questao/ListarQuestoes");
      } catch (error) {
        console.error(error);
        setError("Erro ao atualizar a questão. Tente novamente mais tarde.");
      }
    }
  };

  if (!questao) {
    return <div>Carregando...</div>;
  }

  return (
    <RootContainer maxWidth="xs">
      <Paper elevation={3}>
        <Typography variant="h5" align="center">
          Editar Questão
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <FormContainer onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="enunciado"
            label="Enunciado"
            name="enunciado"
            required
            autoFocus
            defaultValue={questao.enunciado}
          />
          {questao.alternativas?.map((alternativa, index) => (
            <div key={index}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id={`alternativa${index + 1}`}
                label={`Alternativa ${index + 1}`}
                name={`alternativa${index + 1}`}
                defaultValue={alternativa.descricao}
                disabled 
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id={`correta${index + 1}`}
                label={`Correta ${index + 1}`}
                name={`correta${index + 1}`}
                defaultValue={alternativa.correta ? "Sim" : "Não"}
                disabled 
              />
            </div>
          ))}
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

export default EditarQuestao;
