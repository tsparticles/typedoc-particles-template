let { ParameterType } = require('typedoc/dist/lib/utils/options/declaration');
let plugin = require('./bin/particles/plugin');

const { THEME_NAME } = require('./bin/particles/src/constants');

module.exports = (PluginHost) => {
    const app = PluginHost.owner

    app.options.addDeclaration({
        help: "Particles Links Plugin: Particles Links Plugin configuration or the path to the links configuration file",
        name: 'links', type: ParameterType.Mixed
    });

    app.options.addDeclaration({
        help: "Particles Pages Plugin: Particles Pages Plugin configuration or the path to the pages configuration file",
        name: OPTIONS_NAME,
        type: ParameterType.Mixed,
    });

    app.converter.addComponent(THEME_NAME, plugin.ExternalModuleMapPlugin);

    app.renderer.addComponent(PLUGIN_NAME, new PagesPlugin(app.renderer));
}