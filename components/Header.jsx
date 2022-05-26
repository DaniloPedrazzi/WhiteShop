import Link from "next/link";

export function Header()
{
return(
        <div className='header'>
            <ul>
                <header>
                    <li><a className='logo' href="/">WhiteShop</a></li>
                    <li><Link href="/">Whiteshop</Link></li>
                    <li><Link href="/">Minhas Compras</Link></li>
                    <li><Link href="/">Perfil</Link></li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/CriarProjeto">+</Link></li>
                </header>
            </ul>
        </div>
    );
}