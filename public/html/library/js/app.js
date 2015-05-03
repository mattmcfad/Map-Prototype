/*jslint browser: true */
/*global $, jQuery, alert, console, Foundation5Boilerplate:true */

var console = console || { log: function() { 'use strict'; } };



window.Foundation5Boilerplate = window.Foundation5Boilerplate || {};

(function (s) {

    'use strict';

    s.App = function () {

        return {
            initialized: false,
            elements: {},
            settings: {
                debug: false
            },

            init: function () {


                if (this.settings.debug) { console.log('init()'); }

                if (this.initalized) { return false; }
                this.initialized = true;

                //dom elements
                this.elements.body =  $('body', 'html');
                this.elements.debug = $('#txtDebug', this.elements.body);
                // this.elements.currentYear = $('.current-year', this.elements.footer);

                //configure debug based on config file
                if (this.elements.debug.val()) {
                    this.settings.debug = true;
                    this.initDebug();
                }

                //initialize foundation
                $(document).foundation();

                // //populate current year for copyrite in footer
                // var d = new Date();
                // this.elements.currentYear.html(d.getFullYear());


            },


            initDebug: function () {

                if (this.settings.debug) { console.log('initDebug()'); }

                $(this.elements.body).append('<div id="debug-message"></div>');
                $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                $(window).resize(function () {
                    $('#debug-message').empty();
                    $('#debug-message').append('<p class="small">small</p><p class="medium">medium</p><p class="large">large</p><p class="exlarge">extra large</p>');
                    $('#debug-message').append('<p>width: ' + window.innerWidth + '</p>');
                });

            }

        };

    };

}(Foundation5Boilerplate));



$(document).ready(function() {
    'use strict';
    Foundation5Boilerplate.App().init();
});




