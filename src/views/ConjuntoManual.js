import React from 'react';
import ImageUploader from 'react-images-upload';

class ConjuntoManual extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (
            <ImageUploader 
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".png"]}
            maxFileSize={5242880}
            style={{ maxWidth: '500px', margin: "20px auto" }}
            withPreview={true} />
        );
    }
}

export default ConjuntoManual;