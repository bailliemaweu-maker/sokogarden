import React from 'react'

const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-md navbar-light  ">
                    {/* <!-- brand  --> */}
                    <a href="/" class="navbar-brand text-warning"> Ulinzi Jewels </a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- a division containing our links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav ">
                            <a href="" class="nav-link active  "> Home </a>
                            <a href="Customdesign.html" class="nav-link active"> Custom Design </a>
                            <a href="location.html" class="nav-link active"> Location </a>
                            <a href="contact.html" class="nav-link active">Contact</a>
                        </div>
                    </div>

                </nav></div>
  )
}

export default Navbar
