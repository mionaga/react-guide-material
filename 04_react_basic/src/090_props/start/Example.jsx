import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello, ${arg}`;
    return (
        <>
            {/* <Child color="" />
            <Child color="red" /> */}
            <Child 
            num = {123}
            fn= {hello} 
            />

        </>
    )
}

export default Example;
