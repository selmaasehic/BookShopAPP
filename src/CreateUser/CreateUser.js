function CreateUser() {
    return(
        <>
        <div className="bg-slate-50 w-1/2 ml-9 mt-9 rounded-xl p-6">
            <div></div>
            <label className="block mb-2 font-bold text-center font-assistant text-md">First Name</label>
            <input className="block w-1/2 rounded-lg m-auto bg-orange-100 p-3 mb-3 font-assistant" placeholder="Enter First Name" />
            <label className="block mb-2 font-bold text-center font-assistant text-md">Last Name</label>
            <input className="block w-1/2 rounded-lg m-auto p-3 bg-orange-100 mb-3 font-assistant" placeholder="Enter Last Name" />
            <label className="block mb-2 font-bold text-center font-assistant text-md">Number</label>
            <input className="block w-1/2 rounded-lg m-auto bg-orange-100 p-3 mb-3 font-assistant" placeholder="Enter Number" />
            <label className="block mb-2 font-bold text-center font-assistant text-md">E-mail</label>
            <input className="block w-1/2 rounded-lg bg-orange-100 m-auto p-3 mb-3 font-assistant" placeholder="Enter E-mail" />
            <label className="block mb-2 font-bold font-assistant text-md text-center font-bold font-assistant text-md">Address</label>
            <input className="block w-1/2 rounded-lg bg-orange-100 p-3 mb-3 m-auto font-assistant" placeholder="Enter Address" />
        <div>
            <button className="">Save</button>
            <button>Cancle</button>
        </div>
        </div>
        </>
    );
}

export default CreateUser;