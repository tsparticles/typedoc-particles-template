let { ParameterType } = require('typedoc/dist/lib/utils/options/declaration');
let plugin = require('./bin/plugin');

const { PLUGIN_NAME, OPTIONS_NAME } = require('./bin/constants');

module.exports = (PluginHost) => {
    const app = PluginHost.owner

    app.options.addDeclaration({
        help: "Particles Pages Plugin: Particles Pages Plugin configuration or the path to the pages configuration file",
        name: OPTIONS_NAME,
        type: ParameterType.Mixed,
    });

    app.renderer.addComponent(PLUGIN_NAME, new plugin.ParticlesPlugin(app.renderer));
}