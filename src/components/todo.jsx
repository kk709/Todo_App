import React, { useState } from 'react'
import logo from "../note.png"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Todo = () => {


    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    const AddItems = () => {
        if(!input) {
            // alert("True");
        }
        else {

            setItems([...items, input]);
            setInput('');
        }
    }

    const deleteItems = (id) => {
        const updatedItems = items.filter((elem, ind) => {
            return ind !== id;
        });
        setItems(updatedItems);
    }

    const removedAll = () => {
        setItems([]);
    }

    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src={logo} alt="logo" width="100px" />
                        <figcaption>Add your list Here</figcaption>
                    </figure>
                    <br/>
                    {/* {inputData} */}
                    <div className="input-container">
                        <input type="text" placeholder="Add Item" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            />
                        <button class="button" onClick={AddItems}>Add</button>
                    </div>
                    <br/>

                        {
                            items.map((elem, ind) => {
                                return (

                                    <div className='show-item' key={ind}>
                                        <h3>{elem}</h3>
                                        <span onClick={() => deleteItems(ind)}><DeleteOutlineIcon /></span>
                                    </div>
                                )
                            })
                        }
                    <br/>
                    <div className='button1'>
                        <button className="btn" id="btn" onClick={removedAll}>
                            <span className="btn-text-one">CHECK LIST</span>
                            <span className="btn-text-two">Remove All!</span>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Todo