window.AFRAME.registerComponent('scale-on-click', {
    schema: {
        to: {default: '2 2 2'}
    },
    init: function () {
        console.log("adding event listener");
        var data = this.data;
        this.el.addEventListener('click', function () {
            console.log("scaling");
        this.setAttribute('scale', data.to);
        });
    }
});