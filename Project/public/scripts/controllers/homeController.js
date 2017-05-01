import loadTemplate from 'templates';
import User from 'userAuthentication';

const $root = $('#root');

export function loadHandlebars(params) {
    loadTemplate('home')
        .then(template => {
            $root.html(template);
            User.initAuthStatusChange();
        })
        .then(() => {
            setTimeout(() => {
                $root.removeClass('hidden');
            }, 500)
        });
};
