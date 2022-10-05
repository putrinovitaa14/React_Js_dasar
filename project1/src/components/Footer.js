import React from "react"

// class component 
class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h2>MY FOOTER </h2>
                {this.props.paragraf()}
            </div>
        )
    }
}

export default Footer;