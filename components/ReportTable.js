export default function ReportTable({ hours, storeList }) {

    function getStoreList() {
        if (storeList.length === 0) {
            return <h2 className="flex mx-auto px-96">No Cookie Stands Available</h2>
        } else {
            return <Table hours={hours} storeList={storeList} />
        }
    }

    return (
        <>
            {getStoreList()}
        </>
  )
}

function Table({ hours, storeList, stands, deleteStand }) {

    return (
        <table className="w-1/2 mx-auto border-4 border-collapse border-gray-500">
        <thead>
            <tr>
                <th className="border border-black">Location</th>
                {hours.map(hour => <th key={hour} className="border border-black">{hour}</th>)}
                <th className="border border-black">Totals</th>
            </tr>
        </thead>
        <tbody>
            {stands.map(store => (
                <CookieStandRow key={store.id} info={store} deleteStand={deleteStand} />))}
            <tr>
                <td>Totals</td>
            </tr>
        </tbody>
    </table>
    )
}

function CookieStandRow({ info, deleteStand }) {

    function clickHandler() {
        deleteStand(info.id);
    }

    if (info.hourly_sales.length == 0) {
        // bunk data
        info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <tr>
            <td>{info.location} <button onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg></button></td>
            {info.hourly_sales.map((slot, index) => <td key={index}>{slot}</td>)}
            <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
    );
}