import { Header } from "../../components/Header";
import { Input } from "../../components/Inputs";
import { FormEvent, useState, useEffect } from "react";

import { db } from "../../services/firebaseconnection";
import { doc, setDoc, getDoc } from "firebase/firestore";

export function Networks(){

    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")

    function handleRegister(e: FormEvent){
        e.preventDefault()
        setDoc(doc(db, "social", "link"), {
            facebook: facebook,
            instagram: instagram,
            youtube: youtube
        })
        .then(() => {
            console.log("CADASTRADO COM SUCESSO");
        })
        .catch((error) => {
            console.log("ERRO AO SALVAR" + error);
        })
    }

    useEffect(() => {
        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then((snapshot) => {
                if(snapshot.data() !== undefined){
                    setFacebook(snapshot.data()?.facebook)
                    setInstagram(snapshot.data()?.instagram)
                    setYoutube(snapshot.data()?.youtube)
                }
            })
        }

        loadLinks()
    },[])


    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

            <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">

                <label className="text-white font-medium mt-2 mb-3">Link do facebook</label>
                <Input type="url" placeholder="Digite a url do facebook..." value={facebook} onChange={ (e) => {setFacebook(e.target.value)}}/>

                <label className="text-white font-medium mt-2 mb-3">Link do instagram</label>
                <Input type="url" placeholder="Digite a url do instagram..." value={instagram} onChange={ (e) => {setInstagram(e.target.value)}}/>

                <label className="text-white font-medium mt-2 mb-3">Link do youtube</label>
                <Input type="url" placeholder="Digite a url do youtube..." value={youtube} onChange={ (e) => {setYoutube(e.target.value)}}/>

                <button type="submit" className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium cursor-pointer">
                    Salvar links
                </button>
            </form>
        </div>
    )
}