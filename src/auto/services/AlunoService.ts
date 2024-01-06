/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Aluno } from '../models/Aluno';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AlunoService {

    /**
     * @returns Aluno Success
     * @throws ApiError
     */
    public static getApiAlunos(): CancelablePromise<Array<Aluno>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Alunos',
        });
    }

    /**
     * @param requestBody 
     * @returns Aluno Success
     * @throws ApiError
     */
    public static postApiAlunos(
requestBody?: Aluno,
): CancelablePromise<Aluno> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Alunos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns Aluno Success
     * @throws ApiError
     */
    public static getApiAlunos1(
id: number,
): CancelablePromise<Aluno> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Alunos/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static putApiAlunos(
id: number,
requestBody?: Aluno,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Alunos/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiAlunos(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Alunos/{id}',
            path: {
                'id': id,
            },
        });
    }

}
