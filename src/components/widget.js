import React from 'react';
import axios from 'axios'


class widget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 3,
            rows: 2,
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
            ],
        }
    }

    async componentDidMount() {

    }




    render() {
        return (
            <div>
                <div className="navbar">
                    <span>LOGO</span>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
                <div className="blocs_container">
                    <div className="navigation_container">
                        {this.state.blocs.map((bloc) => (
                            <div className="bloc">{bloc.text}</div>
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
