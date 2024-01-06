import React, { useEffect, useState } from "react";
import { AlunoService, Aluno } from "@/auto";
import { useRouter } from "next/router";
import Link from "next/link"
import AddIcon from "@mui/icons-material/Add";

import {

  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TablePagination,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ListarAlunos = () => {
  const router = useRouter(); // Inicialize o useRouter
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    AlunoService.getApiAlunos().then((res) => setAlunos(res));
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const removerAluno = (id: number | undefined) => {
    if (id !== undefined)
    {
    AlunoService.deleteApiAlunos(id).then(() => {
      setAlunos((prevAlunos) => prevAlunos.filter((aluno) => aluno.id !== id));
    });
  }
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <div>
      <h1>Alunos</h1>
      <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      component={Link}
      href="/Aluno/CadastrarAluno"
    >
      Cadastrar Novo Aluno
    </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Matrícula</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.slice(startIndex, endIndex).map((aluno) => (
              <TableRow key={aluno.id}>
                <TableCell>{aluno.id}</TableCell>
                <TableCell>{aluno.nome}</TableCell>
                <TableCell>{aluno.matricula}</TableCell>
                <TableCell>
                <IconButton
              color="primary"
              aria-label="Editar"
              onClick={() => {
                router.push(`./EditarAluno/${aluno.id}`);
              }}
            >
              <EditIcon />
            </IconButton>
                  <IconButton
                    color="secondary"
                    aria-label="Remover"
                    onClick={() => removerAluno(aluno.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={alunos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default ListarAlunos;
