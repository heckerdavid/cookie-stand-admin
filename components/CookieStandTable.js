import { delete_icon } from '../public/delete'

export default function CookieStandTable({ stands, deleteStand, hours }) {
    return (
        <table className="my-8 border-black p-2 bg-violet-300">
        <thead>
            <tr>
                <th className="border border-black">Location</th>
                {hours.map(hour => <th key={hour} className="border border-black px-2">{hour}</th>)}
                <th className="border border-black px-2">Totals</th>
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
        <tr className="border border-black">

            <td className="border border-black pl-4">{info.location} <button className="pl-4" onClick={handleDelete}>{delete_icon}</button></td>

            {info.hourly_sales.map((slot, index) => <td className="border border-black px-3" key={index}>{slot}</td>)}

            <td className="border border-black p-1 px-4 ">{info.hourly_sales.reduce((num, sum) => num + sum, 0)}</td>

        </tr>
    );
}
