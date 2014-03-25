'use strict';

angular.module('AskWeb', []).
    constant('locals', {
        en: {
            home: {
                title: 'Home page title',
                second: 'Second title'
            }
        },
        nl: {
            home: {
                title: 'Welkom pagina titel'
            }
        },
        de: {
            home: {
                title: 'Wilkommen!'
            }
        }
    }).
    run(['$rootScope', 'locals', function ($rootScope, locals) {

        if (!localStorage.getItem('selectedLanguage')) {
            localStorage.setItem('selectedLanguage', 'nl');
        }

        $rootScope.changeLang = function (lang)
        {
            $rootScope.ui = locals[lang];

            $rootScope.lang = lang;

            localStorage.setItem('selectedLanguage', lang);
        };

        $rootScope.changeLang(localStorage.getItem('selectedLanguage'));
    }]);