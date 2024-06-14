import { useRef } from 'react';
import '../../assets/servicespage.css'
// import "../assets/landingpage.css";
import Servicesleft from '../../components/landingpage2.jsx/Servicesleft'
import Servicesright from '../../components/landingpage2.jsx/Servicesright'
import Herosection from '../../components/landingpage2.jsx/Herosection'
import Navbar from '../../components/landingpage/Navbar';
const Servicespage = () => {



    return (

        <>

<Navbar />
            <div className="services-section-list mt-40">
                <Herosection />

                <Servicesleft title="MOTOR CAR INSURANCE"
                    description="Comprehensive coverage that protects you
financially if your car gets damaged, stolen, or if you're
involved in an accident. It helps cover repair costs,
medical expenses, and liabilities."
                    color="paragraph_white"
                    bgcolor="primary_red" 
                    img="/images/Website/services2/2.jpg"
                    id="motor"/>

                <Servicesright title="INLAND MARINE
INSURANCE"
                    description="In land marine insurance provides coverage for goods, 
                    equipment, and materials in transit over land, offering protection 
                    against loss or damage outside of traditional property policies."
                    color="#264D63"
                    img="/images/Website/services2/3.jpg"
                    bgcolor="white" 
                    id="inland"/>

                <Servicesleft title="MARINE INSURANCE"
                    description="Marine cargo insurance is a policy that protects
                    goods in transit by sea, covering damage, loss, or
                    theft during shipment."
                    color="white"
                    img="/images/Website/services2/4.jpg"
                    bgcolor="primary_red"
                    id="marine" />

                <Servicesright title="FIRE INSURANCE"
                    description="Protects you financially if your property or
                    belongings are damaged or destroyed by
                    fire. It covers the cost of repairs or
                    replacements, giving you peace of mind
                    against fire-related losses."
                    color="#264D63"
                    img="/images/Website/services2/5.jpg"
                    bgcolor="white" 
                    id="fire"/>

                <Servicesleft title="CONTRACTOR’S
ALL RISK INSURANCE"
                    description="Comprehensive policy that covers contractors
                    and builders against various risks during
                    construction projects, including damage to the
                    property, third-party liability, and unexpected
                    events like fire or theft."
                    color="white"
                    img="/images/Website/services2/6.jpg"
                    bgcolor="primary_red"  
                    id="contractor"/>

                <Servicesright title="COMPREHENSIVE
GENERAL INSURANCE"
                    description="Provides broad protection for businesses against
                    claims of bodily injury, property damage, and
                    personal injury arising from their operations or
                    premises."
                    color="#264D63"
                    img="/images/Website/services2/7.jpg"
                    bgcolor="white"
                    id="comprehensive"/>

                <Servicesleft title="PERSONAL
ACCIDENT INSURANCE"
                    description="Provides financial protection if you're injured or
                    disabled due to an accident. It typically covers
                    medical expenses, income loss, and sometimes
                    pays a lump sum for permanent disability or
                    death caused by an accident."
                    color="white"
                    img="/images/Website/services2/8.jpg"
                    bgcolor="primary_red" 
                    id="personal" />

                <Servicesright title="SURETY BOND
INSURANCE"
                    description="A three-party agreement where a surety
                    provides financial assurance to a second party
                    that a third party will fulfill their obligations,
                    protecting against financial loss if the third
                    party fails to perform."
                    color="#264D63"
                    img="/images/Website/services2/9.jpg"
                    bgcolor="white" 
                    id="surety"/>

                <Servicesleft title="TRAVEL
INSURANCE"
                    description="Travel insurance is a safety net for your trips, covering
                    unexpected mishaps like medical
                    emergencies, trip cancellations, and lost luggage."
                    color="white"
                    img="/images/Website/services2/10.jpg"
                    bgcolor="primary_red" 
                    id="travel" />

            </div>

        </>
    )
}


export default Servicespage