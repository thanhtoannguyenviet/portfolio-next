import {Container} from "reactstrap";

export default function BasePage(props){
    const {className="",children} = props
    return (
        <div className={`base-page ${className}`}>
            <Container>
                {children}
            </Container>
        </div>
    )
}