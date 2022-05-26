import { Header } from "../components/Header";
import { ServiceBox } from "../components/ServiceBox";
import CriarProjeto from "./CriarProjeto";


export default function Home() {
  return (
    <div>
      <Header />
      <ServiceBox titulo={CriarProjeto.data.name} preco={CriarProjeto.data.preco} decricao={"CriarProjeto.data.descricao"}/>
    </div>
  )
}
