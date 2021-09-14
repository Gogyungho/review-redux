import React from 'react';
import {connect} from 'react-redux';
import Todos from '../components/Todos';
import {addTodo, toggleTodo} from '../modules/totos';

function TodosContainer({
    todos,
    onCreate,
    onToggle,
}) {
    // const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
    // const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

    return <Todos
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
    />
}

const mapStateToProps = state => ({todos: state.todos});
const mapDispatchToProps = dispatch => ({
    onCreate: (text) => dispatch(addTodo(text)),
    onToggle: (id) => dispatch(toggleTodo(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);