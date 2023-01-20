import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SearchInfo = () => {
    const [data, setData] = useState("");
    const [dataHomeWorld, setDataHomeWorld] = useState("");
    var { state } = useParams();
    const { id } = useParams();
    const navigate = useNavigate();
    if (state === undefined) {
        state = "people";
    };

    useEffect(() => {
        const buscarDatos = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/${state}/${id}`);
                console.log(response.data);
                setData(response.data);

                if (data.homeworld !== undefined) {
                    const response2 = await axios.get(`${data.homeworld}`);
                    console.log(response2.data);
                    setDataHomeWorld(response2.data);
                }

            }
            catch (error) {
                navigate('/ErrorMessage')
                console.log(error)
            }
        }


        buscarDatos();

    }, [state, id, data.homeworld]);

    return (
        <div className=''>
            {
                state === "people" ? (
                    <>
                        <h2 key={data.name}>{data.name}</h2>
                        <p> Heigth: {data.height}</p>
                        <p>Hair Color: {data.hair_color}</p>
                        <p>Birth Year: {data.birth_year}</p>
                        <p>Homeworld: {dataHomeWorld.name}</p>
                    </>
                ) : state === "planets" ? (
                    <>
                        <h2 key={data.name}>{data.name}</h2>
                        <p> Climate: {data.climate}</p>
                        <p>Terrain: {data.terrain}</p>
                        <p>Population: {data.population}</p>
                        <p>Gravity: {data.gravity}</p>
                    </>
                ) : state === "films" ? (
                    <>
                        <h2 key={data.title}>{data.title}</h2>
                        <p>Episode ID: {data.episode_id}</p>
                        <p> Director: {data.director}</p>
                        <p>Producer: {data.producer}</p>
                        <p>Release Date: {data.release_date}</p>
                    </>
                ) : state === "species" ? (
                    <>
                        <h2 key={data.name}>{data.name}</h2>
                        <p> Classification: {data.classification}</p>
                        <p>Designation: {data.designation}</p>
                        <p>Average Height: {data.average_height}</p>
                        <p>Skin Colors: {data.skin_colors}</p>
                    </>
                ) : state === "vehicles" ? (
                    <>
                        <h2 key={data.name}>{data.name}</h2>
                        <p> Model: {data.model}</p>
                        <p>Manufacturer: {data.manufacturer}</p>
                        <p>Cost In Credits: {data.cost_in_credits}</p>
                        <p key={data.passengers}>Passengers: {data.passengers}</p>
                    </>
                ) : state === "starships" ? (
                    <>
                        <h2 key={data.name}>{data.name}</h2>
                        <p> Model: {data.model}</p>
                        <p>Manufacturer: {data.manufacturer}</p>
                        <p>Cost In Credits: {data.cost_in_credits}</p>
                        <p>Passengers: {data.passengers}</p>
                    </>
                ) : null
            }
        </div>
    );
}

export default SearchInfo;