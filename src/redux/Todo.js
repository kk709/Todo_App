import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodos, deleteTodos, removeAllTodos } from './actions/index'
import logo from "../note.png"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={logo} alt="logo" width="100px" />
                        <figcaption>Add your list Here</figcaption>
                    </figure>
                    <br />
                    {/* {inputData} */}
                    <div className="input-container">
                        <input type="text" placeholder="Add Item"
                            value={inputData} onChange={(e) => setInputData(e.target.value)}
                        />
                        <button class="button" onClick={() => dispatch(addTodos(inputData), setInputData(''))}>Add</button>
                    </div>
                    <br />
                    {
                        list.map((elem) => {
                            return (

                                <div className='show-item' key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <span onClick={() => dispatch(deleteTodos(elem.id))}><DeleteOutlineIcon /></span>
                                </div>
                            )
                        })
                    }
                    <br />
                    <div className='button1'>
                        <button className="btn">
                            <span className="btn-text-one">CHECK LIST</span>
                            <span className="btn-text-two" onClick={() => dispatch(removeAllTodos())}>Remove All!</span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Todo