// mdBook additional-js for reader.lambert.wang (path in book.toml is relative to this directory).
// Adds a "back to main site" icon link to the menu bar of every page.
(function () {
    var bar = document.querySelector('#menu-bar .right-buttons');
    if (!bar) return;
    var a = document.createElement('a');
    a.className = 'icon-button';
    a.href = 'https://lambert.wang/';
    a.title = '返回主站 lambert.wang';
    a.setAttribute('aria-label', '返回主站 lambert.wang');
    var icon = document.createElement('i');
    icon.className = 'fa fa-globe';
    icon.setAttribute('aria-hidden', 'true');
    a.appendChild(icon);
    bar.insertBefore(a, bar.firstChild);
})();
