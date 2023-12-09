import Link from "next/link"
import Image from "next/image"

interface NavLogoProps {
    alt: string
    to: string
    filename: string
}

export default function NavLogo( props: NavLogoProps ){
    return (
        <Link href={props.to}>
            <Image alt={props.alt} src={props.filename} width={185} height={80}/>
        </Link>
    )
}