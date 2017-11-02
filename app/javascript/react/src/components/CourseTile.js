import React from 'react';
import { Link } from 'react-router-dom';

const CourseTile = props => {
  return(

    <div className="row small-up-2 large-up-4">
      <nav className="row">

        <Link to={`/courses/${props.course.id}`}>
          <img className="thumbnail" src={props.course.photo_url}/>
          <h3 className="thumbnail-name">{props.course.name}</h3>
          <ul className="thumbnail-address">
            {props.course.city}, {props.course.state}
          </ul>
        </Link>


      </nav>
    </div>
  )
}

export default CourseTile
