import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-full h-auto rounded-lg bg-[#FFFFFF] ml-4 pl-6 pt-6 pr-6">
            <div>
                <h3 className="text-[18px] font-bold text-[#2F80ED] pb-4 border-b-2 ">Credit Hour Remaining 12 hr</h3>
            </div>
            <h2 className="text-xl font-bold pt-4">Course Name: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark> )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
    
}

export default Bookmarks;