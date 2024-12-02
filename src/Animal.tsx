import "./assets/Animal.css";

interface AnimalProps {

    icone: string;
    nome:string;
    peso: number;
    extincao: boolean;
}

export default function({icone,nome,peso,extincao}:AnimalProps){
    return <div className="animal">
        <div className="icone">{icone}</div>
        <div className="nome">{nome}</div>
        {peso > 0.0 && (
                <div className="peso">{peso.toLocaleString()} kg</div>
            )}
        <div className="extincao">{extincao ? "Em extinção" : "nao"}</div>

    </div>
}