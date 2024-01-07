import React, { useState } from "react";
import { useRouter } from "next/router";
import { QuestaoService } from "@/auto";
import { Button, TextField, Typography, Paper, Container } from "@mui/material";
import { styled } from "@mui/system";
import Alert from "@mui/material/Alert";

const RootContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
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

const CadastrarQuestao = () => {
  const router = useRouter();

  const [enunciado, setEnunciado] = useState<string>("");
  const [alternativas, setAlternativas] = useState<string[]>(["", "", "", ""]);
  const [corretas, setCorretas] = useState<boolean[]>([false, false, false, false]);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const questao = {
        enunciado,
        alternativas: alternativas.map((descricao, index) => ({
          descricao,
          correta: corretas[index],
        })),
      };

      await QuestaoService.postApiQuestoes(questao);

      router.push("/Questao/ListarQuestoes");
    } catch (error) {
      console.error(error);
      setError("Erro ao cadastrar a questão. Tente novamente mais tarde.");
    }
  };

  return (
    <RootContainer maxWidth="lg">
      <Paper elevation={3}>
        <Typography variant="h5" align="center">
          Cadastrar Questão
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
            value={enunciado}
            onChange={(e) => setEnunciado(e.target.value)}
          />
          {alternativas.map((descricao, index) => (
            <div key={index}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label={`Alternativa ${index + 1}`}
                name={`alternativa${index + 1}`}
                required
                value={descricao}
                onChange={(e) =>
                  setAlternativas((prevState) =>
                    prevState.map((item, i) =>
                      i === index ? e.target.value : item
                    )
                  )
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label={`Correta ${index + 1}`}
                name={`correta${index + 1}`}
                required
                select
                SelectProps={{
                  native: true,
                }}
                value={corretas[index] ? "true" : "false"}
                onChange={(e) =>
                  setCorretas((prevState) =>
                    prevState.map((item, i) =>
                      i === index ? e.target.value === "true" : item
                    )
                  )
                }
              >
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </TextField>
            </div>
          ))}
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

export default CadastrarQuestao;
