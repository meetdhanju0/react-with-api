



const About=()=>{
    return(<>
    
     {/* about section  */}

  <div className="about_section layout_padding">
    <div className="container  ">

      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img className="img-box" src="images/about-img.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box text-white">
            <div className="heading_container">
              <h2>
                We Are Feane
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

   {/* end about section  */}
    
    </>)
}

export default About;