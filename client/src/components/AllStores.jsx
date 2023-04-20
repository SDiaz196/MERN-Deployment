import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";


const AllStores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/stores")
            .then(res => {
                setStores(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/stores/${id}`)
            .then(res => {
                const filterStores = stores.filter(stores => {
                    return stores._id !== id;
                })
                setStores(filterStores);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Find stores in your area!:</h1>
            <Link to={"/stores/new"}>Can't find your store?</Link>
            {stores.map(store => {
                const { _id, Store, StoreNumber, Open } = store
                return (
                    <div key={_id}>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Store</th>
                                    <th scope="col">Store Number</th>
                                    <th scope="col">Open</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><Link to={`/stores/${_id}`}> {Store}</Link></th>
                                    <td>{StoreNumber}</td>
                                    <td>{String(Open)}</td>
                                    <td>{Open ? <button onClick={() => handleDelete(_id)} >Delete {Store}</button> : ""}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    )


}

export default AllStores;