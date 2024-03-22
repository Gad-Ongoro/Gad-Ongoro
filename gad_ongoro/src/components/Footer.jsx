import React from 'react'

function Footer() {
	return (
		<div>
			<div class="footer">
            {/* <img src="https://i.pinimg.com/474x/51/f0/7a/51f07a9274c577f6df844fe1f579fe0c.jpg" alt="NA" id="back-img"></img> */}

            <div class="contact" id="contact">
                <div class="socials">
                    <a href="mailto:gadongoro1@gmial.com;"> 
                        <img src="https://cdn-icons-png.flaticon.com/128/10829/10829119.png" alt="gadongoro1@gmail.com" class="Gmail"></img>
                    </a>

                    <a href="https://wa.me/254798436255" target="_blank" rel="noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="WhatsApp"  class="WhatsApp"></img>
                    </a>

                    <a href="https://www.linkedin.com/in/gad-ongoro-4a31b4215/" target="_blank" rel="noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="LinkedIn"  class="LinkedIn"></img>
                    </a>
                    
                    <a href="https://twitter.com/gad_ongoro" target="_blank" rel="noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Twitter" class="Twitter"></img>
                    </a>
                    
                    <a href="https://github.com/Gad-Ongoro" target="_blank" rel="noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="GitHub" class="GitHub"></img>
                    </a>
                </div>
            </div>
            <p className='text-dark'> &copy; Gad Ongoro </p>
        </div>
		</div>
	)
};

export default Footer;