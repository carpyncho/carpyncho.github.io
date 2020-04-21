$(document).ready(function(){

var conv = new showdown.Converter();

// https://github.com/showdownjs/showdown
$.get({
    url: "README.md",
    cache: false
}).then(mdtext => {
    var html = conv.makeHtml(mdtext);
    $("#readme-md").append(html);
    $("div#readme-md code.console").parent().addClass("alert alert-dark");
    $("div#readme-md code.python").parent().addClass("alert alert-dark");
    $("div#readme-md code.R").parent().addClass("alert alert-dark");
});

$.get({
    url: "CHANGELOG.md",
    cache: false
}).then(mdtext => {
    var html = conv.makeHtml(mdtext);
    $("#changelog-md").append(html)
});


$.get({
    url: "CITE.md",
    cache: false
}).then(mdtext => {
    var html = conv.makeHtml(mdtext);
    $("#cite-md").append(html)
});


var $downloadModal = $("#downloadModal");
var $downloadModalLinks = $downloadModal.find("#downloadModalLinks");

function humanFileSize(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if(Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
        : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1)+' '+units[u];
}


$.getJSON({
    url: "https://raw.githubusercontent.com/carpyncho/carpyncho-py/master/data/index.json",
    cache: false
}).then(json => {
    $.each(json, function(tile, tdata){
        var $tiletd = $('td#tile-' + tile);

        $tiletd.addClass("table-primary tile-active");

        $tiletd.click(function(evt){
            $downloadModal.find("#downloadModalTileNameTitle").text(tile);
            $downloadModalLinks.empty();

            $.each(tdata, function(lname, ldata){

                var url = `https://drive.google.com/open?id=${ldata["driveid"]}`
                var size = humanFileSize(ldata['size'], false);

                var links = " ".concat(
                    '<li class="list-group-item ">',
                        "<div class='d-flex justify-content-between align-items-center'>",
                            `<a target="_new" href="${url}" class="">`,
                                `<i class="fab fa-google-drive"></i> ${ldata["hname"]}`,
                            "</a>",
                            `<span class="badge badge-info badge-pill">${size}</span>`,
                            `<span class="badge badge-secondary badge-pill">Updated ${ldata['date']}</span>`,
                        "</div>",
                        "<div class='d-flex justify-content-between align-items-center'>",
                            `<small><b>Format:</b> ${ldata["format"]} (<code>${ldata['extension']}</code>)</small>`,
                            `<small>MD5: <code>${ldata['md5sum']}</code></small>`,
                        "</div>",
                    '</li>');

                $downloadModalLinks.append(links);
            });
            $downloadModal.modal();
        });




    });
});


});
