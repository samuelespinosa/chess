
import pawn from '/src/assets/pieces/pawn.svg';
import Piece from './piece';
export default function Square({coordinate,data,movePiece}) {
  const dropHandler=(e)=>{
  console.log("Drop");
  e.preventDefault();
  // Get the data, which is the id of the source element
  const newData= e.dataTransfer.getData("text");
  movePiece(newData,coordinate); 
  } 
  return (
        <div coordinate={coordinate}
          className="square"
          onDragOver={(event) =>event.preventDefault()}
          onDrop={dropHandler}
          
        >
          {!!data.piece && <Piece id={coordinate}/> }
        </div>
  ); 
}
