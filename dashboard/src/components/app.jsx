import React, { Component } from 'react'
import Sidebar from './common/sidebar_components/sidebar';
import Footer from './common/footer';
import Header from './common/header_components/header';

export class App extends Component {

    render() {
        return (
            <div>
                <div className="page-wrapper" >
                    <Header />
                    <div className="page-body-wrapper">
                        <Sidebar />
                        <div className="page-body">
                            {this.props.children}
                        </div>
                            <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
