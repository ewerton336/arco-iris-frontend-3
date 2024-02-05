import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProvaService, Prova, QuestaoResposta } from '../../../src/auto'; // Ajuste o caminho conforme necessário
import { Container, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const DetalhesProva = () => {
  const router = useRouter();
  const { id } = router.query;
  const [prova, setProva] = useState<Prova | null>(null);

  useEffect(() => {
    const fetchProva = async () => {
      try {
        console.log(typeof id);
        if (typeof id === 'string') {
          const response = await ProvaService.getApiProvasGetProva(parseInt(id));
          console.log(response);
          console.log('oiiii');
          setProva(response);
        } else {
          console.error('ID de prova inválido:', id);
        }
      } catch (error) {
        console.error('Houve um erro ao buscar os alunos:', error);
      }
    };

    fetchProva();
  }, [id]); 

 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  

  if (!prova) {
    return <div>Carregando prova...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 2 }}>
        Prova {prova.id}
      </Typography>
      <form onSubmit={handleSubmit}>
        {prova.questoesRespostas?.map((questao, index) => (
          <div key={questao.questaoId}>
            <Typography variant="h6">Q{index + 1}: {questao.questao?.enunciado}</Typography>
            <RadioGroup>
              {questao.questao?.alternativas?.map((alternativa) => (
                <FormControlLabel key={alternativa.id} value={alternativa.id} control={<Radio />} label={alternativa.descricao} />
              ))}
            </RadioGroup>
          </div>
        ))}
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>Submeter Prova</Button>
      </form>
    </Container>
  );
};

export default DetalhesProva;
