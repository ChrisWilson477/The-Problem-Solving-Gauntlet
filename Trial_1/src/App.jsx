import React, { Component } from 'react';
import TextComponent from './TextComponent.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textData: [ 'something',  'another thing to say',  'blah blah blah',  'words words words',  'even more important things'],
        }
        this.alertWindow = this.alertWindow.bind(this);
    }

    componentDidMount() {
        this.alertWindow;
    }

    alertWindow(text) {
        alert(text);
    }

    render() {
        return (
            <div className="textCompContainer">
                <h1 className="textCompHeaderText">This app will alert some text</h1>
                <TextComponent someText={this.state.textData} alertWindow={this.alertWindow} />
            </div>
        )
    }

}

export default App;



//Things I changed:
//index.html -----
//'root' is in a body tag, needs to be in  a div tag inside the body
//App.jsx -----
//Bind the alertWindow function
//Remove the template text in it
//change alertWindow being passed to TextComponent
//Textbox.jsx -----
// change the props.func() to () => func(text)
//put props.text in brackets (or just text if you remove props)
//TextComponent
//must remove brackets for arrow function because only returns one line
//fix text = to just be currentItem
//webpack -----
//remove the exclusion of node modules on webpack