import Link from "next/link";

export function Header()
{
return(
        <div className='header'>
            <ul>
                <header>
                    <li><a className='logo' href="/">WhiteShop</a></li>
                    <li><Link href="/LogIn">LogIn</Link></li>
                    <li><Link href="/CriarProjeto">Criar Projeto</Link></li>
                    <li><Link href="/">Home</Link></li>
                </header>
            </ul>
        </div>
    );
}