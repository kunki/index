function copyToClipBoard(clipBoardContent) {
    if (window.clipboardData) {
        window.clipboardData.clearData();
        window.clipboardData.setData("Text", clipBoardContent);
    } else {
        var t = document.createElement("textarea");
        t.textContent = clipBoardContent;
        var body = document.body;
        body.appendChild(t);
        t.select();
        document.execCommand('copy');
        body.removeChild(t);
    }
}

$(document).ready(function() {
    $('td.entry font:contains(s)').html(function(i, origText) {
        return origText.replace(/(s\d{3}-\d{3})/g, '<img class="seal" alt="$1"/>');
    });
    $('img.seal').each(function() {
        var path = 'http://glyphwiki.org/glyph/ebag_' + $(this).attr('alt') + '.svg';
        $(this).attr('src', path);
        $(this).attr('height', '26px');
        $(this).attr('style', 'margin-bottom:-6px;padding-bottom:1px;');
    });
});