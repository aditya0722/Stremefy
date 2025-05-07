import './App.css'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import VideoCard from './component/VideoCard'
import Thumnail from './assets/Thumnail.jpg'
function App() {


  return (
    <>
      <Navbar isLoggedIn={false} />
      <div style={{ display: 'flex' }} className='h-screen bg-blue-50'>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <h1 className="text-2xl font-bold mb-4">Recommended Videos</h1>
          <div className="grid grid-cols-4 gap-4">
            <VideoCard
          
          thumbnail={Thumnail}
              title="Video Title 1"
              views="1M"
        
              timestamp="2 days ago"
            />
            <VideoCard
              thumbnail="https://via.placeholder.com/150"
              title="Video Title 2"
              views="500K"
            
              timestamp="3 days ago"
            />
            <VideoCard
              thumbnail="https://via.placeholder.com/150"
              title="Video Title 3"
              views="200K"
             
              timestamp="5 days ago"
            />
            <VideoCard
              thumbnail="https://via.placeholder.com/150"
              title="Video Title 4"
              views="100K"
           
              timestamp="1 week ago"
            />
          </div>
          <h1 className="text-2xl font-bold mt-8 mb-4">Trending Videos</h1>
        </div>
      </div>
    </>
  )
}

export default App
