'use strict';

/**
 * @ngdoc directive
 * @name soulfitApp.directive:progressArc
 * @description
 * # progressArc
 */
angular.module('soulfitApp')
  .directive('progressArc', ['progressArcDefaults', function (progressArcDefaults) {
	return {
        restrict: 'E',
        scope: {
            size:             '@', // Size of element in pixels.
            strokeWidth:      '@', // Width of progress arc stroke.
            stroke:           '@', // Color/appearance of stroke.
            counterClockwise: '@', // Boolean value indicating
            complete:         '&', // Expression evaluating to float [0.0, 1.0]
            background:       '@'  // Color of the background ring. Defaults to null.
        },
        compile: function (element, attr) {

            progressArcDefaults(attr);

            return function (scope, element, attr) {
                // Firefox has a bug where it doesn't handle rotations and stroke dashes correctly.
                // https://bugzilla.mozilla.org/show_bug.cgi?id=949661
                scope.offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90;
                var updateRadius = function () {
                    scope.strokeWidthCapped = Math.min(scope.strokeWidth, scope.size / 2 - 1);
                    scope.radius = Math.max((scope.size - scope.strokeWidthCapped) / 2 - 1, 0);
                    scope.circumference = 2 * Math.PI * scope.radius;
                };
                scope.$watchCollection('[size, strokeWidth]', updateRadius);
                updateRadius();
            };
        },
        template:
            '<svg ng-attr-width="{{size}}" ng-attr-height="{{size}}">' +
                '<circle class="ngpa-background" fill="none" ' +
                    'ng-if="background" ' +
                    'ng-attr-cx="{{size/2}}" ' +
                    'ng-attr-cy="{{size/2}}" ' +
                    'ng-attr-r="{{radius}}" ' +
                    'ng-attr-stroke="{{background}}" ' +
                    'ng-attr-stroke-width="{{strokeWidthCapped}}"' +
                    '/>' +
                '<circle class="ngpa-progress" fill="none" ' +
                    'ng-attr-cx="{{size/2}}" ' +
                    'ng-attr-cy="{{size/2}}" ' +
                    'ng-attr-r="{{radius}}" ' +
                    'ng-attr-stroke="{{stroke}}" ' +
                    'ng-attr-stroke-width="{{strokeWidthCapped}}"' +
                    'ng-attr-stroke-dasharray="{{circumference}}"' +
                    'ng-attr-stroke-dashoffset="{{(1 - complete()) * circumference}}"' +
                    'ng-attr-transform="rotate({{offset}}, {{size/2}}, {{size/2}})' +
                        '{{ (counterClockwise && counterClockwise != \'false\') ? \' translate(0, \' + size + \') scale(1, -1)\' : \'\' }}"' +
                    '/>' +
            '</svg>'
    };
  }]);
