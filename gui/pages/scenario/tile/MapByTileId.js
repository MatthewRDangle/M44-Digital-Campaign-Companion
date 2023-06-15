const m = require('mithril');

import Body from "../../../components/Body.js";
import Button from "../../../components/Button.js";
import Background from "../../../components/Background.js";
import Page from '../../../models/Page.js';
import ScenarioDefinitionStore from "../../../stores/ScenarioDefinition.store.js";

export const page = new Page('/scenario/tile/:tileId/map', (initialVnode) => {


    return {
        view: (vNode) => {
            const {attrs} = vNode;
            const {activeScenarioDefinition} = ScenarioDefinitionStore;

            const tileId = attrs.tileId;
            const [row, column] = tileId.split('-');
            const tile = activeScenarioDefinition.tiles[row][tileId];


            return m(Body, [
                m(Background),
                m('div', {className: 'w-full h-full p-12'},
                    m('img', {
                        className: 'w-full h-full object-cover shadow-lg shadow-background-500/50',
                        src: tile.battleMap?.src || '',
                        alt: tile.battleMap?.alt || ''
                    })
                ),
                m('div', {className: 'absolute top-16 right-16'},
                    m(Button, {
                        shadow: true,
                        inverse: true,
                        onclick: function() {
                            m.route.set('/scenario')
                        }
                    }, 'Close')
                )
            ])
        }
    }
});