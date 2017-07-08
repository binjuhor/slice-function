// Define sample data
let data = [
    "http://placehold.it/118x118",
    "http://placehold.it/119x119",
    "http://placehold.it/120x120",
    "http://placehold.it/121x121",
    "http://placehold.it/122x122",
    "http://placehold.it/123x123",
    "http://placehold.it/124x124",
    "http://placehold.it/125x125",
    "http://placehold.it/126x126",
    "http://placehold.it/127x127",
    "http://placehold.it/128x128",
    "http://placehold.it/129x129",
    "http://placehold.it/130x130",
    "http://placehold.it/131x131",
    "http://placehold.it/132x132",
    "http://placehold.it/133x133",
    "http://placehold.it/134x134",
    "http://placehold.it/135x135",
    "http://placehold.it/136x136",
    "http://placehold.it/137x137",
    "http://placehold.it/138x138",
    "http://placehold.it/139x139",
    "http://placehold.it/140x140",
    "http://placehold.it/141x141",
    "http://placehold.it/142x142",
    "http://placehold.it/143x143",
    "http://placehold.it/144x144",
    "http://placehold.it/146x146",
    "http://placehold.it/147x147",
    "http://placehold.it/148x148",
    "http://placehold.it/149x149",
    "http://placehold.it/150x150",
    "http://placehold.it/151x151",
    "http://placehold.it/152x152",
    "http://placehold.it/153x153",
    "http://placehold.it/154x154",
    "http://placehold.it/155x155",
    "http://placehold.it/156x156"
];


(function($){
    "use strict";
    let _loadMore       = 1; //item loadmore define here
    let _currentPage    = 0; //default page
    let _imagesList     = data; //Get real data 
    let _containner     = $('.list-imginsta'); //Container for image
    let _imageLoaded    = _imagesList.slice(_currentPage, _loadMore); //Get list first items for append
    
    // First append for list
    $.each(_imageLoaded, function( index, value ) {
        _containner.append('<li class="image-item"><img src="'+value+'" alt="Image '+index+'"></li>'); //Load image in page
    });

    //Action for button loadmore
    $('.loadmore').click(function(e){
        e.preventDefault();
        // Get current page from button
        _currentPage    = $(this).attr('data-page');
        //Slice image url from array data
        _imageLoaded    = _imagesList.slice(_currentPage*_loadMore,parseInt(_currentPage*_loadMore)+_loadMore);
        if (_imageLoaded != '') {
            //Append image after click button in list loaded 
            $.each(_imageLoaded, function( index, value ) {
                _containner.append('<li class="image-item"><img src="'+value+'" alt="Image '+index+'"></li>'); //Load image in page
            })
        }

        // No image more
        if (_imageLoaded == '') {
            alert("Finish job here");
        }
        // Set data page for button
        $(this).attr('data-page',parseInt(_currentPage)+1);

    });
})(jQuery)