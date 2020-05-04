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
    $("#changelog-md").append(html);
});


$.get({
    url: "CITE.md",
    cache: false
}).then(mdtext => {
    var html = conv.makeHtml(mdtext);
    $("#cite-md").append(html);
    $("#cite-md code.bibtext").parent().addClass("alert alert-secondary");
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
        if(tile == "others") {
            manageOthersCatalog(tile, tdata);
        } else {
            manageTileCatalog(tile, tdata);
        }
    });
});

var manageOthersCatalog = function(tile, tdata){
    var $otherUl = $("#other-catalogs");
    $.each(tdata, function(lname, ldata){
        var ocid = `othercat-${lname}`;
        var link = `<li id="${ocid}"><a href="#">${ldata["hname"]}</a></li>`;
        $otherUl.append(link);

        var title = `Catalog ${ldata["hname"]}`;
        $otherUl.find(`#${ocid} > a`).click(function(evt){

            $downloadModal.find("#downloadModalTileNameTitle").text(title);
            $downloadModalLinks.empty();

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
            $downloadModal.modal();
        })
    });

}

var manageTileCatalog = function(tile, tdata){
    var $clickeable = $('td#tile-' + tile);
    var title = `Tile ${tile}`;
    $clickeable.addClass("table-primary tile-active");

    $clickeable.click(function(evt){
        $downloadModal.find("#downloadModalTileNameTitle").text(title);
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
}


});
