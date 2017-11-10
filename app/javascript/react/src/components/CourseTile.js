import React from 'react';
import { Link } from 'react-router-dom';


const CourseTile = props => {

  let course = props.course;
  let newString = course.name.replace(/ /g, '+');
  let state = `+${course.state}+${course.city}`
  let location = newString.concat(state)

  return(
    <div className="courseTile">
      <Link to={`/courses/${course.id}`}>
        <div className="picture" >
            <img className="thumbnail" src={course.photo_url}/>
        </div>
      </Link>
      <div className="non-picture">
        <p className="course-tile-name">{course.name}</p>
        <p className="course-tile-address">{course.city}, {course.state}</p>
      </div>
      <div className="directions" >
          <a href={`https://www.google.com/maps/place/${location}`} target="_blank">
            Get Directions
          </a>
      </div>
    </div>
  )
}

export default CourseTile
