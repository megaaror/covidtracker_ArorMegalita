import React, {Component} from 'react';
import './Global.css';
import axios from 'axios';
import NumberFormat from 'react-number-format';


//import Components
import WorldStats from '../../components/WorldStats/WorldStats'

export default class Indo extends Component {

    state = {

            result: {
                "TotalConfirmed":0,
                "TotalDeaths":0,
                "TotalRecovered":0,
                "ActiveCase":0
            }
    }

    async componentDidMount() {
        const indoData = await axios.get("https://indonesia-covid-19.mathdro.id/api")
        let corona = indoData.data

        this.setState({
            result: {
                "Confirmed": corona.jumlahKasus,
                "Deaths":corona.meninggal,
                "Recovered":corona.sembuh,
                "ActiveCase": corona.jumlahKasus - (corona.sembuh + corona.meninggal)
            }
        })
    }

    render() {

        const Stats = Object.keys(this.state.result).map((key, index) => {
            return <WorldStats 
                        key={index}
                        about={key}
                        total={<NumberFormat value={this.state.result[key]} thousandSeparator={true} displayType="text" />} />
        })
    
        return (
            <div className= "Global">
                <h1 className="heading">Covid-19 Tracker</h1>
                <p className="description">Let's Check Information About Covid-19</p>

                <div className="world-stats">

                    {Stats}

                </div>
            </div>
        )

    }

}