import React, { useState } from "react";

export default function Todolist() {
  const [Activity, SetActivity] = useState("");
  const [listdata, SetListdata] = useState([]);
  const AddActivity = () => {
    // SetListdata([...listdata,Activity]);
    // console.log(listdata);
    SetListdata((listdata) => {
      const updatedlist = [...listdata, Activity];
      console.log(updatedlist);
      SetActivity("");

      return updatedlist;
    });
  };

  function RemoveActivity(index) {
const updatedlistdata=listdata.filter((element,id)=>{

return index!=id;


})
SetListdata(updatedlistdata)


  }

  const removeAll=()=>{

SetListdata([])



  }






  return (
    <>
      <div className="container">
        <div className="header">TO-DO LIST</div>
        <input
          type="text"
          placeholder="Add  Your Activity"
          value={Activity}
          onChange={(e) => {
            SetActivity(e.target.value);
          }}
        ></input>
        <button onClick={AddActivity}> Add</button>
        <p className="list-heading">Here Is Your Lists{"):"}</p>
        {listdata != [] &&
          listdata.map((data, index) => {
            return (
              <>
                <p key={index}>
                  <div className="list-data">{data}</div>
                  <div className="btn-position">
                    <button onClick={()=>RemoveActivity(index)}> Remove(-)</button>
                  </div>
                </p>
              </>
            );
          })}

{listdata.length>=1&&   <button  onClick={removeAll}>Remove all</button> }
          
      </div>
    </>
  );
}
