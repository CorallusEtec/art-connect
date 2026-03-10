export default function InputDate({ value, setValue }) {
    function handleData(value) {
        const data = value.target.value;
        if(data.split("-")[0] > new Date().getFullYear() || data.split("-")[0] < 1900) {
            setValue(new Date());
        } else {
            setValue(new Date(data+"T03:24:00"));
        }
    }
    return (
        <input
        onChange={(e)=>handleData(e)}
        value={value.toISOString().split("T")[0]}
        max={new Date().toISOString().split("T")[0]}
        type="date"
        className="bg-stone-200 p-2 border border-stone-300 rounded-lg text-lg text-stone-600 cursor-pointer" />
    )
}