import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     

      <nav class="navbar navbar-expand-sm">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link font1 ms-3" to="/" style={{fontSize:"20px",color:"#a97959"}}>HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link font1 fclr ms-3" to="Ourmenu" style={{fontSize:"20px"}}>OUR MENU</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link font1 fclr ms-3" to="History" style={{fontSize:"20px"}}>HISTORY</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link font1 fclr ms-3" to="Contact" style={{fontSize:"20px"}}>CONTACT</Link>
        </li>
      </ul>
       <a class="navbar-brand mx-auto" href="#" style={{fontSize:"20px"}}><img src="images/logo-regular.png" /></a>

       <button className='btn1 ms-auto'><b>MAKE RESERVATION</b></button>
    </div>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;