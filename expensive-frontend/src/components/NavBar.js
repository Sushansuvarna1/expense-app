import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Setting from "./Setting";
import Home from "./Home";
import Account from "./Account";
import Expense from "./Expense";
import Archive from "./Archive";
import Profile from "./Profile";
import Swal from 'sweetalert2'
import "../App.css"



const NavBar = (props) => {
  const { loggedIn, handleAuth } = props



  return (

    <div >
      <div className="logo">
        <nav class="navbar bg-light fixed-top">
          <div class="container-fluid">
            <h3 class="navbar-brand" href=" ">Expense</h3>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header" >
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Expense Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                  {loggedIn ? (
                    <div>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "><Link to="/logout" style={{ color: "blue", textDecorartion: 'none' }} onClick={() => {
                          localStorage.removeItem("token")
                          Swal.fire("successfully logged out")
                          props.history.push("/register")
                          handleAuth()
                        }}>Logout</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "> <Link to="/account" style={{ color: "blue", textDecorartion: 'none' }}>Account</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "><Link to="/setting" style={{ color: "blue", textDecorartion: 'none' }}>Setting</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "><Link to="/expense" style={{ color: "blue", textDecorartion: 'none' }}>Expense</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "><Link to="/archive" style={{ color: "blue", textDecorartion: 'none' }}>Archive</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "> <Link to="/profile" style={{ color: "blue", textDecorartion: 'none' }}>Profile</Link></a>
                      </li>
                    </div>
                  ) : (
                    <div>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "><Link to="/" style={{ color: "blue", textDecorartion: 'none' }}>Home</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "> <Link to="/register" style={{ color: "blue", textDecorartion: 'none' }}>Register</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=" "> <Link to="/login" style={{ color: "blue", textDecorartion: 'none' }}>Login</Link></a>
                      </li>
                    </div>
                  )

                  }
                </ul>

              </div>
            </div>
          </div>
        </nav>
        <Route path="/" component={Home} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/login" exact={true} render={(props) => {
          return <Login {...props} handleAuth={handleAuth} />
        }} />
        <Route path="/account" exact={true} render={(props) => {
          return <Account {...props} handleAuth={handleAuth} />
        }} />
        <Route path="/setting" component={Setting} exact={true} />
        <Route path="/expense" component={Expense} exact={true} />
        <Route path="/archive" component={Archive} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
      </div>

    </div>)

}


export default withRouter(NavBar)