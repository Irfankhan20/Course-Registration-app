import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';


const Course = ({ course, handleAddToBookmark}) => {
    const { course_name, id, cover_img, credit_time, price, course_details } = course;
    return (
        <div className=' container text-center bg-[#FFFFFF] rounded-lg mb-6'>
            <img className='my-4 mt-4 mx-auto px-4' src={cover_img} alt="" />
            <h1 className='text-[#1C1B1B] text-[18px] font-semibold pt-4 pb-3'>{course_name}</h1>
            <p className='text-[#1C1B1B99] pb-6 text-[14px] font-normal px-4'>{course_details}</p>
            <div className='flex justify-between'>
                <div className='flex gap-2 ml-4'>
                    <button><FaDollarSign></FaDollarSign></button>
                    <p className='text-[#1C1B1B99] font-medium'>Price : {price}</p>
                </div>
                <div className='flex gap-2 mr-5'>
                    <button><FaBookOpen></FaBookOpen></button>
                    <p className='text-[#1C1B1B99] font-medium'>Credit : {credit_time}hr</p>
                </div>
            </div>
            <button onClick={() => handleAddToBookmark(id, course, credit_time, price)} className='mt-6 mb-4 w-[90%] bg-[#2F80ED] text-white border rounded-lg px-28 py-2 text-lg font-semibold'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Course;