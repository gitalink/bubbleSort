


describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles a simple array', function(){
    expect( bubbleSort([3, 2, 1]) ).toEqual( [1, 2, 3] );
  });

  it('handles a longer array', function(){
    expect( bubbleSort([3, 2, 1, 10, 7, 14, 57, 4, 12, 98]) ).toEqual( [1, 2, 3, 4, 7, 10, 12, 14, 57, 98] );
  });
});


