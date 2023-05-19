import { HeaderContainer, HeaderContent, NewCategoryButton, NewTransactionButton, UserAvatar } from "./styles";

import levvaCoinsLogo from "../../assets/logo.svg"

import FotoPerfil from "../../assets/perfil.png"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={levvaCoinsLogo} alt="levva coins" />

                <div>
                    <NewCategoryButton>Nova Categoria</NewCategoryButton>
                    <NewTransactionButton>Nova Transação</NewTransactionButton>
                </div>
            </HeaderContent>

            <UserAvatar src={FotoPerfil} />
        </HeaderContainer>
    )
}