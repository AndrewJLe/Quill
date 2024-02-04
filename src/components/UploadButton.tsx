"use client"

import { Dialog, DialogTrigger } from "./ui/dialog"
import { useState } from "react"

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Dialog open={isOpen} onOpenChange={(visible) => {
            if (!visible) {
                setIsOpen(visible)
            }
        }}>
            <DialogTrigger>

            </DialogTrigger>
        </Dialog>
    )
}

export default UploadButton