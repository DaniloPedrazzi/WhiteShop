import { Header } from "../components/Header"

function CriarProjeto() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = [
            titulo = event.target.titulo.value,
            preco = event.target.preco.value,
            descricao = event.target.descricao.value
        ]
      }

  return (
    <div>
        <Header />
        <div>
            <form onSubmit={handleSubmit}>
                <label>Titulo: </label> <input type="text" name="titulo" placeholder="Titulo" required/> <br />
                <label>Preço: </label> <input type="text" name="preco" placeholder="Preço" required/> <br />
                <label>Descrição: </label> <textarea name="descricao" rows="7" placeholder="Descrição" required></textarea> <br />
                <button type="submit">Criar Serviço</button>
            </form>
        </div>
    </div>
  )
}

export default CriarProjeto