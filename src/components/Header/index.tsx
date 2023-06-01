import { ReactNode } from "react";

import levvaCoinsLogo from "../../assets/logo.svg";

import FotoPerfil from "../../assets/perfil.png"
import { Modal } from "../Modal";
import { HeaderContainer, HeaderContent, NewTransactionButton, SignOutButton, UserAvatar } from "./styles";
import { Form, FormInput, FormButton, TransactionTypeContainer, TransactionTypeButton } from "../../styles/global";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { router } from "../../Router";
import { CategoryModal } from "./CategoryModal";

export function Header() {
    const newTransactionButton: ReactNode = (<NewTransactionButton>Nova Transação</NewTransactionButton>);
    const userAvatar: ReactNode = (<UserAvatar src={FotoPerfil} />);

    function handleSignOut() {
        window.localStorage.removeItem("user");
        router.navigate("/login");
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={levvaCoinsLogo} alt="levva coins" />

                <div>
                    <CategoryModal />
                    <Modal title="Nova Transação" trigger={newTransactionButton}>
                        <Form>
                            <FormInput type="text" placeholder="Descrição" required />
                            <FormInput type="numer" placeholder="Preço" required />
                            <FormInput type="text" placeholder="Categoria" required />

                            <TransactionTypeContainer>
                                <TransactionTypeButton value="income" variant="income">
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TransactionTypeButton>
                                <TransactionTypeButton value="outcome" variant="outcome">
                                    <ArrowCircleDown size={24} />
                                    Saída
                                </TransactionTypeButton>
                            </TransactionTypeContainer>

                            <FormButton type="submit">Cadastrar</FormButton>
                        </Form>
                    </Modal>
                </div>
                <Modal title="Meu perfil" trigger={userAvatar}>
                    <Form>
                        <UserAvatar src={FotoPerfil} alt="foto de perfil" variant="large" />
                        <FormInput type="name" value="João Felipe" />
                        <FormInput type="email" placeholder="joao.lima@levva.io" disabled />
                        <FormButton type="submit">Atualizar</FormButton>
                        <SignOutButton type="button" onClick={handleSignOut}>
                            Sair
                        </SignOutButton>
                    </Form>
                </Modal>
            </HeaderContent>
        </HeaderContainer>
    )
}