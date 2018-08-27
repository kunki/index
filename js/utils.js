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
        prefix='<img src="http://glyphwiki.org/glyph/ebag_';
        middle='.svg" alt="';
        suffix='" style="margin-bottom:-6px;padding-bottom:1px;" height="26px" />';
        return origText.replace(/(s\d{3}-\d{3})/g, prefix+'$1'+middle+'$1'+suffix);
    });
    $('td.entry font:contains(t)').html(function(i, origText) {
        prefix='<img src="http://www.mebag.com/index/img/';
        middle='.png" alt="';
        suffix='" style="margin-bottom:-6px;padding-bottom:1px;" height="30px" />';
        return origText.replace(/(t\d{3}-\d{4}-\d{3})/g, prefix+'$1'+middle+'$1'+suffix);
    });
});