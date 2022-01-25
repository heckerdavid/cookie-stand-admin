import { delete_icon } from '../public/delete'

export default function CookieStandTable({ stands, deleteStand, hours }) {
    return (
        <table className="my-8 border-black p-2">
        <thead>
            <tr>
                <th className="border border-black">Location</th>
                {hours.map(hour => <th key={hour} className="border border-black">{hour}</th>)}
                <th className="border border-black">Totals</th>
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


    function handleDelete() {
        deleteStand(info.id);
    }

    if (info.hourly_sales.length == 0) {
        // bunk data
        info.hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    return (
        <tr>
            <td>{info.location} <button onClick={handleDelete}>{delete_icon}</button></td>
            {info.hourly_sales.map((slot, index) => <td key={index}>{slot}</td>)}
            <td>{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>
        </tr>
    );
}
