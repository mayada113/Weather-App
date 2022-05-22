class Renderer{
    renderData(_data) {
        const source = $('#city-template').html();
        const template = Handlebars.compile(source);
        $('#cities-container').empty()
        const newHTML = template({ data: _data});
        $('#cities-container').append(newHTML);
    }
}