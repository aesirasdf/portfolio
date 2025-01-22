
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function GuestLayout({ children }) {
    return (
        <>
            <ToastContainer />
            {children}
        </>
    );
}
