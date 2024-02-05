import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AlunoService, Aluno, ProvaService } from "../../src/auto/index";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent
} from '@mui/material';

const ProvaIndex = () => {
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [alunoSelecionado, setAlunoSelecionado] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const fetchAlunos = async () => {
          try {
            const response = await AlunoService.getApiAlunos();
            setAlunos(response);
          } catch (error) {
            console.error('Houve um erro ao buscar os alunos:', error);
          }
        };

        fetchAlunos();
    }, []);

    const handleAlunoChange = (event: SelectChangeEvent) => {
        setAlunoSelecionado(event.target.value);
    };

    const iniciarProvaParaAluno = async () => {
        if (!alunoSelecionado) {
            alert('Por favor, selecione um aluno.');
            return;
        }
        
        try {
            const alunoId = parseInt(alunoSelecionado);
            if (isNaN(alunoId)) {
                console.error('ID do aluno inválido:', alunoSelecionado);
                alert('ID do aluno inválido.');
                return;
            }
    
            const response = await ProvaService.postApiProvasIniciarProva(alunoId);
            console.log('Prova iniciada:', response);
        } catch (error) {
            console.error('Erro ao iniciar a prova:', error);
            alert('Não foi possível iniciar a prova.');
        }
    };
    
    return (
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Selecione um Aluno para a Prova
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Aluno</InputLabel>
            <Select
              value={alunoSelecionado}
              label="Aluno"
              onChange={handleAlunoChange}
            >
              {alunos.map((aluno) => (
                <MenuItem key={aluno.id} value={aluno.id}>
                  {aluno.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button 
            variant="contained" 
            sx={{ mt: 3 }}
            onClick={iniciarProvaParaAluno}
            disabled={!alunoSelecionado}
          >
            Iniciar Prova
          </Button>
        </Container>
    );
};

export default ProvaIndex;
