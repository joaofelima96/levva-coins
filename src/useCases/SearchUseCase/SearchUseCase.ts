import { SearchParams } from "../../domain/search";

import { updateSearch } from "../../stores/SearchStore/SearchEvents"

const execute = ({
    search,
}: SearchParams): void => {

    updateSearch(search)

};

const SearchUseCase = {
    execute,
};

export default SearchUseCase;