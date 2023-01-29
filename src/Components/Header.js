import './Header.css';

function Header() {
    function Close(e){
        document.getElementsByClassName('navbar-popup-div')[0].style.display="none";
    }
    function Open(e){
        document.getElementsByClassName('navbar-popup-div')[0].style.display="flex";
    }
    return (
        <>
            <div className='Header'>
                <div className='Header-heading'>Shortly</div>
                <div className='nav-items'>
                    <div className='nav-item'>Features</div>
                    <div className='nav-item'>Pricing</div>
                    <div className='nav-item'>Resources</div>
                </div>
                <div className='auth-items'>
                    <div className='auth-item'>Login</div>
                    <button className='signup-btn'>Sign Up</button>
                    <button className='mob-navbar' onClick={e=>Open(e)}><i class="bi bi-list"></i></button>
                </div>
            </div>     
            <div className='navbar-popup-div'>
                <div className='navbar-pop'>
                    <button className='close-popup' onClick={e=>Close(e)}><i class="bi bi-x-lg"></i></button>
                    <div className='navbar-item'>Features</div>
                    <div className='navbar-item'>Pricing</div>
                    <div className='navbar-item'>Resources</div>
                    <div className='navbar-item'>Login</div>
                    <button className='mob-signup-btn'>Sign Up</button>
                </div>
            </div>
        </>
    )

}

export default Header;