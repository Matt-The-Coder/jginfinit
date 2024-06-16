
const Calculateform = ({carType, amount, carParams, setCarType, clientName, preparedPerson,
    clientUnit, clientInfo, initialAmountInput, rateInput, annualPremiumInput, documentStampsInput,
    eVatInput, lgtInput, setClient}) => {
    
         
        //AMOUNTS
       
        const changeValue = () => {
            const initAmount = initialAmountInput.current.value;
            console.log(initAmount)
            const rateAmount = rateInput.current.value;
            const calculatedRateAmount = rateAmount!==""? rateAmount * 0.01: 0 * 0.01;
            const totalAmount = (initAmount == "" ? 0 * calculatedRateAmount : parseFloat(initAmount) * calculatedRateAmount ).toFixed(2); // Format to two decimal places as a string
            const totalAnnualPremium = (
              parseFloat(amount.AnnualPremium) +
              parseFloat(amount.AnnualPremium) * (totalAmount / amount.AnnualPremium)
            ).toFixed(2);
            const totalDocumentStamps = (
              parseFloat(amount.DocumentStamps) +
              parseFloat(amount.DocumentStamps) * (totalAmount / amount.AnnualPremium)
            ).toFixed(2);
            const totalEVat = (
              parseFloat(amount.EVat) +
              parseFloat(amount.EVat) * (totalAmount / amount.AnnualPremium)
            ).toFixed(2);
            const totalLgt = (
              parseFloat(amount.Lgt) +
              parseFloat(amount.Lgt) * (totalAmount / amount.AnnualPremium)
            ).toFixed(2);
            const totalGrossPremium = (
              parseFloat(totalAnnualPremium) +
              parseFloat(totalDocumentStamps) +
              parseFloat(totalEVat) +
              parseFloat(totalLgt)
            ).toFixed(2);
          
            setCarType({
              cInitialAmount: initAmount,
              cPremiumAmount: totalAmount,
              cRate: rateAmount,
              cBodyInjured: carType.cBodyInjured,
              cPropertyDamage: carType.cPropertyDamage,
              cPassengerAccident: carType.cPassengerAccident,
              cAnnualPremium: totalAnnualPremium,
              cDocumentStamps: totalDocumentStamps,
              cEVat: totalEVat,
              cLgt: totalLgt,
              cGrossPremium: parseFloat(totalGrossPremium).toFixed(2),
            });
          };
          
        return(<>
            <div className="carTitle">
            <h1 className="font-bold text-2xl text-center">{carParams == 'pv'? 'Personal Vehicle (5-Seater SEDAN)': 
            carParams == 'cvsuv'?'Commercial Vehicle (7-Seater SUV)':
            carParams == 'cvlt'? 'Commercial Vehicle (Light Truck)':
            carParams == 'cvht'? 'Commercial Vehicle (Heavy Truck':
            'Commercial Vehicle (Heavy Truck + Surcharge)' }</h1>
        </div>
        <div className="calculation w-full flex flex-col justify-center items-center mt-4">
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300">
            <div className=" text-lg font-semibold">
                <p  className="ml-28">Client</p>
                 
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300">
            <div className=" text-lg font-semibold">
                 Name: <input type="text" className="ml-1 text-lg border-none w-3/4 font-[400]" ref={clientName} onChange={()=>{setClient({
                         name: clientName.current.value,
                         unit: clientUnit.current.value,
                         preparedBy: preparedPerson.current.value
                    })}} />
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300">
            <div className=" text-lg font-semibold">
                 Unit: <input type="text" className="ml-1 text-lg border-none w-3/4 font-[400]" 
                 ref={clientUnit} onChange={()=>{setClient({
                    name: clientName.current.value,
                    unit: clientUnit.current.value,
                    preparedBy: preparedPerson.current.value
               })}} />
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300">
            <div className=" text-lg font-semibold flex sm:block">
                 Prepared By: <input type="text" className="ml-1 text-lg border-none w-3/4 font-[400]" 
                 ref={preparedPerson} onChange={()=>{setClient({
                    name: clientName.current.value,
                    unit: clientUnit.current.value,
                    preparedBy: preparedPerson.current.value
               })}}/>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p>Coverage</p>
                 <p>Amount</p>
                 <p>Premiuim</p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <ul className="w-[33%]">
                    <li>- Own Damage</li>
                    <li>- Theft</li>
                    <li>- Acts of Nature</li>
                 </ul>
                 <p className="w-[33%] flex gap-1 items-center">
                    <label htmlFor="">₱ </label>
                    <input type="number" inputMode="numeric" className="rounded-lg w-full" ref={initialAmountInput} onChange={changeValue}/>
                 </p>
                 <p className="w-[33%] text-center flex gap-1 justify-center">
                 <label htmlFor="">₱ </label>
                    {carType.cPremiumAmount}</p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-center items-center">
                Rate: <input type="number" inputMode="numeric"  value={carType.cRate}  
                className="ml-2 rounded-lg"
                ref={rateInput} onChange={changeValue} />
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p className="w-[33%]">- Body Injured</p>
                 <p className="w-[33%]">₱ 200000.00</p>
                 <p className="w-[33%] text-center">₱ {carType.cBodyInjured} </p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p className="w-[33%]">- Property Damaged</p>
                 <p className="w-[33%]">₱ 200000.00</p>
                 <p className="w-[33%] text-center">₱ {carType.cPropertyDamage} </p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p className="w-[33%]">- Passenger Accident</p>
                 <p className="w-[33%]">₱ 200000.00</p>
                 <p className="w-[33%] text-center"> ₱ {carType.cPassengerAccident}</p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p className="w-[33%]"></p>
                 <p className="w-[33%]">ANNUAL PREMIUM</p>
                 <p className="w-[33%] text-center">₱ {carType.cAnnualPremium} </p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p className="w-[33%]"></p>
                 <p className="w-[33%]">Document Stamps</p>
                 <p className="w-[33%] text-center">₱ {carType.cDocumentStamps} </p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p className="w-[33%]"></p>
                 <p className="w-[33%]">E-VAT</p>
                 <p className="w-[33%] text-center">₱ {carType.cEVat}</p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-around items-center">
                 <p className="w-[33%]"></p>
                 <p className="w-[33%]">LGT (Local Government Tax)</p>
                 <p className="w-[33%] text-center">₱ {carType.cLgt} </p>
            </div>
            </div>
            <div className="w-full md:w-3/4 h-auto py-2 px-4 border-b border-b-neutral-300 ">
            <div className=" text-lg font-semibold flex justify-evenly items-center">
                 <p className="w-[33%]"></p>
                 <p className="w-[33%]">GROSS PREMIUM</p>
                 <p className="w-[33%] text-center">₱ {carType.cGrossPremium}</p>
            </div>
            </div>
        </div>

        </>)
    }
    
    export default Calculateform