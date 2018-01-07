describe("pow test", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 3), 27);
  });

  it("3 raises to power 4 is 81", function() {
    assert.equal(pow(3, 4), 81);
  })

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let i = 1; i <= 5; i++) {
    makeTest(i);
  }

  it("negative n case return not NaN", function() {
    assert.isNotNaN(pow(2, -1));
  });

  it("just equal 1 == '1'", function() {
    assert.equal(1, '1');
  });
  it("not strict equal 1 === '1'", function() {
    assert.notStrictEqual(1, '1');
  });

});