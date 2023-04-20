import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from "react-router-dom";


const EditStore = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [Store, setStore] = useState("")
    const [StoreNumber, setStoreNumber] = useState(0)
    const [Open, setOpen] = useState(false);

    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                const {
                    Store,
                    StoreNumber,
                    Open
                } = res.data
                setStore(Store)
                setStoreNumber(StoreNumber)
                setOpen(Open)
            })
            .catch(err => {
                console.log(err);
                navigate("/stores")
            })
    }, [id])

    const handleEdit = (e) => {
        e.preventDefault();

        const editedStore = {
            Store,
            StoreNumber,
            Open
        }
        axios.put(`http://localhost:8000/api/stores/${id}`, editedStore)
            .then(res => {
                console.log(res);
                navigate(`/stores/${id}`)
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }

    return (
        <form onSubmit={handleEdit}>
            <Link to='/'>Go back home</Link>
            <h1>Edit {Store}</h1>
            <div>
                <label >Store:</label>
                {
                    errors?.Store && (
                        <span style={{ color: 'red' }}>{errors.Store?.message}</span>
                    )
                }
                <input type="text" onChange={e => { setStore(e.target.value) }} value={Store} />
            </div>
            <div>
                <label >Store Number:</label>
                {
                    errors?.StoreNumber && (
                        <span style={{ color: 'red' }}>{errors.StoreNumber?.message}</span>
                    )
                }
                <input type="number" onChange={e => { setStoreNumber(e.target.value) }} value={StoreNumber} />
            </div>
            <div>
                <label >Open?:</label>
                {
                    errors?.Open && (
                        <span style={{ color: 'red' }}>{errors.Open?.message}</span>
                    )
                }
                <input type="checkbox" onChange={e => { setOpen(e.target.checked) }} value={Open} />
            </div>
            <button type="submit" value={`Update ${Store}`}>Edit Store</button>
        </form>
    )



}


export default EditStore;