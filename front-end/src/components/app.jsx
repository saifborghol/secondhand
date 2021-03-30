import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'

// Custom Components
import HeaderOne from './common/headers/header-one';
import FooterOne from "./common/footers/footer-one";

// ThemeSettings
import ThemeSettings from "./common/theme-settings"



class App extends Component {



    render() {
        return (
            <div>
                <HeaderOne logoName={'logo.svg'}/>
                {this.props.children}
                <FooterOne logoName={'logo.svg'}/>

                <ThemeSettings />

            </div>
        );
    }
}

export default withTranslate(App);
