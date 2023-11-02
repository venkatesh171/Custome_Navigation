import Button from "./Button";

export default function App () {
    return (
        <div>
            <div>
            <Button primary outline>click here</Button>
        </div>
        <div>
            <Button secondary rounded>Buy now</Button>
        </div>
        <div>
            <Button danger outline>see deals</Button>
        </div>
        <div>
            <Button warning>something</Button>
        </div>
        <div>
            <Button success>children</Button>
        </div>
        </div>
    );
}