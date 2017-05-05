import loadTemplate from 'templates';
import * as data from 'data';

const $root = $('#root');
const uid = localStorage['authkey'];
let cachedJoinedLobbies = [];

export function loadHandlebars(params) {
    return new Promise((resolve, reject) => {
        data.getAllLobies(`/users/${uid}/joinedLobbies`)
            .then((lobbies) => {
                if (lobbies === null) {
                    resolve(loadTemplate('joined-lobbies')
                        .then(template => {
                            $root.html(template);
                        }));
                }
                else {
                    lobbies = Object.values(lobbies);

                    const lobbiesObj = {
                        lobbies: lobbies
                    };

                    cachedJoinedLobbies = lobbies.slice();

                    return lobbiesObj;
                };
            })
            .then((lobbies) => {
                resolve(loadTemplate('joined-lobbies', lobbies)
                    .then(template => {
                        $root.html(template);
                    }));
            });
    });
};


export {
    cachedJoinedLobbies
};