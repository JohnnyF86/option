exports.none = Object.create({
    map: function() {
        return exports.none;
    },
    toArray: function() {
        return [];
    }
});

exports.some = function(value) {
    return new Some(value);
};

var Some = function(value) {
    this._value = value;
};

Some.prototype.map = function(func) {
    return new Some(func(this._value));
};

Some.prototype.toArray = function() {
    return [this._value];
};

exports.isOption = function(value) {
    return value === exports.none || value instanceof Some;
};