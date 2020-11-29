import React from 'react';
import Carousel from '../components/Carousel'
import SplitPane, { Pane } from 'react-split-pane';
import {withRouter} from 'react-router-dom'


import '../css/index.css'


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };   
        this.goView = this.goView.bind(this)      
    }

    goView(view) {
        this.props.history.push(view)
      }

    render() {
        return (
            <body>
                <div id="container">
                     <Carousel/>        
                </div>
                <SplitPane split="vertical"
                defaultSize="100%"
                >
                    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} >
                        
                        <form>
                            <button onClick={() => this.goView("/conjuntoManual")}>Subir Imágen</button>
                        </form>
                    </div>
                </SplitPane>
            </body>
        );
    }
}

export default withRouter(Welcome);
