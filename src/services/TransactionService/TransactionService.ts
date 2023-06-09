import { AxiosError } from "axios";

import Api from "../../clients/api/api";

import { RequestError } from "../../domain/request";
import {
    NewTransactionParams,
    TransactionValues,
} from "../../domain/transaction";

const createTransaction = async ({
    description,
    amount,
    type,
    categoryId,
}: NewTransactionParams): Promise<TransactionValues> => {
    return Api.post({
        url: "/Transaction/Create",
        body: {
            description,
            amount,
            type,
            categoryId,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const getTransactions = async (): Promise<TransactionValues[]> => {
    return Api.get({
        url: "/Transaction/list",
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const searchTransaction = async (text: string): Promise<TransactionValues[]> => {
    return Api.get({
        url: `/transaction/list?query=${text}`,
        config: {
            params: {
                query: text,
            },
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

export const TransactionService = {
    createTransaction,
    getTransactions,
    searchTransaction
};
