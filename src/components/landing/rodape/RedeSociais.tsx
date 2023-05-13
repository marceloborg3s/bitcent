import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="Desativado" />
            <RedeSocial icone={<IconBrandInstagram />} url="https://instagram.com/borgesmarcelo.me/" />
            <RedeSocial icone={<IconBrandFacebook />} url="Desativado" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/marceloborg3s" />
        </div>
    )
}