'use strict';

angular.module('core')
    .directive('slider', function ($timeout) {
        return {
            restrict: 'EA',
            scope: {
                sliderone: '=sliderone',
                slidertwo: '=slidertwo',
                sliderthree: '=sliderthree'
            },
            replace: true,
            templateUrl: '/modules/core/client/ng/ng-template/slider.html',
            link: function (scope, element, attrs, controller) {

                var backSlider = ['height:100%;width:100%;background:url(', ') no-repeat center scroll;background-color: black;background-attachment: fixed;-webkit-background-size: cover; -moz-background-size: cover;background-size: cover;'],
                    textSlider = ['background: url(', ') no-repeat center scroll;background-size: 250px;width:100%;'];


                scope.sliderStyleOne = backSlider[0] + scope.sliderone[0] + backSlider[1];
                scope.sliderClassOne = 'fullsliderPicIn';
                scope.sliderTextStyleOne = textSlider[0] + scope.sliderone[1] + textSlider[1];
                scope.sliderTextClassOne = 'sliderTextIn';


                scope.fullSlider = 0;
                scope.loop = true;

                /**
                 * Slider Loop
                 */
                scope.$watch('fullSlider', function () {
                    if (scope.loop) {
                        $timeout(function () {

                            if(scope.loop) {
                                nextSlide();
                            }
                        }, 5000);
                    }
                });

                /**
                 * Next/Previous button pressed
                 */
                scope.$watch('$parent.selectNext', function () {
                    if(scope.$parent.selectNext === 'next'){
                        scope.loop = false;
                        nextSlide();
                        scope.$parent.selectNext = '';
                    }

                    if(scope.$parent.selectNext === 'previous'){
                        scope.loop = false;
                        previousSlide();
                        scope.$parent.selectNext = '';
                    }
                });


                var nextSlide = function () {
                    if (scope.fullSlider === 0) {

                        scope.sliderClassOne = 'fullSliderPicOut';
                        scope.sliderTextClassOne = 'sliderTextOut';

                        scope.sliderStyleTwo = 'top:-100vh;' + backSlider[0] + scope.slidertwo[0] + backSlider[1];
                        scope.sliderClassTwo = 'fullsliderPicIn';
                        scope.sliderTextStyleTwo = textSlider[0] + scope.slidertwo[1] + textSlider[1];
                        scope.sliderTextClassTwo = 'sliderTextIn';

                        scope.fullSlider = scope.fullSlider + 1;
                    } else if (scope.fullSlider === 1) {
                        scope.sliderClassTwo = 'fullSliderPicOut';
                        scope.sliderTextClassTwo = 'sliderTextOut';

                        scope.sliderStyleThree = 'top:-200vh;' + backSlider[0] + scope.sliderthree[0] + backSlider[1];
                        scope.sliderClassThree = 'fullsliderPicIn';
                        scope.sliderTextStyleThree = textSlider[0] + scope.sliderthree[1] + textSlider[1];
                        scope.sliderTextClassThree = 'sliderTextIn';

                        scope.fullSlider = scope.fullSlider + 1;
                    } else {
                        scope.sliderClassThree = 'fullSliderPicOut';
                        scope.sliderTextClassThree = 'sliderTextOut';

                        scope.sliderStyleOne = backSlider[0] + scope.sliderone[0] + backSlider[1];
                        scope.sliderClassOne = 'fullsliderPicIn';
                        scope.sliderTextStyleOne = textSlider[0] + scope.sliderone[1] + textSlider[1];
                        scope.sliderTextClassOne = 'sliderTextIn';

                        scope.fullSlider = 0;
                    }
                }

                var previousSlide = function () {
                    if (scope.fullSlider === 0) {

                        scope.sliderClassOne = 'fullSliderPicOut';
                        scope.sliderTextClassOne = 'sliderTextOut';

                        scope.sliderStyleThree = 'top:-200vh;' + backSlider[0] + scope.sliderthree[0] + backSlider[1];
                        scope.sliderClassThree = 'fullsliderPicIn';
                        scope.sliderTextStyleThree = textSlider[0] + scope.sliderthree[1] + textSlider[1];
                        scope.sliderTextClassThree = 'sliderTextIn';

                        scope.fullSlider = 2;
                    } else if (scope.fullSlider === 1) {
                        scope.sliderClassTwo = 'fullSliderPicOut';
                        scope.sliderTextClassTwo = 'sliderTextOut';

                        scope.sliderStyleOne = backSlider[0] + scope.sliderone[0] + backSlider[1];
                        scope.sliderClassOne = 'fullsliderPicIn';
                        scope.sliderTextStyleOne = textSlider[0] + scope.sliderone[1] + textSlider[1];
                        scope.sliderTextClassOne = 'sliderTextIn';

                        scope.fullSlider = scope.fullSlider - 1;
                    } else {
                        scope.sliderClassThree = 'fullSliderPicOut';
                        scope.sliderTextClassThree = 'sliderTextOut';

                        scope.sliderStyleTwo = 'top:-100vh;' + backSlider[0] + scope.slidertwo[0] + backSlider[1];
                        scope.sliderClassTwo = 'fullsliderPicIn';
                        scope.sliderTextStyleTwo = textSlider[0] + scope.slidertwo[1] + textSlider[1];
                        scope.sliderTextClassTwo = 'sliderTextIn';

                        scope.fullSlider = scope.fullSlider - 1;
                    }
                }

            }
        };
    })
    .controller('SliderController', ['$scope',
        function ($scope) {


            $scope.sliderNext = function(){
                $scope.selectNext = 'next';
            }

            $scope.sliderPrevious = function() {
                $scope.selectNext = 'previous';

            }

        }
    ]);
