const m = require('mithril');

import Page from '../../../models/Page.js';
import BattleResultCalc from "../../../components/battle/BattleResultCalc.js";
import TitleBar from "../../../components/TitleBar.js";
import Body from "../../../components/Body.js";
import Background from "../../../components/Background.js";
import ScenarioDefinitionStore from "../../../stores/ScenarioDefinition.store.js";

export const page = new Page('/scenario/tile/:tileId/battle', (initialVnode) => {


    return {
        view: (vNode) => {
            const {attrs} = vNode;
            const {activeScenarioDefinition} = ScenarioDefinitionStore;

            const tileId = attrs.tileId;
            const [row, column] = tileId.split('-');
            const tile = activeScenarioDefinition.tiles[row][tileId];


            return m(Body, [
                m(Background),
                m(TitleBar, 'Battle Results'),
                m('div', {className: 'mt-8'},
                    m(BattleResultCalc, {tile: tile})
                )
            ])
        }
    }
});