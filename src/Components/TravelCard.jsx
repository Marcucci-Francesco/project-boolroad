const TravelCard = (props) => {

    const { destination, startDate, endDate, tourLeader } = props.item
    console.log(destination)

    return (

        <>
            <div className="card h-100">
                <div className="card-header fw-bold fs-3">
                    {destination}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0 fs-6">
                        <p><strong>Data di partenza: </strong>{startDate}</p>
                        <p><strong>Data di ritorno: </strong>{endDate}</p>
                        <footer className="blockquote-footer">Tour Leader <cite title="Source Title">{tourLeader} </cite></footer>
                    </blockquote>
                </div>
            </div>
        </>
    );
}


export default TravelCard