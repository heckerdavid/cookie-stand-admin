
export default function CookieStandTable({ stands, deleteStand }) {
    return (
        <table className="my-8 border-black p-2">
            <thead>
                <tr>
                    <th>Location</th>
                    <th>6 am</th>
                    <th>7 am</th>
                    <th>8 am</th>
                    <th>9 am</th>
                    <th>10 am</th>
                    <th>11 am</th>
                    <th>12 pm</th>
                    <th>1 pm</th>
                    <th>2 pm</th>
                    <th>3 pm</th>
                    <th>4 pm</th>
                    <th>5 pm</th>
                    <th>6 pm</th>
                    <th>7 pm</th>
                    <th>totals</th>
                </tr>
            </thead>
            <tbody>
                {stands.map(stand => (
                    <CookieStandRow  key={stand.id} info={stand} deleteStand={deleteStand} />
                ))}
            </tbody>
        </table>
    );
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
            <td>{info.location} <button onClick={clickHandler}><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg></button></td>
            {info.hourly_sales.map((slot, index) => <td key={index}>{slot}</td>)}
            <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
    );
}
