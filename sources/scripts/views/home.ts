import scope from '../scope';
import Base from './baseView';

scope.views.Home = Base.extend({
    template: require('templates/pages/home.hbs'),
    name: 'home',
    behaviors: {},
    onAttach: function () {
        this.render();
    },
    ui: {
        replayButton: '[data-sound-button]',
        homeVideo: '[data-video]'
    },
    events: {
        'click @ui.replayButton': 'replayVideo'
    },
    replayVideo: function () {
        this.ui.homeVideo.get(0).muted = !this.ui.homeVideo.get(0).muted;
    }
});

export default scope.views.Home;
