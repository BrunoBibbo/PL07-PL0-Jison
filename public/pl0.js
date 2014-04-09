/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"block":4,"PUNTO":5,"consts":6,"vars":7,"procedure":8,"statements":9,"CONST":10,"constant":11,"ID":12,"=":13,"NUMBER":14,"PCOMA":15,"COMA":16,"VAR":17,"var":18,"PROCEDURE":19,"expressions":20,"term":21,"P":22,"CALL":23,"LEFTPAR":24,"args":25,"RIGHTPAR":26,"IF":27,"condition":28,"THEN":29,"ELSE":30,"BEGIN":31,"END":32,"WHILE":33,"DO":34,"+":35,"-":36,"*":37,"/":38,"^":39,"!":40,"%":41,"idnum":42,"ODD":43,"e":44,"COMPARISON":45,"$accept":0,"$end":1},
terminals_: {2:"error",5:"PUNTO",10:"CONST",12:"ID",13:"=",14:"NUMBER",15:"PCOMA",16:"COMA",17:"VAR",19:"PROCEDURE",22:"P",23:"CALL",24:"LEFTPAR",26:"RIGHTPAR",27:"IF",29:"THEN",30:"ELSE",31:"BEGIN",32:"END",33:"WHILE",34:"DO",35:"+",36:"-",37:"*",38:"/",39:"^",40:"!",41:"%",43:"ODD",44:"e",45:"COMPARISON"},
productions_: [0,[3,2],[4,4],[6,0],[6,2],[11,4],[11,5],[7,0],[7,2],[18,2],[18,3],[8,0],[8,5],[20,1],[20,3],[9,3],[9,2],[9,5],[9,6],[9,4],[9,4],[9,4],[9,1],[21,3],[21,3],[21,3],[21,3],[21,3],[21,2],[21,2],[21,2],[21,1],[21,1],[25,2],[25,3],[25,0],[42,1],[42,1],[28,4],[28,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: 
          this.$ = $$[$0-1]; 
          console.log(this.$);
          return this.$;
        
break;
case 2: this.$ = { Type: 'BLOCK', CONTENT: {CONSTS: $$[$0-3], VARS: $$[$0-2], PROCEDURE: $$[$0-1], STATEMENTS: $$[$0]} }; 
break;
case 4: this.$ = { Type: $$[$0-1], Constants: [$$[$0]] }; 
break;
case 5: this.$ = { Type: $$[$0-2], left: {ID: $$[$0-3]}, right: {Value: $$[$0-1]} }; 
break;
case 6: this.$ = [{ Type: $$[$0-3], left: {ID: $$[$0-4]}, right: {Value: $$[$0-2]} }].concat($$[$0]); 
break;
case 8: this.$ = { Type: $$[$0-1], Variables: [$$[$0]] }; 
break;
case 9: this.$ = { Variable: $$[$0-1] }; 
break;
case 10: this.$ = [{ Variable: $$[$0-2] }].concat($$[$0]); 
break;
case 12: this.$ = { Type: $$[$0-4], ID: $$[$0-3], Block: $$[$0-1] }; 
break;
case 13: this.$ = (typeof $$[$0] === 'undefined')? [] : [ $$[$0] ]; 
break;
case 14: this.$ = $$[$0-2];
          if ($$[$0]) this.$.push($$[$0]); 
          console.log(this.$);
        
break;
case 15: this.$ = { Type: $$[$0-1], left: {ID: $$[$0-2]}, right: {Value :$$[$0]} }; 
break;
case 16: this.$ = { Type: $$[$0-1], Identifiers: {ID: $$[$0]} }; 
break;
case 17: 
	  if($$[$0-1])
	    this.$ = { Type: $$[$0-4], Procedure: {ID: $$[$0-3], Arguments: $$[$0-1]} };
	  else
	    this.$ = { Type: $$[$0-4], Procedure: {ID: $$[$0-3]} }; 
	
break;
case 18: this.$ = { Type: $$[$0-5]+$$[$0-1], left: {Condition: $$[$0-4]}, center: {Statement: $$[$0-2]}, right: {Statement: $$[$0]} }; 
break;
case 19: this.$ = { Type: $$[$0-3], left: {Condition: $$[$0-2]}, right: {Statement: $$[$0]} }; 
break;
case 20: this.$ = { Type: $$[$0-3]+$$[$0], Expressions: {Statement: $$[$0-2]} }; 
break;
case 21: this.$ = { Type: $$[$0-3]+$$[$0-1], left: {Condition: $$[$0-2]}, right: {Statement: $$[$0]} }; 
break;
case 23:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 24:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 25:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 26:
          if ($$[$0] == 0) throw new Error("Division by zero, error!");
          {this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; }
        
break;
case 27:this.$ = { Type: $$[$0-1], left: {term: $$[$0-2]}, right: {term: $$[$0]} }; 
break;
case 28:
          if ($$[$0-1] % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$$[$0-1];
          {this.$ = { Type: $$[$0], left: {term: $$[$0-1]} }; }
        
break;
case 29:this.$ = { Type: $$[$0], left: {term: $$[$0-1]} }; 
break;
case 30:this.$ = { Type: 'UMINUS', right: {term: -$$[$0]} }; 
break;
case 31: this.$ = { Type: 'NUMBER', Value: $$[$0] }; 
break;
case 32: this.$ = { Type: 'ID', Value: $$[$0] }; 
break;
case 33: this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 34: this.$ = [$$[$0-1]].concat($$[$0]); 
break;
case 35: this.$ = []; 
break;
case 36: this.$ = { Type: 'NUMBER', Value: $$[$0] }; 
break;
case 37: this.$ = { Type: 'ID', Value: $$[$0] }; 
break;
case 38: this.$ = { Type: $$[$0-2], right: {ID: $$[$0-1]} }; 
break;
case 39: this.$ = { Type: $$[$0-2], left: {term: $$[$0-3]}, right: {term: $$[$0-1]} }; 
break;
}
},
table: [{3:1,4:2,6:3,10:[1,4],12:[2,3],14:[2,3],17:[2,3],19:[2,3],22:[2,3],23:[2,3],27:[2,3],31:[2,3],33:[2,3],36:[2,3]},{1:[3]},{5:[1,5]},{7:6,12:[2,7],14:[2,7],17:[1,7],19:[2,7],22:[2,7],23:[2,7],27:[2,7],31:[2,7],33:[2,7],36:[2,7]},{11:8,12:[1,9]},{1:[2,1]},{8:10,12:[2,11],14:[2,11],19:[1,11],22:[2,11],23:[2,11],27:[2,11],31:[2,11],33:[2,11],36:[2,11]},{12:[1,13],18:12},{12:[2,4],14:[2,4],17:[2,4],19:[2,4],22:[2,4],23:[2,4],27:[2,4],31:[2,4],33:[2,4],36:[2,4]},{13:[1,14]},{9:15,12:[1,16],14:[1,24],21:22,22:[1,17],23:[1,18],27:[1,19],31:[1,20],33:[1,21],36:[1,23]},{12:[1,25]},{12:[2,8],14:[2,8],19:[2,8],22:[2,8],23:[2,8],27:[2,8],31:[2,8],33:[2,8],36:[2,8]},{15:[1,26],16:[1,27]},{14:[1,28]},{5:[2,2],15:[2,2]},{5:[2,32],13:[1,29],15:[2,32],30:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32]},{12:[1,30]},{12:[1,31]},{24:[1,33],28:32},{9:35,12:[1,16],14:[1,24],20:34,21:22,22:[1,17],23:[1,18],27:[1,19],31:[1,20],33:[1,21],36:[1,23]},{24:[1,33],28:36},{5:[2,22],15:[2,22],30:[2,22],35:[1,37],36:[1,38],37:[1,39],38:[1,40],39:[1,41],40:[1,42],41:[1,43]},{12:[1,45],14:[1,24],21:44,36:[1,23]},{5:[2,31],15:[2,31],30:[2,31],35:[2,31],36:[2,31],37:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31]},{15:[1,46]},{12:[2,9],14:[2,9],19:[2,9],22:[2,9],23:[2,9],27:[2,9],31:[2,9],33:[2,9],36:[2,9]},{12:[1,13],18:47},{15:[1,48],16:[1,49]},{12:[1,45],14:[1,24],21:50,36:[1,23]},{5:[2,16],15:[2,16],30:[2,16]},{24:[1,51]},{29:[1,52]},{12:[1,56],14:[1,55],42:54,43:[1,53]},{15:[1,57]},{15:[2,13]},{34:[1,58]},{12:[1,45],14:[1,24],21:59,36:[1,23]},{12:[1,45],14:[1,24],21:60,36:[1,23]},{12:[1,45],14:[1,24],21:61,36:[1,23]},{12:[1,45],14:[1,24],21:62,36:[1,23]},{12:[1,45],14:[1,24],21:63,36:[1,23]},{5:[2,28],15:[2,28],30:[2,28],35:[2,28],36:[2,28],37:[2,28],38:[2,28],39:[2,28],40:[2,28],41:[2,28]},{5:[2,29],15:[2,29],30:[2,29],35:[2,29],36:[2,29],37:[2,29],38:[2,29],39:[2,29],40:[2,29],41:[2,29]},{5:[2,30],15:[2,30],30:[2,30],35:[2,30],36:[2,30],37:[2,30],38:[2,30],39:[2,30],40:[1,42],41:[2,30]},{5:[2,32],15:[2,32],30:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32]},{4:64,6:3,10:[1,4],12:[2,3],14:[2,3],17:[2,3],19:[2,3],22:[2,3],23:[2,3],27:[2,3],31:[2,3],33:[2,3],36:[2,3]},{12:[2,10],14:[2,10],19:[2,10],22:[2,10],23:[2,10],27:[2,10],31:[2,10],33:[2,10],36:[2,10]},{12:[2,5],14:[2,5],17:[2,5],19:[2,5],22:[2,5],23:[2,5],27:[2,5],31:[2,5],33:[2,5],36:[2,5]},{11:65,12:[1,9]},{5:[2,15],15:[2,15],30:[2,15],35:[1,37],36:[1,38],37:[1,39],38:[1,40],39:[1,41],40:[1,42],41:[1,43]},{12:[1,56],14:[1,55],16:[1,68],25:66,26:[2,35],42:67},{9:69,12:[1,16],14:[1,24],21:22,22:[1,17],23:[1,18],27:[1,19],31:[1,20],33:[1,21],36:[1,23]},{44:[1,70]},{45:[1,71]},{12:[2,36],14:[2,36],16:[2,36],26:[2,36],45:[2,36]},{12:[2,37],14:[2,37],16:[2,37],26:[2,37],45:[2,37]},{9:73,12:[1,16],14:[1,24],21:22,22:[1,17],23:[1,18],27:[1,19],31:[1,20],32:[1,72],33:[1,21],36:[1,23]},{9:74,12:[1,16],14:[1,24],21:22,22:[1,17],23:[1,18],27:[1,19],31:[1,20],33:[1,21],36:[1,23]},{5:[2,23],15:[2,23],30:[2,23],35:[2,23],36:[2,23],37:[1,39],38:[1,40],39:[1,41],40:[1,42],41:[1,43]},{5:[2,24],15:[2,24],30:[2,24],35:[2,24],36:[2,24],37:[1,39],38:[1,40],39:[1,41],40:[1,42],41:[1,43]},{5:[2,25],15:[2,25],30:[2,25],35:[2,25],36:[2,25],37:[2,25],38:[2,25],39:[1,41],40:[1,42],41:[1,43]},{5:[2,26],15:[2,26],30:[2,26],35:[2,26],36:[2,26],37:[2,26],38:[2,26],39:[1,41],40:[1,42],41:[1,43]},{5:[2,27],15:[2,27],30:[2,27],35:[2,27],36:[2,27],37:[2,27],38:[2,27],39:[2,27],40:[1,42],41:[1,43]},{15:[1,75]},{12:[2,6],14:[2,6],17:[2,6],19:[2,6],22:[2,6],23:[2,6],27:[2,6],31:[2,6],33:[2,6],36:[2,6]},{26:[1,76]},{12:[1,56],14:[1,55],16:[1,68],25:77,26:[2,35],42:67},{12:[1,56],14:[1,55],42:78},{5:[2,19],15:[2,19],30:[1,79]},{26:[1,80]},{12:[1,56],14:[1,55],42:81},{5:[2,20],15:[2,20],30:[2,20]},{15:[2,14]},{5:[2,21],15:[2,21],30:[2,21]},{12:[2,12],14:[2,12],22:[2,12],23:[2,12],27:[2,12],31:[2,12],33:[2,12],36:[2,12]},{5:[2,17],15:[2,17],30:[2,17]},{26:[2,33]},{12:[1,56],14:[1,55],16:[1,68],25:82,26:[2,35],42:67},{9:83,12:[1,16],14:[1,24],21:22,22:[1,17],23:[1,18],27:[1,19],31:[1,20],33:[1,21],36:[1,23]},{29:[2,38],34:[2,38]},{26:[1,84]},{26:[2,34]},{5:[2,18],15:[2,18],30:[2,18]},{29:[2,39],34:[2,39]}],
defaultActions: {5:[2,1],35:[2,13],73:[2,14],77:[2,33],82:[2,34]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var symbol_table = {};

function fact (n) { 
  return n==0 ? 1 : fact(n-1) * n 
}
/* generated by jison-lex 0.2.0 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            if (this.options.backtrack_lexer) {
                delete backup;
            }
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        if (this.options.backtrack_lexer) {
            delete backup;
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words ={ IF: 'IF', THEN: 'THEN', ELSE: 'ELSE', WHILE: 'WHILE', DO: 'DO', P: 'P', CALL: 'CALL', BEGIN: 'BEGIN', END: 'END', ODD: 'ODD', PROCEDURE: 'PROCEDURE', CONST: 'CONST', VAR: 'VAR'}

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and comments */
break;
case 1:return 14
break;
case 2:return 15
break;
case 3:return 16
break;
case 4:return 45
break;
case 5:return 24
break;
case 6:return 26
break;
case 7:return idORrw(yy_.yytext)
break;
case 8:return yy_.yytext;
break;
case 9:return 'EOF'
break;
case 10:return 5
break;
}
},
rules: [/^(?:\s+|#.*)/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:;)/,/^(?:,)/,/^(?:[<>!=]=|[<>])/,/^(?:\()/,/^(?:\))/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:[-*/+^!%=();])/,/^(?:$)/,/^(?:\.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}