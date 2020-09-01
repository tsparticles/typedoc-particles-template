let { ParameterType } = require('typedoc/dist/lib/utils/options/declaration');
let plugin = require('./bin/particles/plugin')
module.exports = (PluginHost) => {
    const app = PluginHost.owner
    /*
     * Expected array:
     *  interface Page {
     *    label: string
     *    url: string
     *  }
     */
    app.options.addDeclaration({ name: 'pages', type: ParameterType.Mixed });

    app.converter.addComponent('particles-theme', plugin.ExternalModuleMapPlugin);
}