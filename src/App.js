import React from 'react';
import './App.css';
import FileViewer from "react-file-viewer";

class App extends React.Component {
    componentDidMount() {
        let url_string = window.location.href;
        let url = new URL(url_string);
        this.setState({
            loadUrl: url.searchParams.get("loadUrl"),
            mimeType: url.searchParams.get("mimeType")
        },()=>{
            console.log(this.state)
        } );

    }

    onError(e) {
        console.log(e, `Error in file viewer`);
    }

    constructor(props) {
        super(props);
        this.state = {
            loadUrl: "",
            mimeType: ""
        }
    }


    render() {
        const {loadUrl} = this.state;
        const urlSplits = loadUrl ? loadUrl.split(".") : "";
        const fileType = loadUrl ? urlSplits[urlSplits.length-1] : "";
        return (
            <div data-test="appComponent">
                <FileViewer
                    fileType={fileType}
                    filePath={loadUrl}
                    errorComponent={(<p>Error loading</p>)}
                    onError={this.onError}/>
            </div>
        );
    }
}

export default App;
