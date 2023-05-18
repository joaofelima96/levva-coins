import { ReactNode } from "react"

import { AuthBackground } from "./styles";

import LevvaCoinsLogo from "../../assets/logo.svg"

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
    return (
        <AuthBackground>
            <main>
                <header>
                    <img src={LevvaCoinsLogo} alt="Marca levva coins" />
                </header>
            </main>
            <section>
                <div>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                {children}
            </section>
        </AuthBackground>
    )
}