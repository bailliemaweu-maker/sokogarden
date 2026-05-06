import React from 'react'

const Footer = () => {
  return (
    <div>
      <section class="row bg-secondary p-2 ">
        {/* <!-- child 1  --> */}
        <div class="col-md-4 text-white">
          <h2 class="text-center">About us</h2>
          <p>Ulinzi Jewels was brought to life by the Mwendwa family in 2010. </p>
        </div>
        {/* <!-- child 2  --> */}
        <div class="col-md-4 ">
          <h2 class="text-center text-white">Do you have a Comment?</h2>
          <form action="">
            <input type="email" placeholder="Enter Your E-mail" class="form-control"  />
            <br /><br />
            <textarea name="" id="" rows="5" cols="30" class="form-control"
              placeholder="leave a comment"></textarea>
            <br /><br />
            <input type="submit" value="Send message " class="btn btn-outline-danger" />

          </form>
        </div>
        {/* <!-- child 3  --> */}
        <div class="col-md-11">
          <h2 class="text-center text-white">Stay Connected</h2>
          <a href="https://www.facebook.com">
            <img src="images/download (2).png" alt="fb" width="25%" />
            ,
          </a>
          <a href="https://www.instagram.com">
            <img src="images/download (16).jpeg" alt="in" width="25%" />
          </a>
          ,
          <a href="https://www.x.com">
            <img src="images/download.png" alt="x" width="25%" />
          </a>


          <p>Your can stay connected to us and could be able to tell us what to do to enhance our services to
            you, our customers.</p>
        </div>
      </section>
    </div>
  )
}

export default Footer