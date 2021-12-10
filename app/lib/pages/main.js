const m = require('mithril');
const {ipcRenderer} = require('electron');
import Page from '../js/page.js'

export const page = new Page('/main');
page.setPage(function() {
    return m('div.mainMenu', [
        m('div.mainMenu_header', [
            m('div.mainMenu_header_icon'),
            m('h1.mainMenu_header_label', 'Campaign Companion')
        ]),
        m('nav.mainMenu_nav', [
            m('div.mainMenu_nav_link',
                {onclick: function() { page.navigate('/campaign') }}, 'Campaigns'),
            m('div.mainMenu_nav_link',
                {onclick: function() { ipcRenderer.send('close-app') }}, 'Exit to Desktop')
        ])
    ]);
});