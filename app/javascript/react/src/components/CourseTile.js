import React from 'react';
import { Link } from 'react-router-dom';

const CourseTile = props => {
  return(

    <div className="row small-up-2 large-up-4">
      <div className="column">

        <Link to={`/courses/${props.course.id}`}>
        <img className="thumbnail" src={props.course.photo_url}/>
        <h5>{props.course.name}</h5>
        </Link>


      </div>
    </div>
  )
}

export default CourseTile
