import { Header } from "../components/Header";
import Link from "next/link";

function LogIn() {
  return (
    <div>
      <Header />

      <Link href="/Cadastro">Cadastro</Link>
    </div>
  );
}

export default LogIn;
