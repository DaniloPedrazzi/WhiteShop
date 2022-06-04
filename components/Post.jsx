import truck from "../Images/truck.svg";
import code from "../Images/code.svg";
import Image from "next/image";

function Post({post, id}) {
  return (
    <div className="Box-container">
      <h3>{post?.titulo}</h3>
      <h3 className="preço">R${post?.preco}</h3>
      <p>{post?.descricao}</p>
      <ul>
        <li>
          <Image src={truck} height={15} width={15} /> {post?.entrega}
        </li>
        <li className="code">
          <Image src={code} height={15} width={15} /> {post?.lang}
        </li>
      </ul>
      <a className="Detalhes_Btn" href={id}>
        Detalhes
      </a>
    </div>
  );
}

export default Post;
