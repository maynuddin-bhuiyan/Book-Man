import { useState, useEffect } from "react";

const Usedata = () => {
    //State Declare
    const [book, setBook] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('http://localhost:7000/Categorywise')
            .then(res => res.json())
            .then(data => setBook(data))
    },
        []);

    return [book, setBook]
}

export default Usedata;