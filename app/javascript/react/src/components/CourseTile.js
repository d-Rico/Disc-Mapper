import React from 'react';
import { Link } from 'react-router-dom';

const CourseTile = props => {
  return(

    <div className="row">
      <div className="small-6 large-6 columns" >
        <Link to={`/courses/${props.course.id}`}>
          <img className="thumbnail" src={props.course.photo_url}/>
        </Link>
      </div>
      <div className="small-6 large-6 columns">
          <div className="small-12 large-12 columns">
            <p>{props.course.name}</p>
            <p>{props.course.city}, {props.course.state}</p>
          </div>
          <div className="small-12 large-12 columns">
            Get Directions
          </div>
      </div>
    </div>
  )
}

export default CourseTile
