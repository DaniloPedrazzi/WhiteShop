import truck from "../Images/truck.svg";
import code from "../Images/code.svg";
import Image from "next/image";

export function ServiceBox(titulo, preco, descricao) {
  return (
    <div className="Box-container">
      <h3>{titulo}</h3>
      <h3 className="preço">R${preco}</h3>
      <p>{descricao}</p>
      <ul>
        <li>
          <Image src={truck} height={15} width={15} /> 15 Dias
        </li>
        <li className="code">
          <Image src={code} height={15} width={15} /> React
        </li>
      </ul>
      <a className="Detalhes_Btn" href="#">
        Detalhes
      </a>
    </div>
  );
}
