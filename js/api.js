function makeLi(json) {
    var item = document.createElement('li');
    // Set its contents:
    item.appendChild(document.createTextNode(Object.values(json)));
    return item;
}
$(document).ready(function (e) {
    $.ajax({
        type: "GET",
        url: "https://strickland-cars-api.herokuapp.com/cars",
        context: this,
        success: function (data) {
            $.each(data, function () {
                console.log(this.name); //just an example how to access things
                document.getElementById('listings').appendChild(makeLi(this));
            });
        }
    });
});

// Add the contents of json to #foo:
