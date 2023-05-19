import { ReactNode } from "react";

import levvaCoinsLogo from "../../assets/logo.svg";

import FotoPerfil from "../../assets/perfil.png"
import { Modal } from "../Modal";
import { HeaderContainer, HeaderContent, NewCategoryButton, NewTransactionButton, UserAvatar } from "./styles";
import { Form, FormInput, FormButton } from "../../styles/global";

export function Header() {
    const newCategoryButton: ReactNode = (<NewCategoryButton>Nova Categoria</NewCategoryButton>);
    const newTransactionButton: ReactNode = (<NewTransactionButton>Nova Transação</NewTransactionButton>);
    const userAvatar: ReactNode = (<UserAvatar src={FotoPerfil} />);

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={levvaCoinsLogo} alt="levva coins" />

                <div>
                    <Modal title="Nova Categoria" trigger={newCategoryButton}>

                    </Modal>
                    <Modal title="Nova Transação" trigger={newTransactionButton}>

                    </Modal>
                </div>
                <Modal title="Meu perfil" trigger={userAvatar}>
                    <Form>
                        <UserAvatar src={FotoPerfil} alt="foto de perfil" variant="large" />
                        <FormInput type="name" value="João Felipe" />
                        <FormInput type="email" placeholder="joao.lima@levva.io" disabled />
                        <FormButton type="submit">Atualizar</FormButton>
                    </Form>
                </Modal>
            </HeaderContent>
        </HeaderContainer>
    )
}