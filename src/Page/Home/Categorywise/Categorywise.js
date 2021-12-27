import React from 'react';
import Usedata from '../../Usedata/Usedata';
import Books from '../Books/Books';
import './Categorywise.css';
import './Categorywise.css'

const Categorywise = () => {
    const [book] = Usedata([]);

    console.log(book);
    return (
        <div className='Categorywise'>
            <h1>Browse Courses
                Categorywise</h1>
            <p>Education began in prehistory, as adults  trained
                the young in the knowledge and skills deemed
                necessary  in their society</p>

            <div className="Book">

                {
                    book.map(books => <Books

                        key={books._id}
                        books={books}

                    />)
                }
            </div>


        </div>
    );
};

export default Categorywise;