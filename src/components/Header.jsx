

const Header = () => {
  return (
    <>
        <div className="header">

            <div className="logo w-25">
                <div className="img">
                    {/* <img src="images/logo.PNG" alt="logo" width="40" /> */}
                </div>
                <div className="logo_text pt-2">
                    <h4 className="text-white"><span className="text-warning">M</span>ystrix</h4>
                </div>
            </div>

            <div className="nav w-50">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about_section">About</a></li>
                    <li><a href="#video_section">Products</a></li>
                    <li><a href="#team_section">Team</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#section_5">Contact</a></li>
                </ul>
            </div>

            <div className="buttons w-25">
                <button className="btn btn-outline-light">Login</button>
            </div>


        </div>
        
    <div className="responsive_header p-3">
        <div className="sides d-flex justify-content-between">
            <div className="logodiv d-flex align-items-center gap-2">
                <div className="logo_img">
                    {/* <img src="images/logo.PNG" alt="logo" width="30" /> */}
                </div>
                <div className="logo_text">
                    <h3 className="text-white"><span className="text-warning">M</span>ystrix</h3>
                </div>
            </div>
        </div>
        
        <div className="menu_bar">
          <ul>
              <li><a href="#"><i className="fa-solid fa-house"></i></a></li>
              <li><a href="#about_section"><i className="fa-solid fa-user"></i></a></li>
              <li><a href="#team_section"><i className="fa-solid fa-people-group"></i></a></li>
              <li><a href="#video_section"><i className="fa-brands fa-envira"></i></a></li>
              <li><a href="#section_5"><i className="fa-solid fa-id-badge"></i></a></li>
          </ul>
      </div>
    </div>


   

    </>

  )
}

export default Header