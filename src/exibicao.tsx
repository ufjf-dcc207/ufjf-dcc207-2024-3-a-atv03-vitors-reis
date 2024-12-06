import "./exibicao.css";
import { ReactNode } from "react";
interface ExibicaoProps {
    abertura: Date;
    fechamento: Date;
    cercado: string;
    children: ReactNode;
}

export default function Exibicao({abertura:inicio, fechamento:fim, cercado:local,children:animais}:ExibicaoProps){
    return <div className="exibicao">
        <div className="inicio">{inicio.toLocaleString()}</div>
        <div className="fim">{fim.toLocaleString()}</div>
        <div className="local">{local}</div>        
        <div className="animais">{animais}</div>
         </div>
};