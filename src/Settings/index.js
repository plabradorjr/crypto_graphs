import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButoon from './ConfirmButton';
import Page from '../Shared/Page.js';

export default function(){
    return (
        <Page name="settings">
            <WelcomeMessage />
            <ConfirmButoon /> 
        </Page>
    )
}