import React from 'react';
//import App from './App';
import './dociye.css'
import Loader from './loader'


class DecideSport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            error: ''
        };



        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({
                    latitude: position.coords.latitude
                })
            },
            (err) => {
                console.log(err)
                this.setState({
                    error: err.message
                })
            }
        )

    }

    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    DicideSport(lat) {
        const curretMount = new Date().getMonth();
        const summer={
            Text: "yuzme zamanidir",
            iconName:'sun'
        }
        const winter={
            Text: "snowboard sezonu geldi",
            iconName:'snowFlake'//<i> teginin cllasinin adidir eyni olani saxliyib muxdelifleri yazdiririq
        }
        if (lat < 0) {
            return curretMount < 8 && curretMount > 3 ? winter : summer;
           
            //guney yarim kure
        } else {
            return curretMount > 8 || curretMount < 3 ? winter : summer;
            //kuzey yarim kure
        }
    }

    componentWillUnmount() {
        this.setState({
            latitude: 0
        })
    }



    render() {
        const { latitude, error } = this.state
        console.log(this.DicideSport(latitude));
        if (latitude !== 0 && !error) {
            const sport = this.DicideSport(latitude);
            const Mystyle={margin: '30px'}
            return (
                <div style={Mystyle} className={`${sport.iconName}-wrapper decide-sport-container`}>
                    <h2 className="ui header" >
                         <i className={`${sport.iconName} outline icon`}></i>
                        <div className="content">
                              {sport.Text}
                        </div>
                    </h2>
                </div>
            )
        } else if (latitude === 0 && error) {
            <div>
                Error: {error}
            </div>
        }

        return (
          <Loader
          text="yukleniyor"/>
        )
    }
}
//{`${sport.iconName} outline icon`} yeni JS kodu sport.iconNamede yazilanlari serte
// gore yazacaq arxasinda ise cllasda eyni olan
// yazini yazacayiq

export default DecideSport;