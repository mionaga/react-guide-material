import "./Expression.css";

const Expression = () => {
    const title = "Expression";
    const array = ['item1', 'item2', 'item3'];
    const Hello = arg => {
        return (
            `${arg} Function`
        );
    }        
    const jsx = <h3>Hello JSX</h3>;
    return (
        <div className="expression">
            <h3>Hello {title}</h3>
            <h3>{array}</h3>
            <h3>{Hello('Hello')}</h3>
            <h3>{/*画面上に表示されない */}</h3>
            {<h3>Hello JSX</h3>}
            {jsx}
        </div>
    )
}
export default Expression;