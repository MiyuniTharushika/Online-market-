import React from 'react'
import Logo from '../assets/images/footerlogo.png'

const Footer = () => {
    return (
        <div className='footer py-3'>
            <div className='d-flex flex-column justify-column-center align-items-center pt-3'>
                <i className='bi bi-envelope display-3 text-white'></i>
                <h3 className='text-white mt-3'>Stay informed about special offers</h3>
                <h5 className='text-white fst-italic mt-2'>Subscribe to the newsletter</h5>
                <div class="input-group mb-3 mt-4 w-50">
                    <input type="text" class="form-control p-2" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-warning px-4" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-2">
                            
                              <div className=''>
                                <img src={Logo} alt="" className='w-75 h-75'/>
                                </div>  
                        </div>

                        <div class="col-2">
                            <h5 className='text-white'>About</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About Us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Certificate</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Market</a></li>

                            </ul>
                        </div>

                        <div class="col-2">
                            <h5 className='text-white'>Products</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Vegetables</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Mix Vegetables</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Fruits</a></li>

                            </ul>
                        </div>

                        <div class="col-2">
                            <h5 className='text-white'>Contact</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">+94 712536987</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">onlinemarket@gmail.com</a></li>

                            </ul>
                        </div>

                        
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p className='text-white'>&copy; 2022 Company, Inc. All rights reserved.</p>
                        <ul class="list-unstyled d-flex">
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                            <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"></svg></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer
