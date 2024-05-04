const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id);
    }

    return (
        <>
        <ul>
            { todos.map((todo) => {
                return(
                    <div key={todo.id}>
                        <button onClick={() => complete(todo.id)}>完了</button>
                        {todo.content}
                    </div>
                )
            }) }
        </ul>
        </>
    );
};

export default List;
  