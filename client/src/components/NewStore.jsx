import { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'


const NewStore = () => {
    const navigate = useNavigate();
    const [Store, setStore] = useState("")
    const [StoreNumber, setStoreNumber] = useState(0)
    const [Open, setOpen] = useState(false);

    const [errors, setErrors] = useState(null);

    const createStore = (e) => {
        e.preventDefault();
        const newStore = {
            Store,
            StoreNumber,
            Open
        }
        axios.post("http://localhost:8000/api/stores", newStore)
            .then(res => {
                console.log(res.data);
                navigate(`/stores/${res.data._id}`);
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }


    return (
        <form onSubmit={createStore}>
            <Link to='/'>go back home</Link>
            <h1>Add a new store!</h1>
            <div>
                <label >Store:</label>
                {
                    errors?.Store && (
                        <span style={{ color: 'red' }}>{errors.Store?.message}</span>
                    )
                }
                <input type="text" onChange={e => { setStore(e.target.value) }} />
            </div>
            <div>
                <label >StoreNumber:</label>
                {
                    errors?.StoreNumber && (
                        <span style={{ color: 'red' }}>{errors.StoreNumber?.message}</span>
                    )
                }
                <input type="number" onChange={e => { setStoreNumber(e.target.value) }} value={StoreNumber} />
            </div>
            <div>
                <label >Open?:</label>
                <input type="checkbox" onChange={e => { setOpen(e.target.checked) }} />
            </div>
            <button type="submit">Add a new Store</button>
        </form>
    )
}


export default NewStore;