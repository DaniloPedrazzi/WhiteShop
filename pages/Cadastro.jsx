import { Header } from "../components/Header";
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const cadastrar = async () => {
    if (loading == true) {
      console.log("Carregando, aguarde...");
      return;
    }
    if (!validateEmail(email)) {
      console.log("email inválido");
      return;
    }
    setLoading(true);

    //manda o post pra db
    const docRef = await addDoc(collection(db, "users"), {
      // id: id,
      nome: nome,
      email: email,
      senha: senha,
    });

    //limpa os inputs
    setNome("");
    setEmail("");
    setSenha("");
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button
          disabled={
            !nome.trim() &&
            !email.trim() &&
            !senha.trim() /*espaço não conta como caractere*/
          }
          onClick={cadastrar}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Cadastro;
