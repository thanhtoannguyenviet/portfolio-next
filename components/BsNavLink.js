import Link from "next/link";

export default function BsNavLink(props) {
    const {href, title, className = ''} = props;
    return (
        <Link href={href}>
            <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
        </Link>
    )
}