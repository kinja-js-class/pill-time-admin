describe('greeting', () => {
  beforeEach(module('app'));

  it('should compile', inject(($compile, $rootScope, nameStore) => {
    nameStore.names[0] = 'Robi';
    const element = $compile('<greeting></greeting>')($rootScope);
    $rootScope.$digest();
    expect(element.text()).toBe('Csa Robi !');
  }));

  it('should change name on click', inject(($compile, $rootScope) => {
    const element = $compile('<greeting></greeting>')($rootScope);
    element.find('span').triggerHandler('click');
    $rootScope.$digest();
    expect(element.text()).toBe('Csa Karcsi !');
  }));


});
