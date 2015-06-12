// ==UserScript==
// @name cmd+up
// @description Small UserScript for GitHub to navigate to the parent folder of the current folder or file.
// @version 0.1.0
// @match https://github.com/*
// ==/UserScript==
(function () {
  document.addEventListener('keydown', function (e) {
    if (!e.metaKey || e.keyCode !== 38) {
      return;
    }
    var p = window.location.pathname.split('/');
    p.pop();
    (p.slice(-1) == 'tree' && p.splice(-1)) || (p.slice(-2, -1) == 'blob' && p.splice(-2, 1, 'tree'));
    (p = p.join('/')) && p && (window.location.href = p);
  });
}());
