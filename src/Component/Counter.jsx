import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/slice/slice';

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
}

export default Counter;