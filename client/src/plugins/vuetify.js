import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#607d8b',
                secondary: '#00bcd4',
                accent: '#f44336',
                error: '#f44336',
                warning: '#ff9800',
                info: '#03a9f4',
                success: '#8bc34a',
            },
        },
    },
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },


});
