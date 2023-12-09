'use client'

import { useState } from "react"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { FaAlignJustify } from "react-icons/fa6";

import NavLink from "./NavLink"
import NavLogo from "./NavLogo"
import NavButton from './NavButton'
import NavDropdown from "./NavDropdown";
import NavDropdownItem from "./NavDropdownItem";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const scrollPosition = useScrollPosition()
    const menuFixed = scrollPosition > 80 || open ? "bg-blue-700" : "bg-transparent";

    return (
        <nav className={"w-full z-[1000] fixed top-0 left-0 text-white bg-transparent pt-2"}>
            <div className="max-w-screen-xl flex justify-between items-center px-4 h-20 mx-auto">
                <div className="h-full">
                    <NavLogo alt="Logo Power Desenvolvimento Humano" to="/" filename="/power-colorido.png"/>
                </div>
                <div className="hidden lg:flex ">
                    <div className="flex items-center lg:order-2">
                        <NavButton to="/products" text="Contato" />
                    </div>
                    <div className="justify-between items-center w-full flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0">
                            <li>
                                <NavLink to="/" text="Home" />
                            </li>
                            <li>
                                <NavDropdown text="Para sua empresa">
                                    <NavDropdownItem to="#" text="Líder POWER - Pipipi Popopo" />
                                    <NavDropdownItem to="#" text="Líder POWER - Pipipi Popopo" />
                                    <NavDropdownItem to="#" text="Líder POWER - Pipipi Popopo" />
                                    <NavDropdownItem to="#" text="Líder POWER - Pipipi Popopo" />
                                    <NavDropdownItem to="#" text="Líder POWER - Pipipi Popopo" />
                                    <NavDropdownItem to="#" text="Líder POWER - Pipipi Popopo" />

                                </NavDropdown>
                            </li>
                            <li>
                                <NavLink to="#" text="Sobre a Power" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="block lg:hidden" >
                    <FaAlignJustify className="hover:cursor-pointer hover:text-gray-400 flex items-center" size={28} onClick={()=>{setOpen(open => !open)}}/>
                </div>
            </div>   
        </nav>
    )
}