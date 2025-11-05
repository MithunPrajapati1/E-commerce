// example:
var Temp=()=>{
    return(
        <div className="w-1/2 px-10 py-10 bg-slate-300 ">
            <p className="flex flex-col">
                <label for="t1" className="text-red-800">Enter name</label>
                <input type="text" className="border" id="t1"/>
            </p>
            <p>
                Select Gender
            </p>
            <p>
                <input type="radio" name="gender" value="Male" id="r1"/> <label for="r1">Male</label>
                <input type="radio" name="gender" value="Female" id="r2"/> <label for="r2">Female</label>
            </p>
        </div>
    )
}
export default Temp;