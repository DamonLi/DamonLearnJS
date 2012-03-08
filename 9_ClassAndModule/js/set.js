// this is a constructor, so use new key word to invoke this function
    function Set() {
        this.values = {};
        this.n = 0;
        this.add.apply(this, arguments); // pay attention to apply
    }

    Set.prototype.add = function () {
        for (var i = 0; i < arguments.length; i++) {
            var val = arguments[i];
            var str = Set._v2s(val);
            if (!this.values.hasOwnProperty(str)) {
                this.values[str] = val;
                this.n++;
            }
        }
        return this;
    }
    Set._v2s = function (val) {
        switch (val) {
            case undefined: return 'u';
            case null: return 'n';
            case true: return 't';
            case false: return 'f';
            default: switch (typeof val) {
                    case 'number': return "#" + val;
                    case 'string': return '"' + val;
                    default: return "@" + objectID(val);
                }
        }
        // For any object, return a string.
        function objectID(o) {
            var prop = "|**objectid**|";
            if (!o.hasOwnProperty(prop))
                o[prop] = Set._v2s.next++;
            return o[prop];
        }
    }
    Set._v2s.next = 1000;

