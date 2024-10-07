"use client";

import { CustomButtonProps } from "@/type";

function CustomButton({ title, containerStyles, handleCLick , btnType }: CustomButtonProps) {
    return (

        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleCLick}
        >
            <span className={`flex-1`}>{title}</span>

        </button>
    )
}

export default CustomButton