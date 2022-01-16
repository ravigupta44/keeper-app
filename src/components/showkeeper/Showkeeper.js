import React from 'react'
import "./Showkeeper.css"
import axios from "axios"

const Showkeeper = ({ keeperList, setKeeperList }) => {
    const deleteKeeper = (id)  => {
        axios.post("http://localhost:3001/api/delete", { id })
        .then(res => setKeeperList(res.data))
    }
    return (
        <div className="showKeeper row">
            {
                keeperList.map( keeper => (
                    <div className="keeperCard col-md-3" key={keeper._id}>
                        <h1 className="title">
                            {keeper.title} 
                            <i className="deleteIcon fa fa-trash" aria-hidden="true" onClick={() => deleteKeeper(keeper._id)} ></i>
                            </h1>
                        <textarea 
                            className="descriptionBox" 
                            value={keeper.description} 
                            readOnly />
                    </div>
                ))
            }
        </div>
    )
}

export default Showkeeper
