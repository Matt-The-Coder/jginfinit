import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Calculateform from "../../components/quotepage/Calculateform";
import '../../assets/quotepage.css'
import { Breadcrumbs } from "../../components/dashboard/Breadcrumbs";
const Quotepage = () => {
    const {carParams} = useParams()
    const [carType, setCarType] = useState({
        cInitialAmount: 0,
        cPremiumAmount: 0,
        cRate: 1.3,
        cBodyInjured: 0,
        cPropertyDamage: 0,
        cPassengerAccident: 0,
        cAnnualPremium: 0,
        cDocumentStamps: 0,
        cEVat:0,
        cLgt:0,
        cGrossPremium:123
    })
    const [amount, setAmount] = useState({
        InitialAmount: 0,
        PremiumAmount: 0,
        Rate: 1.3,
        BodyInjured: 0,
        PropertyDamage: 0,
        PassengerAccident: 0,
        AnnualPremium: 0,
        DocumentStamps: 0,
        EVat:0,
        Lgt:0,
        GrossPremium:123
    })
    useEffect(()=>{
       if(carParams == 'pv'){ setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.30.toFixed(2),
            cBodyInjured: 420.00.toFixed(2),
            cPropertyDamage: 1245.00.toFixed(2),
            cPassengerAccident: 'Free',
            cAnnualPremium: 1665.00.toFixed(2),
            cDocumentStamps: 208.13,
            cEVat: 199.80.toFixed(2),
            cLgt:1.67,
            cGrossPremium:2074.60.toFixed(2)
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0.00.toFixed(2),
            Rate: 1.30.toFixed(2),
            BodyInjured: 420.00.toFixed(2),
            PropertyDamage: 1245.00.toFixed(2),
            PassengerAccident: 'Free',
            AnnualPremium: 1665.00.toFixed(2),
            DocumentStamps: 208.13,
            EVat: 199.80.toFixed(2),
            Lgt:1.67,
            GrossPremium:2074.60.toFixed(2)
        })
    
    }
        else if(carParams == 'cvsuv') {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.3,
            cBodyInjured: 510.00.toFixed(2),
            cPropertyDamage: 1320.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 1930.00.toFixed(2),
            cDocumentStamps: 241.25,
            cEVat: 231.60.toFixed(2),
            cLgt:1.93,
            cGrossPremium:2404.78
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 1.3,
            BodyInjured: 510.00,
            PropertyDamage: 1320.00,
            PassengerAccident: 100.00,
            AnnualPremium: 1930.00,
            DocumentStamps: 241.25,
            EVat: 231.60,
            Lgt:1.93,
            GrossPremium:2404.78
        })
    }
        else if(carParams == 'cvlt') {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.3,
            cBodyInjured: 510.00.toFixed(2),
            cPropertyDamage: 1320.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 1930.00.toFixed(2),
            cDocumentStamps: 241.25,
            cEVat: 231.60.toFixed(2),
            cLgt:1.93,
            cGrossPremium:2404.78
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 1.3,
            BodyInjured: 510.00.toFixed(2),
            PropertyDamage: 1320.00,
            PassengerAccident: 100.00,
            AnnualPremium: 1930.00,
            DocumentStamps: 241.25,
            EVat: 231.60,
            Lgt:1.93,
            GrossPremium:2404.78
        })
    }
        else if(carParams == 'cvht') {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 1.3,
            cBodyInjured: 660.00.toFixed(2),
            cPropertyDamage: 1395.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 2155.00.toFixed(2),
            cDocumentStamps: 269.38,
            cEVat: 258.60,
            cLgt:2.15,
            cGrossPremium:2685.13
        })
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 1.3,
            BodyInjured: 660.00,
            PropertyDamage: 1395.00,
            PassengerAccident: 100.00,
            AnnualPremium: 2155.00,
            DocumentStamps: 269.38,
            EVat: 258.60,
            Lgt:2.15,
            GrossPremium:2685.13
        })
    }
        else {
            setCarType({
            cInitialAmount: 0,
            cPremiumAmount: 0.00.toFixed(2),
            cRate: 2.0.toFixed(2),
            cBodyInjured: 792.00.toFixed(2),
            cPropertyDamage: 1674.00.toFixed(2),
            cPassengerAccident: 100.00.toFixed(2),
            cAnnualPremium: 2566.00.toFixed(2),
            cDocumentStamps: 320.75,
            cEVat: 307.92,
            cLgt:2.57,
            cGrossPremium:3197.24
        }) 
        setAmount({
            InitialAmount: 0,
            PremiumAmount: 0,
            Rate: 2,
            BodyInjured: 792.00,
            PropertyDamage: 1674.00,
            PassengerAccident: 100.00,
            AnnualPremium: 2566.00,
            DocumentStamps: 320.75,
            EVat: 307.92,
            Lgt:2.57,
            GrossPremium:3197.24
        }) 
    }
    }, [carParams])
   const printComponent = () => {
    window.print()
   }
   //AMOUNT
   const initialAmountInput = useRef(null)
   const rateInput = useRef(null)
   const annualPremiumInput = useRef(null)
   const documentStampsInput = useRef(null);
   const eVatInput = useRef(null);
   const lgtInput = useRef(null);
      // CLIENT
      const clientName = useRef(null)
      const clientUnit = useRef(null)
      const preparedPerson = useRef(null)
   const [client, setClient] = useState({
    name: '',
    unit: '',
    preparedBy: ''
})
   const clientReset = ()=>{
    clientName.current.value = ''
    clientUnit.current.value = ''
    preparedPerson.current.value =''    
    setClient({
        name: '',
        unit: '',
        preparedBy: ''
    })
     
   }
   const resetValue = () => {
        initialAmountInput.current.value = ''
        setCarType({
            cInitialAmount: amount.InitialAmount,
            cPremiumAmount: amount.PremiumAmount,
            cRate: amount.Rate,
            cBodyInjured: amount.BodyInjured,
            cPropertyDamage: amount.PropertyDamage,
            cPassengerAccident: amount.PassengerAccident,
            cAnnualPremium: amount.AnnualPremium,
            cDocumentStamps: amount.DocumentStamps,
            cEVat: amount.EVat,
            cLgt:amount.Lgt,
            cGrossPremium:amount.GrossPremium
        })
        clientReset()

   }
    return(
        <>
    <Breadcrumbs title={"List Of Brands"} subtitle={"Quote"}/>
    <div className="quotePage">
    <Calculateform carType={carType} amount={amount} carParams={carParams}
    setCarType={setCarType} clientName={clientName} clientUnit={clientUnit}
    preparedPerson={preparedPerson} initialAmountInput={initialAmountInput}
    rateInput={rateInput} annualPremiumInput={annualPremiumInput} documentStampsInput={documentStampsInput}
    eVatInput={eVatInput} lgtInput={lgtInput} setClient={setClient}/>
  <div className="buttonForms flex gap-2">
<button onClick={printComponent} className="flex items-center gap-2 py-2 px-2 border border-neutral-300 rounded-lg cursor-pointer">
    
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5">
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 7H7V6h10v1zm0 12H7v-6h10v6zm2-12V3H5v4H1v8.996C1 17.103 1.897 18 3.004 18H5v3h14v-3h1.996A2.004 2.004 0 0 0 23 15.996V7h-4z"
      fill="#800000"
    />
  </g>
</svg>
<label htmlFor="">Print</label>
    </button>


    <button onClick={resetValue} className="flex items-center gap-1 py-2 px-2 border border-neutral-300 rounded-lg cursor-pointer ">
    <svg viewBox="0 0 25 25" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path
      d="M4.56189 13.5L4.14285 13.9294L4.5724 14.3486L4.99144 13.9189L4.56189 13.5ZM9.92427 15.9243L15.9243 9.92427L15.0757 9.07574L9.07574 15.0757L9.92427 15.9243ZM9.07574 9.92426L15.0757 15.9243L15.9243 15.0757L9.92426 9.07574L9.07574 9.92426ZM19.9 12.5C19.9 16.5869 16.5869 19.9 12.5 19.9V21.1C17.2496 21.1 21.1 17.2496 21.1 12.5H19.9ZM5.1 12.5C5.1 8.41309 8.41309 5.1 12.5 5.1V3.9C7.75035 3.9 3.9 7.75035 3.9 12.5H5.1ZM12.5 5.1C16.5869 5.1 19.9 8.41309 19.9 12.5H21.1C21.1 7.75035 17.2496 3.9 12.5 3.9V5.1ZM5.15728 13.4258C5.1195 13.1227 5.1 12.8138 5.1 12.5H3.9C3.9 12.8635 3.92259 13.2221 3.9665 13.5742L5.15728 13.4258ZM12.5 19.9C9.9571 19.9 7.71347 18.6179 6.38048 16.6621L5.38888 17.3379C6.93584 19.6076 9.54355 21.1 12.5 21.1V19.9ZM4.99144 13.9189L7.42955 11.4189L6.57045 10.5811L4.13235 13.0811L4.99144 13.9189ZM4.98094 13.0706L2.41905 10.5706L1.58095 11.4294L4.14285 13.9294L4.98094 13.0706Z"
      fill="#800000"
    />{" "}
  </g>
</svg>
<label htmlFor="">
    Reset
</label>
        </button>
  </div>

</div>
    
</>
    )
}

export default Quotepage;