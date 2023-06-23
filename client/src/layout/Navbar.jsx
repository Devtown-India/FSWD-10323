const Navabar = ({changeView}) => {
    return ( 
        <ul className="flex justify-center" > 
            <li onClick={()=>changeView('home')} className="text-indigo-500 underline mx-4" >Home</li>
            <li onClick={()=>changeView('posts')} className="text-indigo-500 underline mx-4">Posts</li>
            <li  onClick={()=>changeView('timer')}className="text-indigo-500 underline mx-4">Timer</li>
        </ul>
     );
}
 
export default Navabar;