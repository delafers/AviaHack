import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import s from './Scan.module.css'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {GetPDF} from "../../Redux/document_reducer";

class Test extends React.Component {
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
        if (data !== null){
        let id = data.split(/(\:)/)
            console.log(id[2])
        this.props.GetPDF(id[2])
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        if(this.props.Scanned == false) {
            return (
                <div className={s.scan}>
                    <QrReader
                        delay={300}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{width: '100%'}}
                    />
                    <p>{this.state.result}</p>
                </div>
            )
        }else{
            return <Redirect to='/docconf'/>
        }
    }
}

const mapStateToProps = (state) => ({
    Scanned: state.documentW.IsScanned
})

export default connect(mapStateToProps,{GetPDF})(Test)