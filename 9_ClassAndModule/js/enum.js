function enumeration(namesToValues) {
    // ?? This is the dummy constructor that will be the return value.
    var enumeration = function () { throw "Can't Instantiate Enumerations"; }

    // Enumerated values inherit from this object
    var proto = enumeration.prototype = {
        constructor: enumeration,
        toString: function () { return this.name; },
        valueOf: function () { return this.value; },
        toJSON: function () { return this.name; }
    };

    enumeration.values = []; // An array of the enumerated value objects

    // Now create the instance of this new type
    for (name in namesToValues) {
        var e = inherit(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }

    // a class method for iterating the instance of the class
    enumeration.foreach = function (f, c) {
        for (var i = 0; i < this.values.length; i++)
            f.call(c, this.values[i]);
    };
    // Return the constructor that identifies the new type
    return enumeration;
}