// Data Transform
{
    "question1": [
        3,
        0
    ],
    "question2": [
        0,
        3
    ],
    "question3": [
        3,
        0
    ],
    "question4": [
        0,
        3
    ]
};


[
    {id:1, quesId:1, value:[3,0],isReverse:false, isOG:true},
    {id:2, quesId:1, value:[3,0],isReverse:false},
    {id:3, quesId:1, value:[3,0],isReverse:false},
    {id:4, quesId:1, value:[3,0],isReverse:false},
]

[[{},{}],[{},{}]]
// Total : 

/**
 * value [3,0], isReverse: false // A,B
 * arr[i] odd : OG
 * 
 *  * value [1,2], isReverse: false // A,B
 * arr[i] odd : OG
 * 
 * arr[i] even: TA
 */
// Open : 3 + 1
// Guarded: 0 + 2