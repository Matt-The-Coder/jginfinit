const Servicesright = ({title, description, color, bgcolor, img, id}) => {


    return (
        <>
            <div className={`services-section bg-${bgcolor} hide_3`}  id={id}>

                <div className="services description" >
                <h2 className="h2 section-title text-secondary_orange text-4xl font-bold" >
            {title}
          </h2>
          <p className="text-paragraph_black">{description}</p>
                </div>
                <div className="services insurance-img">
                <img src={img} alt="" srcset="" />
                </div>
            </div>
        </>
    )
}

export default Servicesright