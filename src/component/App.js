import "../App.css";
import Cards from "./Cards";

function App() {
 
  return (
    <>
    
    <Cards>
      <svg className="bd-placeholder-img card-img-top">
        <rect width="96%" height="100%" fill="#868e96"></rect>
        <text x="28%" y="50%" fill="#dee2e6">Изображение</text>
      </svg>
    </Cards>
    <Cards />
    </>
  );
}

export default App;