import { React } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchFor = () => {

    const [state, setState] = useState(["people"])
    const [id, setId] = useState(null)

    const searchForHacia = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        searchForHacia(`/SearchInfo/${state}/${id}`);
        
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Search For:</label>
                <select onChange={(e) => setState(e.target.value)}>
                    <option value="people"> People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <label>Id:</label>
                <input type="number" onChange={(e) => setId(e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchFor