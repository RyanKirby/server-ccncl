'use strict';


angular.module('resources')
    .directive('imgResp', function ($window, $timeout) {
      return {
        restrict: 'EA',
        scope: {
          imageurl: '=imageurl',
          imageurlsecondary: '=imageurlsecondary',
          imageclass: '=imageclass',
          imageratio: '=imageratio'
        },
        replace: true,
        template: '<div class="img-responsive {{imageclass}}" style="{{imagestyle}}"></div>',
        link: function (scope, element, attrs, controller) {
          var func = function () {
            $timeout(function () {
              var height = '',
                  background = '/images/background.jpg';

              if (scope.imageurl) {
                background = scope.imageurl;
              } else if (scope.imageurlsecondary) {
                background = scope.imageurlsecondary;
              }

              var ratw = 4, rath = 3;//Set defaut ration to 4:3

              /*Set user ratio*/
              if (scope.imageratio) {
                var valid = false;
                var ratio = scope.imageratio;
                var ratioSplit = ratio.split(':');

                if (ratioSplit.length === 2) {
                  ratw = Math.round(parseInt(ratioSplit[0]));
                  rath = Math.round(parseInt(ratioSplit[1]));
                  if (ratw > 0 && ratw < 100 && rath > 0 && rath < 100) {
                    valid = true;
                  }
                }

                if (!valid) {
                  console.log('img-resp: Error, invalid ratio');
                  console.log('img-rep: Ratio set to 4:3');
                  ratw = 4;
                  rath = 3;
                }

              }

              var style = 'width:100%;background:url(' + background + ') no-repeat center center;background-size: cover;';
              var w = element[0].offsetWidth;

              var h = (w / ratw) * rath;
              height = 'height:' + Math.round(h) + 'px;';


              scope.imagestyle = height + style;
            }, 100);
          }

          func()

          angular.element($window).bind('resize', function () {
            func()
            scope.$digest();
          });
        }
      };
    })
    .filter("trustUrl", ['$sce', function ($sce) {
      return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
      };
    }]);;
