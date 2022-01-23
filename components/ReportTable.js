export default function ReportTable({ hours, storeList }) {

    function getStoreList() {
        if (storeList.length === 0) {
            return <h1>No Current Stores</h1>
        } else {
            return <h1>{storeList[0].location} </h1>
        }
    }

    return (
        <>
            {getStoreList()}
        </>
  )
}