import BoilingCom from './components/convertCFK/BoilingCom'
import AppTodolist from './components/todolist/AppTodolist'
import PhotoGallery from './components/photo/PhotoGallery'

function App() {
  return (
    <div className="App">
      <h1>Bài 1: Convert Temperature</h1>
      <BoilingCom />
      <h1>Bài 2: To Do List</h1>
      <AppTodolist />
      <h1>Bài 3: Simple Photo Gallery</h1>
      <PhotoGallery />
    </div>
  );
}

export default App;
