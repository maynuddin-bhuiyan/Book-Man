import { useState, useEffect } from "react";

const Usedata = () => {
    //State Declare
    const [book, setBook] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://whispering-gorge-92937.herokuapp.com/Categorywise')
            .then(res => res.json())
            .then(data => setBook(data))
    },
        []);

    return [book, setBook]
}

export default Usedata;