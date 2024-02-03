/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Prova } from '../models/Prova';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProvaService {

    /**
     * @param requestBody 
     * @returns Prova Success
     * @throws ApiError
     */
    public static postApiProvasIniciarProva(
requestBody?: number,
): CancelablePromise<Prova> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Provas/IniciarProva',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns Prova Success
     * @throws ApiError
     */
    public static getApiProvasGetProva(
id: number,
): CancelablePromise<Prova> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Provas/GetProva/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static postApiProvasSubmeterProva(
requestBody?: Prova,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Provas/SubmeterProva',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
