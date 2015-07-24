(function() {
  'use strict';

  window._ = {};

  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   */

  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  _.last = function(array, n) {

    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(Math.max(0, array.length - n));
      };

  _.each = function(collection, iterator) {

    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var prop in collection) {
        iterator(collection[prop], prop, collection);
      }
    }
      };

  _.indexOf = function(array, target){

    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  _.filter = function(collection, test) {

    var result = [];

    _.each(collection, function(val) {
      test(val) && result.push(val);
    });

    return result;
      };

  _.reject = function(collection, test) {


    return _.filter(collection, function(val) {
      return !test(val);
    });
      };

  _.uniq = function(array) {

   var hash = {};

    _.each(array, function(val) {
      hash[val] = val;
    });

    return _.map(hash, function(value) {
      return value;
    });
      };

  _.map = function(collection, iterator) {


    var results = [];

    _.each(collection, function(item, index, collection) {
      results.push(iterator(item, index, collection));
    });

    return results;
      };

  _.pluck = function(collection, key) {

    return _.map(collection, function(item){
      return item[key];
    });
  };

  _.reduce = function(collection, iterator, accumulator) {

    var initializing = arguments.length === 2;

    _.each(collection, function(val) {
      if (initializing) {
        initializing = false;
        accumulator = val;
      } else {
        accumulator = iterator(accumulator, val);
      }
    });

    return accumulator;
      };

  _.contains = function(collection, target) {

    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function(collection, iterator) {


    iterator = iterator || _.identity;

    return !!_.reduce(collection, function(allPassed, val) {
      return allPassed && iterator(val);
    }, true);
      };

  _.some = function(collection, iterator) {

    iterator = iterator || _.identity;

    return !_.every(collection, function(item) {
      return !iterator(item);
    });
      };


  /**
   * OBJECTS
   * =======
   */

  _.extend = function(obj) {

    _.each(Array.prototype.slice.call(arguments, 1), function(object) {
      _.each(object, function(prop, key) {
        obj[key] = prop;
      });
    });

    return obj;
  };

}());
