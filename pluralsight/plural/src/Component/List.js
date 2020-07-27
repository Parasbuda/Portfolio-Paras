import React from 'react'
import Item from "./Item"
const List=({fruits,delet,edit,clear})=> {
    return (
        <ul className="collection ">
            <h5 className="center blue-text ">Fruits List</h5>
            {
                fruits.length?(
                    fruits.map(fru=>{
                        return(
                            <Item key={fru.id} content={fru.fruit}
                            dele={()=>{delet(fru.id)}}
                            edi={()=>{edit(fru.id)}}/>
                        )
                    })
                ):(
                    <h5 className="center red-text" >No Fruits Available</h5>
                )
            }
            <div className="row">
                <button className="btn col s12 red" onClick={clear}>Clear Fruit List</button>
            </div>
            
        </ul>
    )
}

export default List
