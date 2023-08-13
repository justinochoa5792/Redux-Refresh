import "./App.css";
import Counter from "./features/counter/Counter";
import PostList from "./features/post/PostList";
import AddPostForm from "./features/AddPostForm";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostList />
      <Counter />
    </main>
  );
}

export default App;
