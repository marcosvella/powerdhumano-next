import { type ReactNode } from "react"

import Nav from "@/components/Nav"

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gradient-to-br from-[--power-dark-purple] to-[--power-purple-400] w-full h-screen">
            <Nav />
            {children}
        </div>
    )
}