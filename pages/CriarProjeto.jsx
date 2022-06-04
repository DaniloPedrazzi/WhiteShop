import { Header } from "../components/Header"
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";

function CriarProjeto() {

    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState("");
    const [entrega, setEntrega] = useState("");
    const [lang, setLang] = useState("");
    const [descricao, setDescricao] = useState("");
    const [loading, setLoading] = useState(false);

    function filterInt(preco){
        if(/^(\-|\+)?([0-9]+|Infinity)$/.test(preco))
          return Number(preco);
        return NaN;
    }

    const sendPost = async () => {
        if (loading == true) {
          return;
        }
        if(!filterInt(preco)){
            console.log("O preço precisa ser um número");
            return;
        }
        setLoading(true);
    
        //manda o post pra db
        const docRef = await addDoc(collection(db, "posts"), {
        //   id: id,
          titulo: titulo,
          preco: preco,
          entrega: entrega,
          lang: lang,
          descricao: descricao,
          timestamp: serverTimestamp(),
        })

        //limpa os inputs
        setTitulo("");
        setPreco("");
        setEntrega("");
        setLang("");
        setDescricao("");
        setLoading(false);
    }

    return (
        <div>
            <Header />
            <div class="form">
                <div class="title">Criar Projeto</div>
                <div class="input-container ic1">
                    <input id="titulo" class="input" placeholder=" " type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
                    <div class="cut cut-short"></div>
                    <label for="titulo" class="placeholder">Título</label>
                </div>
                <div class="input-container ic2">
                    <input id="preco" class="input" type="text" placeholder=" " value={preco} onChange={(e) => setPreco(e.target.value)} required/>
                    <div class="cut cut-short"></div>
                    <label for="preco" class="placeholder">Preço</label>
                </div>
                <div class="input-container ic2">
                    <input id="entrega" class="input" type="text" placeholder=" " value={entrega} onChange={(e) => setEntrega(e.target.value)} required/>
                    <div class="cut cut-long"></div>
                    <label for="entrega" class="placeholder">Tempo de entrega</label>
                </div>
                <div class="input-container ic2">
                    <input id="lang" class="input" type="text" placeholder=" " value={lang} onChange={(e) => setLang(e.target.value)} required/>
                    <div class="cut cut-mid"></div>
                    <label for="lang" class="placeholder">Linguagem</label>
                </div>
                <div class="input-container-tb ic2">
                    <textarea id="descricao" class="input textbox" type="text" rows="1" placeholder=" " value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                    <div class="cut"></div>
                    <label for="descricao" class="placeholder">Descrição</label>
                </div>
                <button
                    type="text" class="submit"
                    disabled={!titulo.trim() && !preco.trim() && !descricao.trim() /*espaço não conta como caractere*/}
                    onClick={sendPost}>Criar Projeto
                </button>
            </div>
        </div>
    )
}

export default CriarProjeto