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

function Table({hours, storeList}) {

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
            {storeList.map(store => (
                <tr key={store.id}>
                    <td className="pl-2 border border-black">{store.location}</td>
                    {store.hourly_sales.map(sale => <td key={sale}className="pl-2 border border-black">{sale}</td>)}
                    <td className="pl-2 border border-black">{store.hourly_sales.reduce((a,b) => a + b, 0)}</td>
                </tr>
            ))}
            <tr>
                <td>Totals</td>
            </tr>
        </tbody>
    </table>
    )
}