'use strict';

angular.module('dartpresentationApp')
  .controller('resourcesCtrl', function ($scope) {
    $scope.resources = [
      {
        url: 'http://blogdart.es/2013/10/03/aprender-google-dart/',
        name: 'Primeros pasos con Google Dart'
      },
      {
        url: 'https://docs.google.com/a/sonatalocal.com/file/d/0B0oVxewt0FNyRFJuZmU0eHoxME0/edit?hl=en&forcehl=1﻿',
        name: 'Dart Quick reference'
      },{
        url: 'https://docs.google.com/presentation/d/1Vj1hy88cTwTv9vkCR5MX-Ts0BoCkSTrawXe1qDkwkj8/edit#slide=id.g267fd558d_012',
        name: 'Slides Dart - GDG Almería'
      },{
        url: 'https://docs.google.com/a/sonatalocal.com/file/d/0B0oVxewt0FNyRFJuZmU0eHoxME0/edit?hl=en&forcehl=1﻿',
        name: 'Dart Quick reference'
      },{
        url: 'http://www.slideshare.net/Janamou/dart-flight-school-liberec-hackathon-introduction-to-dart',
        name: 'Introduction to Dart'
      },{
        url: 'https://docs.google.com/presentation/d/1jNEqtA8x8cp4DmwfdmRABjl2j1cwJG35uVHBUvDUiM4/edit#slide=id.p',
        name: 'Introduction to Dart with projects'
      }
    ];

    $scope.quickexamples = [
      {
        url:'https://github.com/Slemgrim/arrow',
        name : 'Bring Dart to your favourite Browser'
      },
       {
        url:'https://github.com/cleandart/clean_my_admin',
        name : 'Graphic Database editor for mongoDB using the Clean-Framework'
      },
       {
        url:' https://github.com/Scarygami/MarvelMatch',
        name : 'Which Marvel character are you really? - Marvel Developer API + Google+ API + Dart + Polymer'
      },
       {
        url:'https://github.com/saral/kickorkiss',
        name : 'Client & Server implementation using Websockets + StageXL animations'
      },
       {
        url:'https://github.com/TheDom/dart-flight-school',
        name : 'A RESTful web service'
      },
      {
        url:'https://github.com/fgutmann/dartflightschool',
        name : 'File Transmit Web Interface'
      },
      {
        url:'https://github.com/TomTasche/BomberBubi',
        name : 'Watch out! He\'s a bubi with bombs. Client & Server implementation using Websockets'
      },{
        url:'https://github.com/cleandart/todolist',
        name : 'Real-time synchonized ToDo-list built with the Clean-Framework'
      },{
        url:'https://github.com/becuz/DartOfLife',
        name : 'Dart of Life'
      }
    ]
  });
