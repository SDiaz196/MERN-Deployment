import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

const OneStore = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [store, setStore] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                setStore(res.data)
            })
            .catch(err => {
                console.log(err);
                navigate('/stores/')
            })
    }, [id])


    const { _id, Store, StoreNumber, Open } = store
    return (
        <div key={_id}>
            <Link to='/'>Go Back Home</Link>
            <h2>{Store}</h2>
            <h4>Store Number{StoreNumber}</h4>
            <p>Open:{String(Open)}</p>
            <Link to={`/stores/${_id}/edit`}>Edit {Store} Details</Link>
        </div>
    )
}

export default OneStore;