import { useState, useEffect } from "react";

const Usedata = () => {
    //State Declare
    const [course, setCourse] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('http://localhost:7000/course')
            .then(res => res.json())
            .then(data => setCourse(data))
    },
        []);

    return [course, setCourse]
}

export default Usedata;