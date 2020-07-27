import React from 'react'

const Form=({edi,sub,chan,input})=> {
    return (
        <div className="card purple">
            <div className="card-content">
                <div className="row">
                    <form onSubmit={sub}>
                        <div className="input-field col s12">
                            <input type="text" name="fruit" placeholder="Enter the Fruits"
                            onChange={chan} value={input}/>
                        </div>
                        <div className="row">
                            <button className={edi?"btn col s12 blue":"btn col s12 green"} type="submit">
                                {edi?"Edit Fruit Name":"Add Fruit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Form
