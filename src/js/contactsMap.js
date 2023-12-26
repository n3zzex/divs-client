initMap();

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const mapEl = document.getElementById('contactsMap');

    if (!mapEl) {
        return;
    }

    // Иницилиазируем карту
    const map = new YMap(
        mapEl,

        {
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
}
