/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Aluno } from './Aluno';
import type { QuestaoResposta } from './QuestaoResposta';

export type Prova = {
    id?: number;
    alunoId?: number;
    aluno?: Aluno;
    questoesRespostas?: Array<QuestaoResposta> | null;
    quantidadeAcertos?: number;
    quantidadeErros?: number;
    nota?: number;
};
