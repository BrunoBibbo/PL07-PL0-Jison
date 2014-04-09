/* description: Parses end executes mathematical expressions. */

%{
var symbol_table = {};

function fact (n) { 
  return n==0 ? 1 : fact(n-1) * n 
}
%}

%token NUMBER ID COMPARISON PUNTO COMA PCOMA IF THEN ELSE WHILE DO P CALL BEGIN END ODD PROCEDURE CONST VAR
/* operator associations and precedence */

%right '='
%left '+' '-'
%left '*' '/'
%left '^'
%right '%'
%left UMINUS
%left '!'

%start prog

%% /* language grammar */
prog
    : expressions PUNTO
        { 
          $$ = $1; 
          console.log($$);
          return [$$, symbol_table];
        }
    ;

	
expressions
    : statements  
        { $$ = (typeof $1 === 'undefined')? [] : [ $1 ]; }
    | expressions PCOMA statements
        { $$ = $1;
          if ($3) $$.push($3); 
          console.log($$);
        }
    ;

statements
    : ID '=' e
        { $$ = { Type: $2, left: {ID: $1}, right: {Valor :$3} }; }
    | P ID
        { $$ = { Type: $1, Variables: {ID: $2} }; }
    | CALL ID LEFTPAR args RIGHTPAR
	{ 
	  if($4)
	    $$ = { Type: $1, Procedure: {ID: $2, Arguments: $4} };
	  else
	    $$ = { Type: $1, Procedure: {ID: $2} }; 
	}
    | e
    ;

e
    : e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {
          if ($3 == 0) throw new Error("Division by zero, error!");
          $$ = $1/$3;
        }
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | e '!'
        {
          if ($1 % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$1;
          $$ = fact($1);
        }
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | ID 
        { $$ = symbol_table[yytext] || 0; }
    ;
    
args
    : /* empty */
    | idnum
	{ $$ = $1; }
    | COMA idnum
	{ $$ = $2; }
    ;
    
idnum
    : NUMBER
	{ $$ = { Type: 'NUMBER', Value: Number(yytext) }; }
    | ID
	{ $$ = { Type: 'ID', Value: symbol_table[yytext] || 0 }; }
    ;