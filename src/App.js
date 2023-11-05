import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchPost } from './redux/slices/createThunk';
import { useEffect } from 'react';
// import { increament, decrement} from './redux/slices/counterSlices';

function App() {
  // const dispatch = useDispatch();
  // const counter = useSelector(state => state?.counter);
  // console.log(counter)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPost());
  },[]);
  //Select store state
  const post = useSelector(state => state.post);
  const {postsList, loading} = post;
  console.log(loading);
  console.log(post)
  return (
    <div className="App">
      {/* <h1>Redux Toolkit</h1>
      <h2>Counter:{counter?.value}</h2>
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}
      {/* <button onClick={() => dispatch(increaseAmount(20))}>increaseAmount</button> */}
      <h1>Post List </h1>
      <hr/>
      {loading ? (<h2>Loading...</h2>) : (postsList?.map(post=>(
        <>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
        <hr/>
        </>
      )))}
    </div>
  );
}

export default App;
