$(document).ready(function(){

var conv = new showdown.Converter();

// https://github.com/showdownjs/showdown
$.get({
    url: "README.md",
    cache: false
}).then(mdtext => {
    var html = conv.makeHtml(mdtext);
    $("#readme-md").append(html)
});

$.get({
    url: "CHANGELOG.md",
    cache: false
}).then(mdtext => {
    var html = conv.makeHtml(mdtext);
    $("#changelog-md").append(html)
});


var showDownloadModal = function(evt){
    alert("foo");
}


var $downloadModal = $("#downloadModal");
var $downloadModalLinks = $downloadModal.find("#downloadModalLinks");

$.getJSON({
    url: "published.json",
    cache: false
}).then(json => {
    $.each(json, function(tile, tdata){
        var $tiletd = $('td#tile-' + tile);

        $tiletd.addClass("table-primary tile-active");

        $tiletd.click(function(evt){
            $downloadModal.find("#downloadModalTileNameTitle").text(tile);
            $downloadModalLinks.empty();

            $.each(tdata, function(lname, ldata){
               var links = " ".concat(
                    '<li class="list-group-item d-flex justify-content-between align-items-center">',
                    `<a href="${ldata['link']}" class="">`,
                    `<i class="fa fa-download"></i> ${ldata["hname"]}`,
                    `<small> <code>(${tile}_${lname}.h5)</code></small>`,
                    "</a>",
                    `<span class="badge badge-info badge-pill">${ldata['date']}</span>`,
                    '</li>');
                $downloadModalLinks.append(links);

            });

            $downloadModal.modal();
        });


    });
});


//~ var $downloadModalTileNameTitle = $downloadModal.find("#downloadModalTileNameTitle");
    //~ var $downloadModalLinks = $downloadModal.find("#downloadModalLinks");

    //~ $("td.tile").click(function(evt){
        //~ var $td = $(evt.currentTarget);
        //~ $downloadModalTileNameTitle.text($td.data("tile"));

        //~ var $links = $td.find("div.links").clone();
        //~ $downloadModalLinks.empty();

        //~ $downloadModalLinks.append($links);

        //~ $links.find("a.download").click(function(){
            //~ $downloadModal.modal("hide");
            //~ $links.delete();
        //~ });

        //~ $downloadModal.modal('show');
    //~ });




});
