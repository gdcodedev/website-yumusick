import Backbone from 'backbone';
import scope from '../scope';
import Base from './baseView';

let firstLoop = true;

scope.views.Layout = Base.extend({
    name: 'layout',
    el: '#main',
    partials: {
        content: {
            region: '#site-content'
        },
        header: {
            region: '#site-header',
            partial: require('../partials/Header')
        },
        footer: {
            region: '#site-footer',
            partial: require('../partials/Footer')
        }
    },
    initialize: function () {
        const self = this;
        let last: string;

        self.getRegion('content').on('show', (layout, view) => {
            !firstLoop && $('body').addClass('page-changed');
            $('body')
                .removeClass(last)
                .addClass((last = `${view.name}-page`));

            setTimeout(() => {
                firstLoop = false;
                $('body').removeClass('page-changed').removeClass('on-loading').addClass('on-loaded');
                $('.loading').addClass('loaded');

                $('#preloader').delay(350).fadeOut('slow');
            }, 500);
        });
    },
    go: function (view, callback) {
        const self = this;

        self.partials.content.instance = view;
        $('body').addClass('on-loading');

        self.load()
            .done((response) => {
                if (response.error) return Backbone.history.navigate('error', { trigger: true });

                self.populate();
                scope.app.started = true;

                callback && callback();
            })
            .catch(() => callback && callback());
    }
});

export default scope.views.Layout;
