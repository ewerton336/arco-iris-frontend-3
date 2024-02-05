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
  SelectChangeEvent // Importe SelectChangeEvent
} from '@mui/material';

const ProvaIndex = () => {
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [alunoSelecionado, setAlunoSelecionado] = useState<string>(''); // Mantém como string
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

    const handleAlunoChange = (event: SelectChangeEvent) => { // Corrigido para SelectChangeEvent
        setAlunoSelecionado(event.target.value);
    };

    const iniciarProvaParaAluno = async () => {
        if (!alunoSelecionado) {
            alert('Por favor, selecione um aluno.');
            return;
        }
    
        try {
            const response = await ProvaService.postApiProvasIniciarProva(parseInt(alunoSelecionado));
            const prova = response;
    
            console.log('Prova iniciada com sucesso:', prova);
    

            console.log('teste id de prova', prova.id)
            if (prova && prova.id) {
                router.push(`/prova/detalhes/${prova.id}`);
            } else {
                console.error('ID da prova não encontrado na resposta.');
                alert('Erro ao iniciar a prova. ID da prova não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao iniciar a prova:', error);
            alert('Não foi possível iniciar a prova. Tente novamente.');
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
