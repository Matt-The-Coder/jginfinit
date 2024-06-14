const Herosection = ()=> {
    return (
        <>
            <div className="services-section">
        <div className="services heroFade hide">
        <h2 className="h2 section-title text-center text-primary_red text-4xl font-bold" >
            OUR SERVICES
          </h2>
          <p style={{fontSize:"20px"}} className="description">
          We adhere strictly to
industry regulations and hold
accreditations that signify our commitment to maintaining
the highest standards in the
insurance industry.
          </p>
          <div className="insurance-list-container">
          <div className="insurance-list">
            <a href="/services#motor">
            <div className="insurance bg-primary_red" >
            <ion-icon name="checkbox-outline" ></ion-icon>
            <p>MOTOR CAR INSURANCE</p>
            </div>
            </a>
            <a href="/services#inland">
            <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>INLAND MARINE INSURANCE</p>
            </div>
            </a>
            <a href="/services#marine">
            <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>MARINE CARGO INSURANCE</p>
            </div>
            </a>
             <a href="/services#fire">
            <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>FIRE INSURANCE</p>
            </div>
            </a>
            <a href="/services#travel">
            <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>TRAVEL INSURANCE</p>
            </div>
            </a> 
          </div>
          <div className="insurance-list">
          <a href="/services#contractor">
          <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>C.A.R.I.</p>
            </div>
            </a>
            <a href="/services#comprehensive">
            <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline" ></ion-icon>
            <p>COMPREHENSIVE GENERAL INSURANCE</p>
            </div>
            </a>
            <a href="/services#personal">
            <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>PERSONAL ACCIDENT INSURANCE</p>
            </div>
            </a>
            <a href="/services#surety">
            <div className="insurance bg-primary_red">
            <ion-icon name="checkbox-outline"></ion-icon>
            <p>SURETY BOND INSURANCE</p>
            </div>
            </a>
</div>
          </div>


        </div>
        <div className="hero-services heroFade hide" >
            <img src="/images/Website/services2/1.jpg" alt="" srcset="" />
        </div>
    </div>
        </>
    )
}

export default Herosection