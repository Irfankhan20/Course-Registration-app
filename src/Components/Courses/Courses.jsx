import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({handleAddToBookmark}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                courses.map(course=> <Course
                key={course.id} 
                course={course}
                handleAddToBookmark={handleAddToBookmark}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired
    
}

export default Courses;