var assert = chai.assert;

suite('Tests: ', function() {
   test('Error', function() {//comprueba si efectivamente se lanza un error si la cadena parseada es erronea
        original.value = "x = (453; y = 9852";
        main();
		assert.equal(OUTPUT.innerHTML, '<div class="error">Syntax Error. Expected ) found \';\' near \'; x = 23\'</div>');
    });
    test('ID', function() {//comprueba si se esta haciendo referencia a un id
        original.value = "c = caballo";
        main();
		assert.match(OUTPUT.innerHTML, /ID/);
    });
	 test('Número', function() {//comprueba si se parsea un numero
        original.value = "numero = 1234";
        main();
		assert.match(OUTPUT.innerHTML, /NUM/);
    });
});