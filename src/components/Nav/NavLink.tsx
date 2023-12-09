import Link from "next/link"

interface NavLinkProps {
    to: string
    text: string
}

export default function NavLink( props: NavLinkProps) {
    return (
        <Link href={props.to} className="text-white bg-transparent hover:text-yellow-500 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
            {props.text}
        </Link>
    )
}  