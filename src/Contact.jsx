import React from 'react';

const Contact = () => {
    return (
        <>
        <div className="contactus" id="contactid" >
        <div className="container headings text-center">
            <h1 className="text-center font-weight-bold">CONTACT US</h1>
            <p className="text-capitalize pt-1">We're Here To help and answer any question you might have. we look forward to hearing from you </p>
        </div>
      <div className="container detail">
          <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                 
                  <div>
                      <h6>Email Us</h6>
                      <p>letschat@epicon.ca</p>
                  </div>
                  
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                 
                 <div>
                     <h6>Phone Number</h6>
                     <p>(416) 738-2475</p>
                 </div>
                 
             </div>
             <div className="col-lg-4 col-md-4 col-12">
                 
                 <div>
                     <h6>Address</h6>
                     <p>123 Toronto Street E. Toronto ON, Canada. L5D 8G5</p>
                 </div>
                 
             </div>

          </div>
          <div className="row">
              <div className="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
                <form action="/action_page.php">
                    <div className="form-group">
                     
                      <input type="text" className="form-control" placeholder=" Enter your name " id="username" required autocomplete="off"/>
                    </div>
                    <div className="form-group">                        
                        <input type="email" className="form-control" placeholder="Enter email" id="email" required autocomplete="off"/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter phone number" id="Mobile" required autocomplete="off"/>
                      </div>
                      <div className="form-group">
                       
                        <textarea className="form-control" rows="4" placeholder="Enter your message" id="comment"></textarea>
                      </div>
                    <div className="form-group form-check">
                      <label className="form-check-label"></label>
                        <input className="form-check-input" type="checkbox"/> Remember me
                      
                    </div>
                    <div className="d-flex justify-content-center form-button">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
              </div>
          </div>
      </div>
      </div>

  

        </>
    )
}

export default Contact;