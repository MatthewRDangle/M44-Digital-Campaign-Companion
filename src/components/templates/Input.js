const m = require("mithril");
const classNames = require("classnames");

import {whiteSVGFilter} from "../../utilities/hexToSVGFilter.js";


const Button = (initialVnode) => {


    return {
        view: (vNode) => {
            const {attrs, children} = vNode;


            return m('div', {className: 'w-full'}, [
                !!children && m('label', {className: 'ml-2'}, children),
                m('div', {className: 'flex w-full p-2 text-font bg-background border border-solid border-interaction rounded-md'}, [
                    !!attrs.icon && m('img', {
                        className: 'w-2 h-full object-cover',
                        style: `filter: ${whiteSVGFilter}`,
                        src: attrs.icon?.src,
                        alt: attrs.icon?.alt}
                    ),
                    m('input', {
                        className: 'w-full h-full m-0 bg-transparent border-0',
                        name: attrs.name,
                        type: attrs.type ?? 'text',
                        step: attrs.step,
                        min: attrs.min,
                        max: attrs.max,
                        disabled: !!attrs.disabled,
                        defaultValue: attrs.defaultValue,
                        onchange: attrs.onchange
                    })
                ]),
            ])

            // return (
            //     m('input', {
            //         className: classNames(''),
            //         type: attrs.type ?? 'text',
            //         disabled: attrs.disabled ?? false
            //     }, vNode.children)
            // )
        }
    }
}

export default Button;