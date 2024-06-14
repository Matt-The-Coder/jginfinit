
import { useParams, Link } from "react-router-dom";
import {RingLoader} from 'react-spinners'
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../../components/dashboard/Search";
import { Breadcrumbs } from "../../components/dashboard/Breadcrumbs";
const Carlist = ({setLoading, loading}) => {
  const hostServer = import.meta.env.VITE_HOSTSERVER
  const { brand } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [numItems, setNumItems] = useState(5)
  const [search, setSearch] = useState("")
  const [car, setCar] = useState([])

  const getCarInfo = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${hostServer}/${brand}`)
      const data = res.data
      setCar(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getCarInfo()
  }, [])

  const lastIndexItem = currentPage * numItems
  const firstIndexItem = lastIndexItem - numItems

  const data = car.slice(firstIndexItem, lastIndexItem)

  const changePageNumber = (pageNumber) => {
    console.log(pageNumber)
    setCurrentPage(pageNumber)
  }

  const showQuoteModal = (id) => {
    const modal = document.querySelector(`#quote${id}`)
    if(modal.classList.contains("hidden")){
      modal.classList.remove('hidden')
    } 
  }

  const closeQuoteModal = (id) => {
    const modal = document.querySelector(`#quote${id}`)
      modal.classList.add('hidden')
  }
  const numOfPages = []
  for (let i = 1; i < Math.ceil(car.length / numItems); i++) {
    numOfPages.push(i)
  }
  console.log(numOfPages)
  return (
    <>
    {loading && 
    <>
    <div className="grid place-items-center w-lvw h-lvh absolute top-0">
<RingLoader
    className="!fixed z-50 "
  color="#800000"
  size={"15em"}
/>
</div>
<div className="loading fixed bg-neutral-600 w-lvw h-lvh top-0 z-50 opacity-45"></div>
    </>}

    <Breadcrumbs title={"List Of Brands"} subtitle={brand.toUpperCase()}/>
      {/* Search */}
      <div className="py-3 px-4">
        <div className="relative max-w-xs">
          <label className="sr-only">Search</label>
          <input
            onChange={(e) => { setSearch(e.currentTarget.value) }}
            value={search}
            type="text"
            name="hs-table-with-pagination-search"
            id="hs-table-with-pagination-search"
            className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Search for items"
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
            <svg
              className="size-4 text-gray-400 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={11} cy={11} r={8} />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </div>
      {/* End Search */}
      <div className="p-1.5 min-w-full ">
        <div className="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">

          <div className=" overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Vehicle ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Brand
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Variant
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Year
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Market Value
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {data.filter((val, i) => {
                  return val.v_year?.toString()?.includes(search) || val.v_market_value?.toString()?.includes(search)
                    || val.v_variant?.includes(search) || val.v_model?.includes(search)
                }).map((val, i) => {
                  return (

                    <tr key={val.v_id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {val.v_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {val.v_brand}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {val.v_model}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {val.v_variant}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {val.v_year}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {val.v_market_value}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                        onClick={()=>{showQuoteModal(val.v_id)}}
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                        >
                          Quote
                        </button>
                        <div className=" right-0 hidden absolute py-5 px-5 rounded-lg border-solid border-2 border-netural-700 h-auto w-auto bg-white" id={`quote${val.v_id}`}>
                          <div className="flex justify-end cursor-pointer" onClick={()=> {closeQuoteModal(val.v_id)}}>
                        <svg viewBox="0 0 24 24" fill="none" 
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <g id="Menu / Close_LG">
      {" "}
      <path
        id="Vector"
        d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
        stroke="#000000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
    </g>{" "}
  </g>
</svg>
</div>
                        <ul className="flex flex-col items-start gap-2">
                          <Link to="/admin/quote/pv" target="_blank" className="underline"><li>Personal Vehicle (5-Seater SEDAN)</li></Link>
                          <Link to="/admin/quote/cvsuv" target="_blank" className="underline"><li>Commercial Vehicle (7-Seater SUV)</li></Link>
                          <Link to="/admin/quote/cvlt" target="_blank" className="underline"><li>Commercial Vehicle (Light Truck)</li></Link>
                          <Link to="/admin/quote/cvht" target="_blank" className="underline"><li>Commercial Vehicle (Heavy Truck)</li></Link>
                          <Link to="/admin/quote/cvhts" target="_blank" className="underline"><li>Commercial Vehicle (Heavy Truck + Surcharge)</li></Link>                          
                        </ul>
                        </div>
                      </td>
                    </tr>
                  )
                })}


              </tbody>
            </table>
          </div>
          <div className="py-1 px-4">
            <nav className="flex items-center justify-center space-x-1 lg:justify-end">

            {numOfPages.map((val, i) => {
  return (
    <div key={i} className={currentPage == val?`flex`:`hidden`}>
      <button
        onClick={() => {
          changePageNumber(currentPage !== 1 ? currentPage - 1 : null);
        }}
        disabled={currentPage === 1}
        type="button"
        className={`p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 ${
          currentPage === val ? 'block' : 'hidden'
        }`}
      >
        <span aria-hidden="true">«</span>
        <span className="">Previous</span>
      </button>
      <button
        key={i}
        className={`min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 ${
          currentPage === val ? 'block' : 'hidden'
        }`}
      >
        {val}
      </button>
      <button
        disabled={currentPage == numOfPages.length? true: false}
        onClick={() => {
          changePageNumber(currentPage === val ? currentPage + 1 : null);
        }}
        type="button"
        className={`p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 ${
          currentPage === val ? 'block' : 'hidden'
        }`}
      >
        <span className="">Next</span>
        <span aria-hidden="true">»</span>
      </button>
    </div>
  );
})}


            </nav>
          </div>
        </div>
      </div>


    </>
  );
};

export default Carlist;
