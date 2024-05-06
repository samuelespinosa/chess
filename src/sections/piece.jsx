import pawn from '/src/assets/pieces/pawn.svg';
export default function Piece({id}) {
  const dragStartHandler=(e)=>{
      console.log("dragStart");
      e.dataTransfer.clearData();
      e.dataTransfer.setData("text/plain",id);
  } 
  return (
    <img 
      id={id}
      src={pawn} 
      className='piece' 
      onDragStart={dragStartHandler} 
      onDragOver={(event) => event.preventDefault()} 
      draggable
    /> 
 ); 
}
