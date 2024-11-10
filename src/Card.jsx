function Card({values , index, handleClick}){
  const {name,profession,image,friends} = values;
    return(
      <div className="bg-white w-60 rounded-md overflow-hidden">
        <div className="h-40 bg-blue-300">
          <img className="h-full object-fill" src={image} alt="" />
        </div>
        <div className="p-1">
          <h3 className="font-bold">{name}</h3>
          <h6 className="text-sm">{profession}</h6>
          <button onClick={()=>handleClick(index)} className={`px-3 py-1 text-white items-center rounded-full ${friends === true ? "bg-green-500":"bg-red-400"} mt-2`}>{friends === true ? "Friends" : "Add friend"}</button>
        </div>
      </div>
    )
}
export default Card;