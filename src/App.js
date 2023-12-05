import Button from "./Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

export default function App () {
    return (
        <div>
            <div>
                <Button primary rounded> <GoBell /> click here</Button>
            </div>
            <div>
                <Button secondary rounded> <GoCloud />  click here</Button>
            </div>
            <div>
                <Button success rounded> <GoDatabase /> Buy now</Button>
            </div>
            <div>
                <Button warning>see deals</Button>
            </div>
            <div>
                <Button danger>something</Button>
            </div>
            <div>
                <Button outline>children</Button>
            </div>
            <div>
                <Button rounded>children</Button>
            </div>
        </div>
    );
}