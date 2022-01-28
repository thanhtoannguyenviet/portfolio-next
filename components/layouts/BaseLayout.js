import Header from "../shared/Header";

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
        </div>
    )
}