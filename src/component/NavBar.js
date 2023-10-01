import React from 'react'
import homeimg from '../images/Home.png'
import langimg from '../images/Languages.png'
import comimg from '../images/Community.png'
import notimg from '../images/Notifications.png'
import pagimg from '../images/Page.png'
import ppimg from '../images/pp.png'

function NavBar() {
  return (
    <div className="Navbar" id="first">
        <div className="Navbar__logo" id="Askme">
    <img width="233px" height="44" src="https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-ask-me-speech-bubble-png-image_6533094.png"  alt=''/>
        </div>
        <div className="Navbar__icons">
            <div className="Navbar__icon">
           <img width="44" height="44" src={langimg} alt=''/>
            </div>
            </div>
            <div className="Navbar__input">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAZlBMVEX///8aGhoAAAAUFBQYGBjKysrS0tIQEBALCwvFxcX19fXCwsL7+/sEBAQ5OTnOzs5sbGzq6uqhoaFzc3ORkZHi4uKIiIiZmZlFRUWqqqowMDDZ2dlaWlphYWG1tbVLS0uAgIAnJycxhRC4AAAEt0lEQVRoge1a65qiMAzVFGyBAQREuYn4/i+5SFsuyrikQWf3G89vymnubdLN5oMPPvi9cMuwzk+nwymv7TJ6G23kNJeAwYDrZZ+n7ut544oDcGZtBzDuA2TN7uuVxM6+pR2zjvhb9vhlotcFiFlahVYdx5eQe1dgz4g7ABxWV3t6nhJbjIubi4mp2Vvya70uc85hRNtqVgTVOWmaZl9lrahitC0G+xW17iYwiNZu4nKwU1cr1o12+bmA0RdQ7NZiToNB5NaP63Rmc05iDRbhkK/DHPLer31Iyu8+i2LRS27BYQ1mr5eGQ/I8Z8bQqweSNZi1KJB9K7GG2/T7hD2VOdTMbFnEOoUWHI405pQrKcTVWbYiOvfcMYXZDZSH+cGMW3+DpudeuNtZJKCZMVnioFaxq3klz3tmXGI+qXVQmTKnqj4KlMw3HDX3yZBaOQy7LrezhrKUxfBLb/D01g28xc0EJboLLlcb5cRS5QP4axqaQS2F5plZ7VeuJkw8LWDm276hMF7vyF37xmUgVGLjf7BXfmKeFTJu9ocIyLVP6Q2dymO1jnLUCTqxeYX007OQ7k1g1nkYcGklsrqwpJ2xoq3JT6SdrK1ZHtSoOtWJM2qRzP/8QmJWGme46lNx8xw6oJS6E5is4spUBjaN2uQ3aedllqCZulceJrJDZSRqq0Ie06BBLJGlGp0MHiDLF6p6SddERsUMPHygyDRqXrU0bGU4xJIT3kazCP8r6h9UuHIz8mVRuRmm/tUquKjUOT64lKIyaj9GViEfo71SdIl0S81m8sCBqkKRPMmSjkctvi4yh6M6aRd83p9BKtt5uKN4skomlQ7OCpTdarWI5meJSaCk6jDpUZhd5TG4s44rjY0Kiwc4Zmd5GZEWp4SXDC3kqVCf6Mw7EpvBaNj+mQpJC8ypVRMLf8vVly7j0FYXRoOz/JfuSJjGl74lGwwFDrRrrq3bTwZrXS22UWy7uh9iNAk56X2bBJhqnHHMAWXAl+5eGWRy3eI07dD2PbsGu9LRxjLOhroxjM0KpZoFoBPZAFd2Q7AVQDO3xxzzjnjpW3idO8PUiQnz0lf3Hf3FI7scJqM+c7kPPXe2qPZNBoEdt3l7oJ9k8CUGHwY+a3An/c+g+Iv2ov3MnJnCfexVyCB74jZpMz9ZZ4RjVj4elAbxbIPF9c5wr+s1/Ny+Dn9lsL3k0/cgbuol47cE7P41A4U7Gs/sb5PzoEpOtROGtpcfzxkHf2RjCK73FqfYexNbE3UyPjxLERMpeZsBQsbX5G699+nzDE0R3KLAFqvKvSnP4D8n5v0bidB/5KZMODdp8u2LmO5NTDV4025GbtJVZhPl1b1xu9+2ps+Ok1PvDDfBzzX7PhPyRUoL+TqlqE7lfXnZPWQ2os47uKUdN+dLFgRB1kaZN//sy2br+hoGNv857vAlOl+G9f2cxE3288Xcj7nFfxd3+IO+9qMxtnItwWDOz39pjPG3cc/ktV/h5/9YLTF9eILFo68J4nycwk0dMyC473W+1nvTBQj59G5AffqIwV2MURrPeO5J/X5bOu0w9jXqbIXAbdZAJXH7KqOs8qYZhbTqLsfFu2XuUOaH2HuvnT/44IO34w/LKTTSRVnK5QAAAABJRU5ErkJggg==" height={20} alt=''/>
        <input type="text"  placeholder="Search AskUs"/>
        </div>
        
        <div className="Navbar">
        <div className="Navbar__icons">
            <div className="Navbar__icon">
            <img width="42.31" height="44" src={homeimg} alt=''/>
            </div>
            <div className="Navbar__icon">
            <img width="44" height="44" src={comimg} alt=''/>
            </div>
            <div className="Navbar__icon">
            <img width="44" height="44" src={pagimg} alt=''/>   
            </div>
            <div className="Navbar__icon">
            <img width="44" height="44" src={notimg} alt=''/>   
            </div>
            </div>

        

        <div className="Navbar__Rem">
            <div className="Navbar__avatar">
                <img width="34.83" height="44" src={ppimg} alt=''/>
            </div>
            </div>
            {/* <img src="/language.png" alt=''/>
            <button className="Button">Add Question</button> */}
        </div>
   
   
   
   
   
   
    </div>
  )
}

export default NavBar