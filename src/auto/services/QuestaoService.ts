/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Questao } from '../models/Questao';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuestaoService {

    /**
     * @returns Questao Success
     * @throws ApiError
     */
    public static getApiQuestoes(): CancelablePromise<Array<Questao>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Questoes',
        });
    }

    /**
     * @param requestBody 
     * @returns Questao Success
     * @throws ApiError
     */
    public static postApiQuestoes(
requestBody?: Questao,
): CancelablePromise<Questao> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Questoes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns Questao Success
     * @throws ApiError
     */
    public static getApiQuestoes1(
id: number,
): CancelablePromise<Questao> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Questoes/{id}',
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
    public static putApiQuestoes(
id: number,
requestBody?: Questao,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Questoes/{id}',
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
    public static deleteApiQuestoes(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Questoes/{id}',
            path: {
                'id': id,
            },
        });
    }

}
