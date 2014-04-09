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
    : ID '=' term
        { $$ = { Type: $2, left: {ID: $1}, right: {Value :$3} }; }
    | P ID
        { $$ = { Type: $1, Variables: {ID: $2} }; }
    | CALL ID LEFTPAR args RIGHTPAR
	{ 
	  if($4)
	    $$ = { Type: $1, Procedure: {ID: $2, Arguments: $4} };
	  else
	    $$ = { Type: $1, Procedure: {ID: $2} }; 
	}
    | term
    ;

term
    : term '+' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '-' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '*' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '/' term
        {
          if ($3 == 0) throw new Error("Division by zero, error!");
          {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
        }
    | term '^' term
        {$$ = { Type: $2, left: {term: $1}, right: {term: $3} }; }
    | term '!'
        {
          if ($1 % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$1;
          {$$ = { Type: $2, left: {term: $1} }; }
        }
    | term '%'
        {$$ = { Type: $2, left: {term: $1} }; }
    | '-' term %prec UMINUS
        {$$ = { Type: 'UMINUS', right: {term: -$2} }; }
    | NUMBER
        {$$ = Number(yytext);}
    | ID 
        { $$ = symbol_table[yytext] || 0; }
    ;
    
args
    : idnum args
	{ $$ = [$1].concat($2); }
    | COMA idnum args
	{ $$ = [$2].concat($3); }
    | /* empty */
	{ $$ = []; }
    ;
    
idnum
    : NUMBER
	{ $$ = { Type: 'NUMBER', Value: $1 }; }
    | ID
	{ $$ = { Type: 'ID', Value: $1 }; }
    ;