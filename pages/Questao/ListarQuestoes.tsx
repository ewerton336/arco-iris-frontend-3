import React, { useEffect, useState } from "react";
import { QuestaoService, Questao } from "@/auto";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Container,
  IconButton,
  Grid,
  Divider,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/router";

const ListarQuestoes = () => {
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const router = useRouter();

  useEffect(() => {
    QuestaoService.getApiQuestoes().then((res) => {
      setQuestoes(res);
    });
  }, []);

  const editarQuestao = (id: number) => {
    router.push(`/Questao/EditarQuestao/${id}`);
  };

  const excluirQuestao = (id: number) => {
    QuestaoService.deleteApiQuestoes(id).then(() => {
      setQuestoes((prevQuestoes) =>
        prevQuestoes.filter((questao) => questao.id !== id)
      );
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Listar Questões
      </Typography>
      <Paper elevation={3}>
        <List>
          {questoes.map((questao, index) => (
            <React.Fragment key={questao.id}>
              {index > 0 && <Divider />}
              <ListItem alignItems="center">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}> 
                    <ListItemText
                      secondary={`Questão ID: ${questao.id}`}
                      primary={`Enunciado: ${questao.enunciado || "N/A"}`}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    {questao.alternativas?.map((alternativa) => (
                      <Box key={alternativa.id}>
                        <ListItemText
                         //  secondary={`Alternativa ID: ${alternativa.id}`}
                          primary={`Descrição da alternativa: ${alternativa.descricao || "N/A"}`}
                        />
                        <ListItemText
                          secondary={`Correta: ${alternativa.correta ? "Sim" : "Não"}`}
                        />
                          <Divider />
                      </Box>
                    ))}
                  </Grid>
                </Grid>
                <IconButton
                  color="primary"
                  aria-label="Editar"
                  onClick={() => questao.id && editarQuestao(questao.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="Remover"
                  onClick={() => questao.id && excluirQuestao(questao.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ListarQuestoes;
