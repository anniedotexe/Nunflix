import React, { useEffect, useState } from 'react'
import './Row.css';
import requests from "../request";
import axios from '../axios'

const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title }) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchWarriorNunImages);
            setImages(request.data.backdrops.sort(() => Math.random() - 0.5)
            );
            // console.log(request.data.backdrops)
            return request;
        } fetchData();
    }, []);

    return (
        <div className='row'>

            <h2>
                {title}
            </h2>

            <div className='row_posters'>
                {images.map((image, index) => (
                    < img className='row_poster'
                        src={`${base_url}${image.file_path}`}
                        alt="Warrior Nun"
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row;