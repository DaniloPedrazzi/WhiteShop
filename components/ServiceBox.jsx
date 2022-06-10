import Image from "next/image";

export function ServiceBox(titulo, preco, descricao) {
  return (
    <div className="Box-container">
      <h3>{titulo}</h3>
      <h3 className="preço">R${preco}</h3>
      <p>{descricao}</p>
      <a className="Detalhes_Btn" href="#">
        Detalhes
      </a>
    </div>
  );
}
