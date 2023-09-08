import globeLogo from '/globe.svg'

function Navbar(){
    return <nav className='nav'>
        <img src={globeLogo} className='nav-logo'/>
        <h1>My Vacation Diary</h1>
        </nav>
}

export default Navbar;