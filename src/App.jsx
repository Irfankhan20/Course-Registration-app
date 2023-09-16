import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  const handleAddToBookmark = (id, course, credit, price) => {
    const isAlreadyBookmarked = bookmarks.some((item) => item.id === id);
  
    if (isAlreadyBookmarked) {
      toast.error('This course is already selected!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
      });


      // remaining credit add -------------------------------------------
    } else if (remainingCredit === 0) {
      toast.error('You have no remaining credit to select this course.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, 
      });
    }

     else {
      const newRemainingCredit = remainingCredit - credit;
      
      if (newRemainingCredit < 0) {
        toast.error('Insufficient credit! Cannot add this course.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000, 
        });
        setRemainingCredit(0);
      }
      
      else {
        setRemainingCredit(newRemainingCredit);
        
        //  total credit add -------------------------------------------
        const newTotalCredit = totalCredit + credit;
        setTotalCredit(newTotalCredit > 20 ? 20 : newTotalCredit);

        // total price add ---------------------------------------------
        const newTotalPrice = totalPrice + price;
        setTotalPrice(newTotalPrice);
  
        
        toast.success('This course added to cart!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000, 
        });
  
        setBookmarks([...bookmarks, course]);
      }
    }
  };
  



  
  

  

  return (
    <>

       <Header></Header>
       
       <div className='flex max-w-7xl mx-auto mb-16'>
       <Courses
       handleAddToBookmark={handleAddToBookmark}
       ></Courses>
       <Bookmarks
        bookmarks={bookmarks}
        remainingCredit={remainingCredit}
        totalCredit={totalCredit}
        totalPrice={totalPrice}

       ></Bookmarks>
       <ToastContainer />
       </div>
    </>
  )
}

export default App
