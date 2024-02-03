/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Alternativa } from './Alternativa';
import type { Prova } from './Prova';
import type { Questao } from './Questao';

export type QuestaoResposta = {
    id?: number;
    provaId?: number;
    prova?: Prova;
    questaoId?: number;
    questao?: Questao;
    alternativaEscolhidaId?: number | null;
    alternativaEscolhida?: Alternativa;
    correta?: boolean;
};
