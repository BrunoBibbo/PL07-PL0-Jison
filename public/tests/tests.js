var assert = chai.assert;
 
 suite('Operaciones aritméticas', function() {
    
  test('Suma: ', function(){  
    var input = pl0.parse("a = 5 + 8 + 2.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"+","left":{"term":{"Type":"+","left":{"term":{"Type":"NUMBER","Value":"5"}},"right":{"term":{"Type":"NUMBER","Value":"8"}}}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}}}}}]', JSON.stringify(input));
  });

  test('Resta: ', function(){  
    var input = pl0.parse("a = 7 - 2 - 5.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"-","left":{"term":{"Type":"-","left":{"term":{"Type":"NUMBER","Value":"7"}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}},"right":{"term":{"Type":"NUMBER","Value":"5"}}}}}}}]', JSON.stringify(input));
  });

  test('Multiplicación: ', function(){  
    var input = pl0.parse("a = 8 * 2 * 5.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"*","left":{"term":{"Type":"*","left":{"term":{"Type":"NUMBER","Value":"8"}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}},"right":{"term":{"Type":"NUMBER","Value":"5"}}}}}}}]', JSON.stringify(input));
  });

  test('División: ', function(){  
    var input = pl0.parse("a = 5 / 7 / 3.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"/","left":{"term":{"Type":"/","left":{"term":{"Type":"NUMBER","Value":"5"}},"right":{"term":{"Type":"NUMBER","Value":"7"}}}},"right":{"term":{"Type":"NUMBER","Value":"3"}}}}}}}]', JSON.stringify(input));
  });

  test('División - Preferencia de operadores: ', function(){  
    var input = pl0.parse("a = 4 + 2 / 2.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"+","left":{"term":{"Type":"NUMBER","Value":"4"}},"right":{"term":{"Type":"/","left":{"term":{"Type":"NUMBER","Value":"2"}},"right":{"term":{"Type":"NUMBER","Value":"2"}}}}}}}}}]', JSON.stringify(input));
  });

  test('Multiplicación - Preferencia de operador: ', function(){  
    var input = pl0.parse("a = 7 - 1 * 5.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"-","left":{"term":{"Type":"NUMBER","Value":"7"}},"right":{"term":{"Type":"*","left":{"term":{"Type":"NUMBER","Value":"1"}},"right":{"term":{"Type":"NUMBER","Value":"5"}}}}}}}}}]', JSON.stringify(input));
  });
  
 });

 suite('Pruebas de statement', function() {
 
  test('Call: ', function(){  
    var input = pl0.parse("CALL prueba(24).");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"CALL","Procedure":{"ID":"prueba","Arguments":[{"Type":"NUMBER","Value":"24"}]}}}}]', JSON.stringify(input));
  });
  
  test('If: ', function(){  
    var input = pl0.parse("IF (a > 0) THEN a = 20.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"IF","left":{"Condition":{"Type":">","left":{"term":{"Type":"ID","Value":"a"}},"right":{"term":{"Type":"NUMBER","Value":"0"}}}},"right":{"Statement":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"20"}}}}}}}]', JSON.stringify(input));
  });
  
  test('If - Else: ', function(){  
    var input = pl0.parse("IF (a > 0) THEN a = 20 ELSE a = 50.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"IFELSE","left":{"Condition":{"Type":">","left":{"term":{"Type":"ID","Value":"a"}},"right":{"term":{"Type":"NUMBER","Value":"0"}}}},"center":{"Statement":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"20"}}}},"right":{"Statement":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"50"}}}}}}}]', JSON.stringify(input));
  });
  
  test('While - Do: ', function(){  
    var input = pl0.parse("WHILE (b > 0) DO b = b+1.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"STATEMENTS":{"Type":"WHILEDO","left":{"Condition":{"Type":">","left":{"term":{"Type":"ID","Value":"b"}},"right":{"term":{"Type":"NUMBER","Value":"0"}}}},"right":{"Statement":{"Type":"=","left":{"ID":"b"},"right":{"Value":{"Type":"+","left":{"term":{"Type":"ID","Value":"b"}},"right":{"term":{"Type":"NUMBER","Value":"1"}}}}}}}}}]', JSON.stringify(input));
  });
  
 });

 suite('Pruebas de expressions', function() {
 
  test('Varios statements: ', function(){  
    var input = pl0.parse("a = 3; b = 4; IF (b >= a) THEN a = b ELSE BEGIN CALL proc(); END.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"CONSTS":{"Type":"CONST","Constants":[[{"Type":"=","left":{"ID":"a"},"right":{"Value":"50"}},{"Type":"=","left":{"ID":"b"},"right":{"Value":"200"}}]]},"VARS":{"Type":"VAR","Variables":[[{"Variable":"x"},{"Variable":"y"}]]},"STATEMENTS":{"Type":"=","left":{"ID":"z"},"right":{"Value":{"Type":"NUMBER","Value":"10"}}}}}]', JSON.stringify(input));
  });
  
 });
 
 suite('Pruebas de block', function() {
 
  test('Const: ', function(){  
    var input = pl0.parse("CONST a = 5, b = 6, c = 7;.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"PROCEDURE":[{"Type":"PROCEDURE","ID":"a","Arguments":[],"Block":{"Type":"BLOCK","CONTENT":{"VARS":{"Type":"VAR","Variables":[[{"Variable":"a"},{"Variable":"v"}]]},"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"3"}}}}}},null],"STATEMENTS":{"Type":"=","left":{"ID":"v"},"right":{"Value":{"Type":"NUMBER","Value":"4"}}}}}]', JSON.stringify(input));
  });
  
  test('Var: ', function(){  
    var input = pl0.parse("VAR a, b, c;.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"PROCEDURE":[{"Type":"PROCEDURE","ID":"a","Arguments":[],"Block":{"Type":"BLOCK","CONTENT":{"VARS":{"Type":"VAR","Variables":[[{"Variable":"a"},{"Variable":"v"}]]},"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"3"}}}}}},null],"STATEMENTS":{"Type":"=","left":{"ID":"v"},"right":{"Value":{"Type":"NUMBER","Value":"4"}}}}}]', JSON.stringify(input));
  });
  
  test('Procedure - Sin argumentos: ', function(){  
    var input = pl0.parse("PROCEDURE a();. ");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"PROCEDURE":[{"Type":"PROCEDURE","ID":"a","Arguments":[],"Block":{"Type":"BLOCK","CONTENT":{"VARS":{"Type":"VAR","Variables":[[{"Variable":"a"},{"Variable":"v"}]]},"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"3"}}}}}},null],"STATEMENTS":{"Type":"=","left":{"ID":"v"},"right":{"Value":{"Type":"NUMBER","Value":"4"}}}}}]', JSON.stringify(input));
  });
  
  test('Procedure - Con argumentos: ', function(){  
    var input = pl0.parse("PROCEDURE a(b, c, d, 5, 7);. ");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"PROCEDURE":[{"Type":"PROCEDURE","ID":"a","Arguments":[],"Block":{"Type":"BLOCK","CONTENT":{"VARS":{"Type":"VAR","Variables":[[{"Variable":"a"},{"Variable":"v"}]]},"STATEMENTS":{"Type":"=","left":{"ID":"a"},"right":{"Value":{"Type":"NUMBER","Value":"3"}}}}}},null],"STATEMENTS":{"Type":"=","left":{"ID":"v"},"right":{"Value":{"Type":"NUMBER","Value":"4"}}}}}]', JSON.stringify(input));
  });
  
 });
 
 suite('Pruebas de prog', function() {
 
  test('Programa de prueba: ', function(){  
    var input = pl0.parse("CONST a = 0, b = 3; VAR c, d, e; PROCEDURE alfa(a, b); BEGIN WHILE (a == b) DO IF (c < e) THEN d = c+a; END;.");
    assert.equal('[{"Type":"BLOCK","CONTENT":{"CONSTS":{"Type":"CONST","Constants":[[{"Type":"=","left":{"ID":"a"},"right":{"Value":"50"}},{"Type":"=","left":{"ID":"b"},"right":{"Value":"200"}}]]},"VARS":{"Type":"VAR","Variables":[[{"Variable":"x"},{"Variable":"y"}]]},"STATEMENTS":{"Type":"=","left":{"ID":"z"},"right":{"Value":{"Type":"NUMBER","Value":"10"}}}}}]', JSON.stringify(input));
  });

 });
  
 suite('Pruebas de error', function() {
 
  test('Error de Sintaxis: ', function(){
    assert.throws(function() { pl0.parse("a = 2;"); }, 'Parse error on line 1:\na = 2;\n-----^\nExpecting \'PUNTO\', got \'PCOMA\'');
  });
  
 });