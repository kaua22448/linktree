import { Link } from "react-router";

export function ErrorPage(){
    return(
        <div className="flex w-full min-h-screen justify-center items-center flex-col text-white">
            <h1 className="font-bold text-4xl mb-4">Página não encontrada</h1>
            <p className="italic text-1xl mb-4">Você caiu em uma página que não existe</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
                Voltar para home
            </Link>
        </div>
    )
}