import React from 'react'

const Footer = () => {
  return (
    <div>
      <section class="row bg-secondary p-4 ">
        {/* <!-- child 1  --> */}
        <div class="col-md-4 text-white">
            <h2 class="text-center">About us</h2>
            <p>Ulinzi Jewels was brought to life by the Kilozo family in 2010. They are known for having Mining
                companies. We have employees with much experience in the business. We have an online shop upon which the
                customer can pay on delivery. Our main brach is located in the CBD at Hazina Towers. We also have a
                branch in Machakos next to chicken inn, in Mtwapa opposite Total Mtwapa and in Eldoret at Rupas Mall
                second floor opposite Java.</p>
        </div>
        {/* <!-- child 2  --> */}
        <div class="col-md-4 ">
            <h2 class="text-center text-white">Contact us</h2>
            <form action="">
                <input type="email" placeholder="Enter Your E-mail" class="form-control"/>
                <br/><br/>
                <textarea name="" id="" rows="5" cols="30" class="form-control"
                    placeholder="leave a comment"></textarea>
                <br/><br/>
                <input type="submit" value="Send message " class="btn btn-outline-danger"/>

            </form>
        </div>
        {/* <!-- child 3  --> */}
        <div class="col-md-3">
            <h2 class="text-center text-white">Stay Connected</h2>
            <a href="https://www.facebook.com">
                <img src="images/download (2).png" alt="fb" width="25%"/>
            </a>
            <a href="https://www.instagram.com">
                <img src="images/download (16).jpeg" alt="in" width="25%"/>
            </a>
            <a href="https://www.x.com">
                <img src="images/download.png" alt="x" width="25%"/>
            </a>

            
            <p>Your can stay connected to us and could be able to tell us what to do to enhance our services to
                you, our customers.</p>
        </div>
      </section>
    </div>
  )
}

export default Footer