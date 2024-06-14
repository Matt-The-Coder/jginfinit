import { Link } from "react-router-dom"

export const Breadcrumbs = ({title, subtitle}) => {

    return(
        <>
        {subtitle? <>
            <div className="breadcrumbs flex p-4 border-b border-neutral-300 rounded-md sticky top-20 bg-white z-50">
                <ul className="flex gap-2">
                    <Link to='/admin'>
                    <li className="text-gray-500 font-semibold text-sm hover:text-primary_red cursor-pointer">{title}</li>
                    </Link>
                    <li className="font-semibold text-gray-500 text-sm">{'>'}</li>
                    <li className="font-semibold text-gray-800 text-sm">{subtitle}</li>
                </ul>
                </div>  
        </>:
                    <div className="flex p-4 border-b border-neutral-300 rounded-md sticky top-20 bg-white z-50">
                    <ul className="flex gap-2">
                        <li className="font-semibold text-gray-800 text-sm">{title}</li>
                        <li className="font-semibold text-gray-800 text-sm">{'>'}</li>
                    </ul>
                    </div>  
        }
  
   
        </>
    )
}