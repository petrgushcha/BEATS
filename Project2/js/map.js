let myMap;
const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.752071, 37.601366],
        zoom: 13,
        controls: [],
    });
    
    let coords = [
        [55.755400, 37.603670],
        [55.743411, 37.603894],
        [55.749356, 37.604119],
        [55.746161, 37.603175],
    ],
    myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });
    
    for (let i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }
    
    myMap.geoObjects.add(myCollection);
    
    myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);