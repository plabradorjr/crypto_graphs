import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButoon from './ConfirmButton';
import Page from '../Shared/Page.js';
import CoinGrid from "./CoinGrid";

export default function(){
    return (
        <Page name="settings">
            <WelcomeMessage />
            <ConfirmButoon /> 
            <CoinGrid />
        </Page>
    )
}