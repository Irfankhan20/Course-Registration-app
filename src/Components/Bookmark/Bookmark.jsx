import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {course_name} = bookmark;
    return (
        <div className=''>
            <h3 className='text-[#1C1B1B99] font-normal leading-7'>{course_name}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;