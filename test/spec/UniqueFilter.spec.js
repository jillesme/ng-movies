describe('UniqueFilter', function () {

  beforeEach(module('ngMovies'));

  var UniqueFilter;

  beforeEach(inject(function ($filter) {
    UniqueFilter = $filter('Unique');
  }));

  it('should be a filter', function () {
    expect(UniqueFilter).not.toBe(undefined);
  });


  it('should remove duplicates from array', function () {
    var testCase = [
      {
        id: 1,
        name: 'Apple'
      },
      {
        id: 2,
        name: 'Banana'
      },
      {
        id: 1,
        name: 'Kiwi'
      }];

    expect(UniqueFilter(testCase, 'id').length).toBe(2);
    expect(UniqueFilter([], 'key')).toEqual([]);
  });


});


