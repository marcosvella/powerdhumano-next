import Link from "next/link"

interface NavButtonProps {
    to: string
    text: string
}

export default function NavButton( props: NavButtonProps) {
    return (
        <Link href={props.to} className="text-purple-800 bg-white hover:bg-purple-50 font-medium rounded-2xl text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
            {props.text}
        </Link>
    )
}  