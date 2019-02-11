import React from 'react';
import axios from 'axios'


class widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 3,
            rows: 2,
            navigation_left:0,
            blocs: [
                { text: "bloc1" },
                { text: "bloc2" },
                { text: "bloc3" },
                { text: "bloc4" },
                { text: "bloc5" },
                { text: "bloc6" },
                { text: "bloc7" },
                { text: "bloc8" },
                { text: "bloc9" },
                { text: "bloc10" },
                { text: "bloc11" },
                { text: "bloc12" },
                { text: "bloc13" },
                { text: "bloc14" },
                { text: "bloc15" },
                { text: "bloc16" },
                { text: "bloc17" },
                { text: "bloc18" },
                { text: "bloc19" },
                { text: "bloc20" },
                { text: "bloc21" },
                { text: "bloc22" },
                { text: "bloc23" },
                { text: "bloc24" },
                { text: "bloc25" },
                { text: "bloc26" },
                { text: "bloc27" },
            ],
        }
    }

    async componentDidMount() {
        console.log(document.getElementsByClassName('navigation_container')[0].style.width)
    }

    navigate(navigation_number) {
        this.setState({navigation_left : this.state.navigation_left + navigation_number},()=>{
            document.getElementsByClassName('navigation_container')[0].style.transform = `translateX(${this.state.navigation_left}00vw)`
        })
    }


    render() {
        return (
            <div>
                <div className="navbar">
                    <span>LOGO</span>
                    <button onClick={()=>{this.navigate(1)}}>Previous</button>
                    <button onClick={()=>{this.navigate(-1)}}>Next</button>
                </div>
                <div className="blocs_container">
                    <div className="navigation_container" style={{"width" : `${Math.ceil(this.state.blocs.length / ( this.state.columns * this.state.rows))}00vw`}}>
                        {this.state.blocs.map((bloc) => (
                            <div className="bloc" style={{"width" : `calc(100vw / ${this.state.columns})`,"height" : `calc(100% / ${this.state.rows})`}}>{bloc.text}</div>
                        ))}
                    </div>
                </div>
                <div className="footer">
                    <span>LOGO2</span>
                    <button>voir le profil</button>
                </div>
            </div>
        )
    }
}

export default widget;
