(function(document) {
  'use strict';

  var site = document.querySelector('#site');

  window.addEventListener('WebComponentsReady', function() {
  
  });

  addEventListener('paper-header-transform', function(e) {
    var name = document.querySelector('.site-name');
    var middleContainer = document.querySelector('.middle-container');
    var bottomContainer = document.querySelector('.bottom-container');
    var detail = e.detail;
    var heightDiff = detail.height - detail.condensedHeight;
    var yRatio = Math.min(1, detail.y / heightDiff);
    var maxMiddleScale = 0.50;
    var scaleMiddle = Math.max(maxMiddleScale, (heightDiff - detail.y) / (heightDiff / (1-maxMiddleScale))  + maxMiddleScale);
    var scaleBottom = 1 - yRatio;
    Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);
    Polymer.Base.transform('scale(' + scaleBottom + ') translateZ(0)', bottomContainer);
    Polymer.Base.transform('scale(' + scaleMiddle + ') translateZ(0)', appName);
  });

  site.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#drawer');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

})(document);
