import React, { useEffect, useState } from "react";
import { QuestaoService, Questao, Alternativa } from "@/auto";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Container,
} from "@mui/material";

const ListarQuestoes = () => {
  const [questoes, setQuestoes] = useState<Questao[]>([]);

  useEffect(() => {
    // Recupere todas as questões da API
    QuestaoService.getApiQuestoes().then((res) => {
      setQuestoes(res);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Listar Questões
      </Typography>
      <Paper elevation={3}>
        <List>
          {questoes.map((questao) => (
            <ListItem key={questao.id}>
              <ListItemText
                primary={`Questão ID: ${questao.id}`}
                secondary={`Enunciado: ${questao.enunciado || "N/A"}`}
              />
              <List>
                {questao.alternativas?.map((alternativa) => (
                  <ListItem key={alternativa.id}>
                    <ListItemText
                      primary={`Alternativa ID: ${alternativa.id}`}
                      secondary={`Descrição: ${alternativa.descricao || "N/A"}`}
                    />
                    <ListItemText
                      primary={`Correta: ${alternativa.correta ? "Sim" : "Não"}`}
                    />
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default ListarQuestoes;
