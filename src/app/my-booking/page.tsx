import Container from "@/component/container"
import Link from "next/link"

const MyBooking = () => {
    return (
        <Container>
            <h5 className="font-bold mb-4">No Booking Found</h5>
            <p className="text-gray text-[1rem]">Please log in to access your bookings. </p>
            <p className="text-gray text-[1rem]">If you not registered yet click on sign up</p>
            <Link href={'/login'} className="bg-red text-white p-2 my-2 rounded-md w-full block text-center mt-4">Login</Link>
            <Link href={'/sign-up'} className="p-2 mt-4 rounded-md w-full block text-center border border-red text-red">Sign Up</Link>
        </Container >
    )
}

export default MyBooking