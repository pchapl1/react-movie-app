import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MovieFormPage = (props)=> {

    const {handleAddMovie} = props
    const [title, setTitle] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const addMovie = (e)=>{

        handleAddMovie(title)
    
    }


    return (
        <div className="movie-form">
            <h1>Movie Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={handleTitle} type="text" name="title" placeholder="Enter Movie Title" />
                </Form.Group>
                <Button onClick={addMovie} variant="primary">
                    Add Movie
                </Button>
            </Form>
        </div>
    )
}

export default MovieFormPage;