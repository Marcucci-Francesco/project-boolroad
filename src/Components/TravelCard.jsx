const TravelCard = (props) => {

    const getDate = (data) => {
        const dataObj = new Date(data)
        return `${dataObj.getDate()}/${dataObj.getMonth()}/${dataObj.getFullYear()}`

    }

    const { destination, startDate, endDate, tourLeader } = props.item
    console.log(destination)

    return (

        <>
            <div className="card h-100">
                <div className="card-header fw-bold fs-3">
                    {destination}
                </div>
                <div className="card-body" style={{ backgroundImage: "URL(https://upload.wikimedia.org/wikipedia/commons/b/bc/Tokyo_Tower_at_night_2.JPG)" }}>
                    <div className="layer"></div>
                    <blockquote className="blockquote fs-6 ">
                        <p><strong>Data di partenza: </strong>{getDate(startDate)}</p>
                        <p><strong>Data di ritorno: </strong>{getDate(endDate)}</p>
                        <footer className="blockquote-footer my-4 text-white">Tour Leader <cite title="Source Title">{tourLeader} </cite></footer>
                    </blockquote>
                </div>
            </div>
        </>
    );
}


export default TravelCard