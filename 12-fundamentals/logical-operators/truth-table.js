a       b           a || b
true    true        true
true    false       true
false   true        true
false   false       false // Im Prinzip wenn einer true ist, ist das or || true, deshalb false wenn beide false sind


a       b           a && b
true    true        true
true    false       false
false   true        false
false   false       false


a       !a
true    false
false   true


a       b           a ? b -> + //war eine Testfrage
1       1           1 -> true
1       0           1 -> true
0       1           1 -> true
0       0           0 -> false


a       b           a ? b -> * //war eine Testfrage
1       1           1 -> true
1       0           0 -> false
0       1           0 -> false
0       0           0 -> false


a       ???a -> 1 - a //war eine Testfrage
1       0
0       1


a && b || c && d /* ist dasselbe wie */ (a && b) || (c && d)
// "&&" hat Vorrang vor "||"

DeMorgan Laws:
- !(a || B) === !a && !b
- !(a && b) === !a || !b
