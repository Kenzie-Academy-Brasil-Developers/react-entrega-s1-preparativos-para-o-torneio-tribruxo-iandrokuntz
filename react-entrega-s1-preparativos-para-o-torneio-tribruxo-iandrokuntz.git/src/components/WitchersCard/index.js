import "./style.css"

const WitchersCard = ({item}) => {


    return(
        <div className="Card">
            
            <div className={`${item.house} house`}>
                <div className="witchersCard">
                    <h4>{item.name}</h4>
                    <p>{item.gender}</p>
                    <p>{item.species}</p>
                </div>
            </div>
        </div>
    )
}

export default WitchersCard