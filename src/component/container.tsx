import React from "react"

const Container = ({
    children, extraclass
}: {
    children: React.ReactNode, extraclass?: string
}) => {
    return (
        <div className={` min-h-screen  p-4 ${extraclass}`}>
            <div className="container-fluid  mt-14">
                {children}
            </div>
        </div>
    )
}

export default Container