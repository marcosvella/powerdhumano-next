import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";


interface NavDropdownProps {
    text: string
    children: React.ReactNode
}

export default function NavDropdown({ children, ...props}: NavDropdownProps) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    return (
        <div className="w-full h-full">
            <button onClick={()=> handleShow()} className="flex flex-row items-center gap-2 text-white text-lg mr-2 px-4 lg:px-5 font-medium bg-transparent hover:text-yellow-500">
                {props.text}
                <FaAngleDown />
            </button>
            <div className={"absolute flex-col bg-white rounded-lg" + show ? 'hidden' : 'flex'}>
                {children}
            </div>
        </div>
    )
}  


// text-white bg-transparent hover:text-yellow-500 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2