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



$.getJSON({
    url: "published.json",
    cache: false
}).then(json => {
    $.each(json, function(tile, tdata){
        $('td#tile-' + tile).addClass("table-primary tile-active");
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
