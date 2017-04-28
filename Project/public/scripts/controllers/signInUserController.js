import { load as loadTemplate } from 'templates';

const $root = $('#root');

function get(params) {
    loadTemplate('signIn')
        .then(template => {
            $root.html(template());
        });
}

export {
    get
}