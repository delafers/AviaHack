import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContain extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}
const mapStateToProps= (state) => ({

})
export default connect(mapStateToProps,{})(HeaderContain)

