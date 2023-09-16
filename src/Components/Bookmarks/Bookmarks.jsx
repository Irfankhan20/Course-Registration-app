import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, remainingCredit, totalCredit, totalPrice}) => {
    return (
        <div className="md:w-full h-auto rounded-lg bg-[#FFFFFF] ml-4 pl-6 pt-6 pr-6">
            <div>
                <h3 className="text-[18px] font-bold text-[#2F80ED] pb-4 border-b-2 ">Credit Hour Remaining {remainingCredit} hr</h3>
            </div>
            <div className='pb-6 border-b-2'>
            <h2 className="text-xl font-bold pt-4">Course Name: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark> )
            }
            </div>
            <h2 className='text-[#1C1B1BCC] font-medium py-4 border-b-2'>Total Credit Hour : {totalCredit}</h2>
            <p className='pb-6 pt-4 text-[#1C1B1BCC] font-semibold'>Total Price : {totalPrice} USD</p>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired

    
}

export default Bookmarks;