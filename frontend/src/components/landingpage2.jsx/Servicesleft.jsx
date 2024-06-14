const Servicesleft = ({title, description, color, bgcolor, img, id}) => {


    return (
        <>
            <div className={`services-section bg-${bgcolor} hide_2`}  id={id}>
                <div className="services insurance-img">
                <img src={img} alt="" srcset="" />
                </div>
                <div className="services description" >
                <h2 className="h2 section-title text-white text-4xl font-bold">
            {title}
          </h2>
          <p className="text-white">{description}</p>
                </div>
            </div>
        </>
    )
}

export default Servicesleft