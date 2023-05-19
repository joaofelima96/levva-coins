import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { DefaultTheme } from "../../styles/defaultTheme";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={DefaultTheme["yellow-500"]} />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color={DefaultTheme["red-500"]} />
                </header>

                <strong>R$ 17.000,00</strong>
            </SummaryCard>
            <SummaryCard variant="balance">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={DefaultTheme["yellow-500"]} />
                </header>

                <strong>R$ 400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}