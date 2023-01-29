import './Footer.css';


function Footer(){
    return(
        <div className='footer'>
            <div className='footer-div'>
                <div className='footer-heading'>Shortly</div>
                <div className='footer-abouts'>
                    <div className='footer-about'>
                        <div className='footer-about-heading'>Features</div>
                        <div className='footer-about-para'>Link Shortening</div>
                        <div className='footer-about-para'>Branded Links</div>
                        <div className='footer-about-para'>Anaytics</div>
                    </div>
                    <div className='footer-about'>
                        <div className='footer-about-heading'>Resources</div>
                        <div className='footer-about-para'>Blog</div>
                        <div className='footer-about-para'>Developers</div>
                        <div className='footer-about-para'>Supports</div>
                    </div>
                    <div className='footer-about'>
                        <div className='footer-about-heading'>Company</div>
                        <div className='footer-about-para'>About</div>
                        <div className='footer-about-para'>Our Teams</div>
                        <div className='footer-about-para'>Career</div>
                        <div className='footer-about-para'>Contacts</div>
                    </div>
                </div>
                <div className='social-medias'>
                   <div className='pinterest'><i className="bi bi-pinterest"></i></div> 
                   <div className='twitter'><i className="bi bi-twitter"></i></div> 
                   <div className='facebook'><i className="bi bi-facebook"></i></div> 
                   <div className='instagram'><i className="bi bi-instagram"></i></div> 
                </div>
            </div>
        </div>
    )
}

export default Footer;