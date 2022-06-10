import { Header } from "../components/Header";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect } from "react";

function LogIn() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "users")),
        (snapshot) => {
          setUsers(snapshot.docs);
        }
      ),
    [db]
  );

  const logar = async () => {
    if (loading == true) {
      console.log("Carregando, aguarde...");
      return;
    }
    if (!validateEmail(email)) {
      console.log("email inválido");
      return;
    }
    setLoading(true);

    users.map((user) => (
      setId(user.id),
      setEmail(user.email),
      setSenha(user.senha)
    ))
    console.log(id + email + senha);

    //limpa os inputs
    setEmail("");
    setSenha("");
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div>
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
            !email.trim() &&
            !senha.trim() /*espaço não conta como caractere*/
          }
          onClick={logar}
        >
          LogIn
        </button>
      </div>
      <Link href="/Cadastro">Cadastro</Link>
    </div>
  );
}

export default LogIn;
