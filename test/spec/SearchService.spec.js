describe('SearchService', function () {
  beforeEach(module('ngMovies'));

  var SearchService;
  beforeEach(inject(function ($injector) {
    SearchService = $injector.get('SearchService');
  }));

  it('should be a valid service', function () {
    expect(SearchService).not.toBe(undefined);
    
  });

});

