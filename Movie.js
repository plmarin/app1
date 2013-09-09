var Movie = Backbone.Model.extend({});

matrix = new Movie();

matrix.set({
    title: "The Matrix",
    format: "dvd'
});

matrix.get('title');

matrix = new Movie({
    title: "The Matrix",
    format: "dvd'
});

var Movie = Backbone.Model.extend({
    initialize: function (spec) {
        if (!spec || !spec.title || !spec.format) {
            throw "InvalidConstructArgs";
        }

        // we may also want to store something else as an attribute
        // for example a unique ID we can use in the HTML to identify this
        // item's element. We can use the models 'cid' or 'client id for this'.
        this.set({
            htmlId: 'movie_' + this.cid
        })
    }
});

var Movie = Backbone.Model.extend({
    validate: function (attrs) {
        if (attrs.title) {
            if (!_.isString(attrs.title) || attrs.title.length === 0 ) {
                return "Title must be a string with a length";
            }
        }
    }
});
