import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import {connect} from "react-redux";
import pdf from "../../assets/Angliyskiy_M4O-213B-19.pdf"

export default class App extends React.Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <nav>
                    <button onClick={this.goToPrevPage}>Prev</button>
                    <button onClick={this.goToNextPage}>Next</button>
                </nav>

                <div style={{ width: 360 }}>
                    <Document
                        file={pdf}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={360} />
                    </Document>
                </div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    link: state.documentW.link
})
