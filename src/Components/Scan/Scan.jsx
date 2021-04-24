import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import s from './Scan.module.css'

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

        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div className={s.scan}>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '100%' }}
                />
                <p>{this.state.result}</p>
            </div>
        )
    }
}

export default Test