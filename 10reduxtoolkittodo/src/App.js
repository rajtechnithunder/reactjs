
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className='flex flex-col justify-center items-center pt-6 px-8'>
      <h1 className='text-3xl font-bold'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
