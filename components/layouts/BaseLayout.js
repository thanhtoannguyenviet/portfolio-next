import Header from "../shared/Header";
import {ToastContainer} from "react-toastify";

export default function BaseLayout(props) {
    const {className, user, navClass="with-bg", loading, children} = props;
    return (
        <div className="layout-container">
            <Header className={navClass} user={user} loading={loading}/>
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
            <ToastContainer position="bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover/>
        </div>
    )
}