describe("name for test", function(){
    it("this is the label for this test", function(){
        expect(test).toBeDefined(false);
});
it("to be", function(){
expect(test).toBe(true);
});
it("not to be", function(){
expect(test).not.toBe(false);
});
});

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe("sayHello", function(){
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it('should return Hello, Jane!', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return Hello, Alex!', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return Hello, Pat!', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return Hello, World! when no argument is passed.", function() {
        expect(sayHello()).toBe("Hello, World!")
    });

    it("should return Hello, World! if input is equal both in type and value to true", function(){
        expect(sayHello(true)).toBe("Hello, World!")
    })

});


describe("isFive", function(){
    it("should be a defined function", function(){
        expect(typeof isFive).toBe("function")
    });
    it("should return a boolean no matter the input", function(){
        expect(typeof isFive()).toBe("boolean")
    });
    it("should return true when passed 5", function(){
        expect(isFive(5)).toBe(true)
    });
    it("should return true when passed the string of 5", function(){
        expect(isFive("5")).toBe(true)
    });
});




