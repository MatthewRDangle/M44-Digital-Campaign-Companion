const m = require('mithril');
import Page from '../classes/Page.js';

export const page = new Page('/preview');
page.setPage(function() {
    return [
        m('div', {style: 'width: 100vw; height: 100vh;'},
            m('div.preview',
                m('img.preview_img', {
                    src: 'lib/images/placeholder.PNG',
                    alt: '',
                    onclick: function() {
                        m.route.set('/warSim')
                    }
                })
            )
        )
    ]
});