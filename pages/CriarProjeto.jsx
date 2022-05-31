import { Header } from "../components/Header"
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";

function CriarProjeto() {

    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState("");
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
          id: id,
          titulo: titulo,
          preco: preco,
          descricao: descricao,
          timestamp: serverTimestamp(),
        })

        //limpa os inputs
        setTitulo("");
        setPreco("");
        setDescricao("");
        setLoading(false);
    }

    return (
        <div>
            <Header />
            <div>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
                <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} required/>
                <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}
                    rows="2" placeholder="Descrição" required></textarea>
                <button 
                disabled={!titulo.trim() && !preco.trim() && !descricao.trim() /*espaço não conta como caractere*/}
                onClick={sendPost}>Criar Projeto</button>
            </div>
        </div>
    )
}

export default CriarProjeto