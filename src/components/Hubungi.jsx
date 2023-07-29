import "./Contact.css";

function Hubungi() {
  return (
    <>
      <footer id="contact">
        <div className="heading-footer">
          <h1>Contact</h1>
          <p>
            Kalian bisa menemukanku dibeberapa social media populer ini, jika
            ada kepentingan silahkan hubungi saya
          </p>
        </div>
        <div className="social-media">
          <div className="instagram">
            <a href="https://www.instagram.com/arielhutomoo___">
              <i class="fa-brands fa-instagram" id="instagram"></i>
              <label htmlFor="instagram"> Instagram</label>
            </a>
          </div>
          <div className="whatsapp">
            <a href="https://wa.me/6281356717270">
              <i class="fa-brands fa-whatsapp" id="whatsapp"></i>
              <label htmlFor="whatsapp"> Whatsapp</label>
            </a>
          </div>
          <div className="email">
            <a href="mailto:arielhutomo028@gmail.com">
              <i class="fa-solid fa-envelope" id="email"></i>
              <label htmlFor="email"> Gmail</label>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Hubungi;
