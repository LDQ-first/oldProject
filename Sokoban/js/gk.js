
/*
    0 activiity
    1 wall
    2 destination
    3 box
    4 person
*/


var GK = (function() {
    var gk = [];//关卡的数据

    gk[0] = [

0,0,1,1,1,0,0,0,
0,0,1,2,1,0,0,0,
0,0,1,0,1,1,1,1,
1,1,1,3,0,3,2,1,
1,2,0,3,4,1,1,1,
1,1,1,1,3,1,0,0,
0,0,0,1,2,1,0,0,
0,0,0,1,1,1,0,0,

];


    gk[1] = [

1,1,1,1,1,0,0,0,0,
1,4,0,0,1,0,0,0,0,
1,0,3,3,1,0,1,1,1,
1,0,3,0,1,0,1,2,1,
1,1,1,0,1,1,1,2,1,
0,1,1,0,0,0,0,2,1,
0,1,0,0,0,1,0,0,1,
0,1,0,0,0,1,1,1,1,
0,1,1,1,1,1,0,0,0,

];


    gk[2] = [

0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,0,0,
0,1,0,0,0,0,0,1,1,1,
1,1,3,1,1,1,0,0,0,1,
1,0,4,0,3,0,0,3,0,1,
1,0,2,2,1,0,3,0,1,1,
1,1,2,2,1,0,0,0,1,0,
0,1,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,

];


    gk[3] = [

0,0,1,1,1,1,0,0,
0,1,1,0,0,1,0,0,
0,1,4,3,0,1,0,0,
0,1,1,3,0,1,1,0,
0,1,1,0,3,0,1,0,
0,1,2,3,0,0,1,0,
0,1,2,2,0,2,1,0,
0,1,1,1,1,1,1,0,

];
    
    gk[4] =  [

0,1,1,1,1,1,0,0,
0,1,4,0,1,1,1,0,
0,1,0,3,0,0,1,0,
1,1,1,0,1,0,1,1,
1,2,1,0,1,0,0,1,
1,2,3,0,0,1,0,1,
1,2,0,0,0,3,0,1,
1,1,1,1,1,1,1,1,
            
];

    gk[5] =  [

0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,1,1,0,0,0,
1,1,1,1,0,0,0,0,0,1,0,0,0,
1,0,0,0,2,1,1,1,0,1,0,0,0,
1,0,1,0,1,0,0,0,0,1,1,0,0,
1,0,1,0,3,0,3,1,2,0,1,0,0,
1,0,1,0,0,0,0,0,1,0,1,0,0,
1,0,2,1,3,0,3,0,1,0,1,0,0,
1,1,0,0,0,0,1,0,1,0,1,1,1,
0,1,0,1,1,1,2,0,0,0,0,4,1,
0,1,0,0,0,0,0,1,1,0,0,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,0,0,0,

];


    gk[6] =  [

0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,1,1,
0,0,1,1,0,0,1,0,4,1,
0,0,1,0,0,0,1,0,0,1,
0,0,1,3,0,3,0,3,0,1,
0,0,1,0,3,1,1,0,0,1,
1,1,1,0,3,0,1,0,1,1,
1,2,2,2,2,2,0,0,1,0,
1,1,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,

];

    gk[7] =  [

0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,1,0,
0,1,1,1,0,0,0,0,1,0,
1,1,2,0,3,1,1,0,1,1,
1,2,2,3,0,3,0,0,4,1,
1,2,2,0,3,0,3,0,1,1,
1,1,1,1,1,1,0,0,1,0,
0,0,0,0,0,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,

];

    gk[8] =  [

0,0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,0,
0,1,0,0,1,1,0,0,0,1,0,
0,1,0,0,0,3,0,0,0,1,0,
0,1,3,0,1,1,1,0,3,1,0,
0,1,0,1,2,2,2,1,0,1,0,
1,1,0,1,2,2,2,1,0,1,1,
1,0,3,0,0,3,0,0,3,0,1,
1,0,0,0,0,0,1,0,4,0,1,
1,1,1,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,0,

];

    gk[9] =  [

0,0,0,0,0,0,0,0,
0,0,1,1,1,1,1,1,
0,0,1,0,0,0,0,1,
1,1,1,3,3,3,0,1,
1,4,0,3,2,2,0,1,
1,0,3,2,2,2,1,1,
1,1,1,1,0,0,1,0,
0,0,0,1,1,1,1,0,

];

    gk[10] =  [
    
0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,0,0,1,1,1,1,1,
1,1,0,0,1,0,0,1,0,0,0,1,
1,0,3,0,1,1,1,1,3,0,0,1,
1,0,0,3,2,2,2,2,0,3,0,1,
1,1,0,0,0,0,1,0,4,0,1,1,
0,1,1,1,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[11]=[

0,0,0,0,0,0,0,0,  
0,0,1,1,1,1,1,0,
1,1,1,0,0,4,1,0,
1,0,0,3,2,0,1,1,
1,0,0,2,3,2,0,1,
1,1,1,0,0,3,0,1,
0,0,1,0,0,0,1,1,
0,0,1,1,1,1,1,0,

];


gk[12]=[

0,0,1,1,1,1,0,0,
0,0,1,2,2,1,0,0,
0,1,1,0,2,1,1,0,
0,1,0,0,3,2,1,0,
1,1,0,3,0,0,1,1,
1,0,0,1,3,3,0,1,
1,0,0,4,0,0,0,1,
1,1,1,1,1,1,1,1

];


gk[13]=[

0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,
1,0,0,1,0,0,0,1,
1,0,3,2,2,3,0,1,
1,4,3,2,0,0,1,1,
1,0,3,2,2,3,0,1,
1,0,0,1,0,0,0,1,
1,1,1,1,1,1,1,1

];


gk[14]=[

0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,
1,1,0,0,0,0,1,0,
1,0,3,0,3,3,0,1,
1,2,2,2,2,2,2,1,
1,0,3,3,0,3,0,1,
1,1,1,0,4,1,1,1,
0,0,1,1,1,1,0,0,

];


gk[15]=[

0,0,0,0,0,0,0,0,0,0,
0,0,1,1,1,1,1,1,0,0,
0,0,1,0,0,0,0,1,1,1,
0,0,1,0,3,0,0,0,0,1,
1,1,1,0,3,0,1,1,0,1,
1,2,2,2,0,3,0,0,0,1,
1,2,2,2,3,1,3,0,1,1,
1,1,1,1,0,1,0,3,0,1,
0,0,0,1,0,0,4,0,0,1,
0,0,0,1,1,1,1,1,1,1,

];


gk[16]=[

0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,0,0,0,
1,0,0,0,0,1,0,0,0,
1,0,3,3,3,1,1,0,0,
1,0,0,1,2,2,1,1,1,
1,1,0,0,2,2,3,0,1,
0,1,0,4,0,0,0,0,1,
0,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0

];


gk[17]=[

0,0,0,0,0,0,0,0,0,0,
0,0,1,1,1,1,1,1,1,1,
0,0,1,0,0,0,1,2,0,1,
0,1,1,0,0,3,2,2,2,1,
0,1,0,0,3,0,1,0,2,1,
1,1,0,1,1,3,1,0,1,1,
1,0,0,0,3,0,0,3,0,1,
1,0,0,0,1,0,0,0,0,1,
1,1,1,1,1,1,1,4,0,1,
0,0,0,0,0,0,1,1,1,1,

];


gk[18]=[

0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,0,0,
0,1,2,2,2,2,0,1,0,0,
1,1,1,2,2,2,3,1,1,1,
1,0,0,3,1,3,0,3,0,1,
1,0,3,3,0,0,1,3,0,1,
1,0,0,0,0,1,0,0,0,1,
1,1,1,1,0,4,0,1,1,1,
0,0,0,1,1,1,1,1,0,0,
0,0,0,0,0,0,0,0,0,0

];


gk[19]=[

1,1,1,1,1,1,1,0,
1,2,2,3,2,2,1,0,
1,2,2,1,2,2,1,0,
1,0,3,3,3,0,1,0,
1,0,0,3,0,0,1,0,
1,0,3,3,3,0,1,0,
1,0,0,1,4,0,1,0,
1,1,1,1,1,1,1,0,

];


gk[20]=[

0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,1,0,0,
0,0,0,1,0,2,2,2,1,0,0,
1,1,1,1,2,2,2,2,1,0,0,
1,0,0,1,1,1,3,0,1,1,1,
1,0,3,0,3,0,0,3,3,0,1,
1,4,0,3,0,3,0,0,0,0,1,
1,0,0,0,1,1,1,0,0,0,1,
1,1,1,1,1,0,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,0,


];


gk[21]=[

1,1,1,1,1,1,1,1,0,
1,0,0,0,0,0,0,1,0,
1,0,1,3,3,0,0,1,0,
1,0,2,2,2,1,0,1,0,
1,1,2,2,2,3,0,1,1,
0,1,0,1,1,0,3,0,1,
0,1,3,0,0,3,0,0,1,
0,1,0,0,1,0,0,4,1,
0,1,1,1,1,1,1,1,1,

];


gk[22]=[

0,0,0,0,0,0,0,0,0,0,
0,0,1,1,1,1,1,0,0,0,
1,1,1,0,0,0,1,1,1,1,
1,0,0,0,3,0,3,0,0,1,
1,0,3,0,0,0,3,0,4,1,
1,1,1,3,3,1,1,1,1,1,
0,0,1,0,0,2,2,1,0,0,
0,0,1,2,2,2,2,1,0,0,
0,0,1,1,1,1,1,1,0,0,
0,0,0,0,0,0,0,0,0,0,

];


gk[23]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,0,0,0,1,1,1,1,1,
1,0,0,0,0,1,1,1,0,1,0,0,2,1,
1,0,0,3,0,3,0,1,0,1,2,2,2,1,
1,0,1,0,0,3,0,1,1,1,0,0,2,1,
1,0,0,3,3,3,0,0,0,3,0,4,2,1,
1,1,1,0,0,3,0,0,3,1,0,0,2,1,
0,0,1,0,0,3,1,3,0,1,2,2,2,1,
0,0,1,1,0,0,0,0,0,1,0,0,2,1,
0,0,0,1,1,1,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[24]=[

0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,1,1,1,1,1,1,
0,1,1,1,1,1,2,0,0,0,1,
0,1,0,0,1,2,2,1,1,0,1,
0,1,0,0,3,2,2,0,0,0,1,
0,1,0,0,1,0,2,1,0,1,1,
1,1,1,0,1,1,3,1,0,0,1,
1,0,3,0,0,0,0,3,3,0,1,
1,0,1,3,1,0,0,1,0,0,1,
1,4,0,0,1,1,1,1,1,1,1,
1,1,1,1,1,0,0,0,0,0,0,

];


gk[25]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,0,0,0,
0,1,0,0,0,1,1,0,0,1,1,1,1,
0,1,0,3,0,0,0,0,0,0,0,0,1,
0,1,1,3,1,1,1,0,1,1,0,0,1,
0,1,0,0,1,1,0,0,0,1,0,1,1,
0,1,0,3,2,2,2,2,2,2,0,1,0,
1,1,0,1,1,1,0,2,0,1,0,1,0,
1,0,0,0,0,0,3,1,1,1,3,1,0,
1,0,0,0,1,0,0,0,0,3,4,1,0,
1,1,1,1,1,3,1,0,1,1,1,1,0,
0,0,0,0,1,0,0,0,1,0,0,0,0,
0,0,0,0,1,1,1,1,1,0,0,0,0,

];


gk[26]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,
0,0,0,0,0,0,1,0,0,3,0,3,1,0,1,
1,1,1,1,1,1,1,0,0,0,3,0,0,0,1,
1,2,2,1,0,0,1,1,0,3,0,3,1,0,1,
1,2,2,0,0,0,1,1,0,3,0,3,0,0,1,
1,2,2,1,0,0,1,1,0,1,1,1,1,1,1,
1,2,2,1,0,1,0,3,0,3,0,1,0,0,0,
1,2,2,0,0,0,0,0,3,0,0,1,0,0,0,
1,0,0,1,1,1,0,4,0,1,1,1,0,0,0,
1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[27]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,
1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,
1,0,0,3,0,3,0,1,0,1,1,1,1,1,1,1,
1,0,0,0,3,0,0,1,0,1,0,2,0,2,0,1,
1,1,0,3,0,3,0,1,1,1,2,0,2,0,2,1,
0,1,3,0,3,0,0,1,0,0,0,2,0,2,0,1,
0,1,4,3,0,3,0,0,0,0,2,0,2,0,1,1,
0,1,3,0,3,0,0,1,0,0,0,2,0,2,0,1,
1,1,0,3,0,3,0,1,1,1,2,0,2,0,2,1,
1,0,0,0,3,0,0,1,0,1,0,2,0,2,0,1,
1,0,0,3,0,3,0,1,0,1,1,1,1,1,1,1,
1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,
0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[28]=[

0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,0,
1,2,2,2,2,2,2,1,0,
1,0,0,3,0,1,0,1,1,
1,0,3,0,1,0,3,0,1,
1,1,3,0,3,0,3,0,1,
0,1,0,0,4,0,0,0,1,
0,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,

];


gk[29]=[

0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,
0,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,0,0,0,2,0,0,0,0,1,
1,0,0,0,1,1,3,1,1,0,0,1,
1,0,4,3,2,0,2,0,2,3,1,1,
1,1,0,3,1,1,3,1,1,0,1,0,
0,1,0,0,0,0,2,0,0,0,1,0,
0,1,1,1,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[30]=[

0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,1,
1,1,1,1,2,0,0,4,1,
1,0,0,3,3,3,0,0,1,
1,2,1,1,2,1,1,2,1,
1,0,0,0,3,0,0,0,1,
1,0,0,3,2,1,0,1,1,
1,1,1,1,0,0,0,1,0,
0,0,0,1,1,1,1,1,0,

];


gk[31]=[

0,1,1,1,1,1,1,0,
0,1,2,0,2,2,1,0,
0,1,2,0,3,2,1,0,
1,1,1,0,0,3,1,1,
1,0,3,0,0,3,0,1,
1,0,1,3,1,1,0,1,
1,0,0,0,4,0,0,1,
1,1,1,1,1,1,1,1,

];


gk[32]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,1,1,1,1,1,1,0,0,0,0,
0,0,1,1,1,0,0,0,0,1,1,1,0,0,
0,0,1,0,0,0,1,3,0,0,0,1,1,1,
0,0,1,0,0,0,3,0,0,0,3,3,0,1,
0,0,1,0,3,3,0,1,3,0,0,0,0,1,
0,0,1,1,0,0,0,3,0,0,0,3,0,1,
1,1,1,1,1,1,0,1,3,1,1,1,1,1,
1,2,2,4,0,1,3,0,0,1,0,0,0,0,
1,2,1,2,2,0,0,3,1,1,0,0,0,0,
1,2,2,2,2,3,1,0,1,0,0,0,0,0,
1,2,2,2,2,0,0,0,1,0,0,0,0,0,
1,1,1,1,1,1,1,1,1,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0

];


gk[33]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
1,0,3,0,1,3,0,1,0,3,1,1,3,0,1,
1,0,1,0,0,3,0,1,0,0,0,0,0,0,1,
1,0,0,0,1,1,3,1,3,1,1,3,3,0,1,
1,0,1,0,1,0,2,2,2,0,1,0,0,0,1,
1,0,3,0,0,2,0,1,0,2,3,0,1,0,1,
1,0,3,1,4,3,2,2,2,1,0,1,0,0,1,
1,0,0,0,0,2,0,1,0,2,0,0,3,0,1,
1,0,1,1,2,3,1,1,1,3,2,0,1,0,1,
1,0,1,0,3,2,2,2,2,2,0,1,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0

];


gk[34]=[



1,1,1,1,1,1,1,1,1,0,
1,0,0,0,1,1,0,0,1,0,
1,0,1,0,3,0,3,0,1,0,
1,0,0,0,2,1,0,0,1,0,
1,1,0,1,2,4,2,1,1,0,
1,1,3,1,1,1,0,1,1,1,
1,0,0,0,0,0,0,0,0,1,
1,0,0,0,1,1,0,1,0,1,
1,1,1,1,1,1,0,0,0,1,
0,0,0,0,0,1,1,1,1,1,


];


gk[35]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,
1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,
1,0,3,3,0,0,0,1,1,1,0,0,0,0,0,
1,0,0,3,0,3,3,3,0,1,1,1,1,1,0,
1,1,0,1,1,0,2,2,2,0,0,0,0,1,1,
1,0,1,4,1,2,2,2,1,1,1,3,0,1,0,
1,0,1,0,3,2,2,2,0,0,0,0,0,1,0,
1,1,0,1,0,3,2,2,2,3,0,1,0,1,1,
1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,
1,0,0,0,0,0,0,3,0,0,0,3,0,1,0,
1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,
0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[36]=[

0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,0,
0,0,0,1,0,4,0,1,0,
0,0,0,1,3,3,3,1,0,
1,1,1,1,0,0,0,1,0,
1,0,0,0,2,1,3,1,1,
1,0,3,2,3,2,0,2,1,
1,0,0,1,2,1,2,1,1,
1,1,1,1,1,1,1,1,0,

];


gk[37]=[

1,1,1,1,1,1,1,1,1,1,1,1,
1,2,2,2,0,1,0,0,0,0,0,1,
1,2,2,0,0,1,0,1,1,0,0,1,
1,2,2,0,0,0,0,0,1,0,0,1,
1,2,2,0,0,1,0,3,1,1,0,1,
1,2,2,2,0,1,3,0,3,0,0,1,
1,1,1,1,1,1,0,0,3,3,0,1,
0,1,1,0,0,3,0,3,3,0,0,1,
0,1,4,0,3,3,3,0,0,1,0,1,
0,1,1,0,3,0,1,1,0,0,0,1,
0,0,1,0,0,0,0,0,0,0,0,1,
0,0,1,1,1,1,1,1,1,1,1,1,


];


gk[38]=[


0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,1,0,0,
1,0,0,0,0,0,0,0,1,0,0,
1,0,0,3,0,3,0,3,1,0,0,
1,1,0,1,3,1,1,0,1,0,0,
0,1,0,2,2,0,2,2,1,1,0,
0,1,1,2,2,0,2,2,0,1,0,
0,0,1,0,1,1,3,1,0,1,1,
0,0,1,3,0,3,0,3,0,0,1,
0,0,1,0,0,0,0,0,0,4,1,
0,0,1,1,1,1,1,1,1,1,1,


];

gk[39]=[


0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,
1,4,0,0,1,1,1,1,1,1,1,1,0,0,1,
1,1,0,3,0,0,0,0,0,0,0,3,0,0,1,
0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,
0,1,0,0,3,0,0,0,1,1,1,1,3,1,1,
0,1,3,0,1,1,0,1,0,3,0,3,0,1,0,
1,1,0,3,0,0,3,1,0,0,0,0,0,1,0,
1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,
1,0,0,0,1,1,1,1,1,3,1,1,1,1,0,
1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,
0,0,0,0,1,2,2,2,0,0,3,0,1,0,0,
0,0,0,0,1,2,2,2,2,1,0,0,1,0,0,
0,0,0,0,1,2,2,2,2,1,1,1,1,0,0,
0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,


];


gk[40]=[

0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,1,1,1,1,1,
0,1,1,1,1,1,0,0,0,1,
0,1,0,2,2,0,3,1,0,1,
0,1,0,1,2,0,0,0,0,1,
1,1,0,0,2,1,3,0,1,1,
1,0,3,0,0,3,0,0,1,0,
1,0,0,0,1,1,0,4,1,0,
1,1,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,

];


gk[41]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,0,1,1,1,1,1,1,1,
1,0,0,0,1,1,1,0,0,1,0,0,1,
1,0,3,0,0,0,0,0,3,0,4,0,1,
1,1,0,1,3,1,1,2,1,1,0,0,1,
0,1,0,0,2,2,2,0,2,0,3,0,1,
0,1,0,3,1,0,1,2,1,0,1,0,1,
0,1,1,0,0,0,0,3,0,0,0,0,1,
0,0,1,0,0,1,1,1,1,1,1,1,1,
0,0,1,1,1,1,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[42]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,
0,0,0,0,1,1,1,1,1,1,4,1,1,0,0,
0,0,0,0,1,2,2,2,2,1,3,0,1,1,0,
0,0,0,0,1,2,2,2,2,1,0,3,0,1,0,
0,0,0,0,1,2,2,2,2,0,3,0,0,1,0,
0,0,0,0,1,0,2,2,2,1,0,0,0,1,0,
1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,
1,0,3,0,3,0,0,0,3,0,0,1,0,0,1,
1,0,0,0,0,3,3,0,0,0,3,0,3,0,1,
1,1,1,0,3,0,3,0,3,0,0,1,1,1,1,
0,0,1,1,0,0,0,3,0,3,0,1,0,0,0,
0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,
0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

];


gk[43]=[

0,0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,0,0,0,
0,1,1,1,0,0,0,1,1,1,0,
1,1,0,0,4,3,0,3,0,1,0,
1,0,0,1,1,0,1,1,0,1,1,
1,0,3,2,1,2,3,0,0,0,1,
1,0,1,2,1,0,1,0,0,0,1,
1,0,3,2,2,2,0,0,1,1,1,
1,1,1,3,1,0,1,1,1,0,0,
0,0,1,0,0,0,1,0,0,0,0,
0,0,1,1,1,1,1,0,0,0,0,

];


gk[44]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,
0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,
0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,
0,0,0,0,0,0,1,0,3,3,0,0,0,0,1,
1,1,1,1,1,1,1,3,1,0,0,1,0,0,1,
1,0,0,1,2,0,2,2,0,1,1,1,3,1,1,
1,0,0,1,2,1,0,2,3,0,0,0,0,0,1,
1,0,0,1,2,1,2,0,1,0,1,0,0,0,1,
1,0,3,3,2,2,2,2,1,0,1,1,1,1,1,
1,0,4,3,0,1,0,1,1,0,1,0,0,0,0,
1,0,3,3,3,1,0,0,0,0,1,0,0,0,0,
1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,
1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

];

gk[45]=[

1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,
1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,
1,0,3,0,0,1,1,1,0,0,0,0,0,0,0,
1,0,3,0,3,0,0,1,1,1,0,0,0,0,0,
1,0,3,0,3,0,3,0,0,1,1,1,0,0,0,
1,0,3,0,3,0,3,0,0,0,0,1,0,0,0,
1,0,3,0,3,0,0,1,0,0,0,1,1,0,0,
1,0,3,0,0,1,1,0,3,3,3,0,1,0,0,
1,4,0,1,1,1,1,0,0,0,0,0,1,1,0,
1,1,0,1,0,1,2,3,3,3,3,3,2,1,0,
0,1,0,1,1,1,2,2,2,2,2,2,2,1,1,
0,1,0,0,0,2,0,0,0,0,0,0,0,2,1,
0,1,1,1,1,2,2,2,2,2,2,2,2,2,1,
0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,

];

gk[46]=[

0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,0,0,0,0,
1,0,4,1,0,0,1,1,1,1,1,
1,0,3,3,0,0,3,0,0,0,1,
1,0,0,1,2,1,1,3,1,0,1,
1,1,3,1,2,2,2,0,0,0,1,
1,1,0,2,2,2,1,1,3,1,1,
1,0,0,1,1,2,1,1,0,0,1,
1,0,0,3,0,0,3,0,0,0,1,
1,0,0,1,0,0,0,1,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,

];

gk[47]=[

0,0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,1,0,0,0,
0,0,0,1,0,4,0,1,0,0,0,
0,0,0,1,0,3,0,1,0,0,0,
0,0,0,1,3,2,3,1,0,0,0,
0,1,1,1,2,3,2,1,1,0,0,
1,1,0,2,3,2,3,2,1,1,1,
1,0,0,3,2,3,2,3,0,0,1,
1,0,0,0,0,2,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,0,

];

gk[48]=[

0,0,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,3,0,3,0,3,2,0,2,2,1,
1,0,3,0,3,0,3,0,0,2,2,2,1,
1,0,0,3,0,3,0,3,2,0,2,2,1,
1,0,3,0,3,0,3,0,0,2,2,2,1,
1,0,0,3,0,3,0,3,2,0,2,2,1,
1,0,3,0,3,0,3,0,0,2,2,2,1,
1,0,0,3,0,3,0,3,2,0,2,2,1,
1,0,3,0,3,0,3,0,0,2,2,2,1,
1,0,0,3,0,3,0,3,2,0,2,2,1,
1,4,3,0,3,0,3,0,0,2,2,2,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,

];


gk[49]=[

0,0,0,0,0,0,0,0,0,0,0,0,1,0,
0,0,0,0,0,0,0,0,0,0,0,1,1,0,
0,0,0,0,0,0,0,0,0,0,1,1,1,0,
0,0,0,0,0,0,0,0,0,1,0,0,0,1,
0,0,1,1,1,1,1,1,1,1,0,1,0,1,
0,1,0,3,0,3,0,3,0,3,0,0,0,1,
1,1,0,1,2,1,2,1,2,1,4,3,1,0,
1,1,2,2,2,2,2,2,2,0,0,0,1,1,
1,1,0,1,0,1,0,1,0,1,3,1,1,0,
0,1,0,3,0,3,0,3,0,3,0,0,0,1,
0,0,1,1,1,1,1,1,1,1,0,1,0,1,
0,0,0,0,0,0,0,0,0,1,0,0,0,1,
0,0,0,0,0,0,0,0,0,0,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,0,1,1,0,

];







    return {
        gk: gk
    }
})()



