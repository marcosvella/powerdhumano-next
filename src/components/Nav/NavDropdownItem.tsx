import Link from "next/link"

interface NavDropdownItemProps {
    to: string
    text: string
}

export default function NavDropdownItem( props: NavDropdownItemProps) {
    return (
        <Link href={props.to} className="text-[--power-purple-500] w-full hover:text-yellow-500 font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
            {props.text}
        </Link>
    )
}  