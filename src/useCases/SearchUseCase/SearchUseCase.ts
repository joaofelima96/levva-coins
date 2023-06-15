import { RequestError } from "../../domain/request";
import { SearchParams } from "../../domain/search";
import { TransactionValues } from "../../domain/transaction";
import { TransactionService } from "../../services/TransactionService/TransactionService";

import { searchTransactionDone, loadTransaction, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents"

const execute = ({
    search,
}: SearchParams): Promise<void> => {

    loadTransaction()

    return TransactionService.searchTransaction(search)
        .then((transactions: TransactionValues[]) => {
            searchTransactionDone(transactions);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });

};

const SearchUseCase = {
    execute,
};

export default SearchUseCase;