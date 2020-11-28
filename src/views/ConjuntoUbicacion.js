import React from 'react';

class ConjuntoUbicacion extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
    }

    render() {
        return (
            <div>
                <label>
                    manual
                </label>
            </div>
        );
    }
}

export default ConjuntoUbicacion;