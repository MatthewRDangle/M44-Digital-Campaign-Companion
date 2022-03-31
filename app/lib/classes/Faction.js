export default class Faction {
    constructor(name, {...options}) {
        if (!name)
            throw Error('Unable to create faction without a name.');

        this.name = name;
        this.color = options.color || 0x95B07E;
    }
}