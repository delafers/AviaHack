import React, { useState } from 'react';
import {connect} from "react-redux";
import pdf from "../../assets/Angliyskiy_M4O-213B-19.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import s from "./Document.module.css"
import {Field} from "redux-form";
import Main from "../Main/Main";
import Login from "./DataDoc";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class App extends React.Component {
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
            <div className={s.main}>
                <nav>
                    <button onClick={this.goToPrevPage}>Prev</button>
                    <button onClick={this.goToNextPage}>Next</button>
                </nav>

                <div style={{ width: 360 }}>
                    <Document
                        file="http://localhost:8000/media/documents/2021-04-25_02-08-54_LtJjZKZ.pdf"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={360} />
                    </Document>
                </div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <div>
                </div>
                <Login id={this.props.id}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    link: state.documentW.link,
    id: state.documentW.id
})
export default connect(mapStateToProps,{})(App)