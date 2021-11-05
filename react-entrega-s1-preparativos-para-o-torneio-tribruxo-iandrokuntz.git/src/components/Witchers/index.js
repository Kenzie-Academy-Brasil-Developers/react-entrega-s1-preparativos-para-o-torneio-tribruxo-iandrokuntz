import WitchersCard from "../WitchersCard"
import { useState } from "react"
import "./style.css"

const Witchers = ({witcher, setWitcher}) => {

    const [tournament, setTournament] = useState([])

    const randomWitcher = () => Math.floor(Math.random() * witcher.length)

    const participants = () => {
        
        if (tournament.length === 3) {
            
            return
          }

        let student = witcher[randomWitcher()]
        
        let list = []

        let filteredWitchers = witcher

        list.push(student)

        let lastHouse = list[list.length -1].house

        for (let i = 1; i < 3; i++){
            lastHouse = list[list.length - 1].house;
            // eslint-disable-next-line no-loop-func
            filteredWitchers = filteredWitchers.filter((item) => item.house !== lastHouse)
            student = filteredWitchers[Math.floor(Math.random() * filteredWitchers.length)]

            list.push(student)
        }

        setTournament([...list])
    }


    return(
        <div>

            <h3>Only three winners</h3>

            <button onClick={participants}>Show Winners</button>    
            <div className="map">
                {tournament.map((item, index) => (
                    <WitchersCard key={index} item={item} />
                ))}
            </div>
        </div>

    )
}

export default Witchers
