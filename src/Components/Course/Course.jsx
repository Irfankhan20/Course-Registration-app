import PropTypes from 'prop-types';

const Course = ({course}) => {
    const {cover_img} = course;
    return (
        <div>
            <img src={cover_img} alt="" />
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.array.isRequired
}

export default Course;