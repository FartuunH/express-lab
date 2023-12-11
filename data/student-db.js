const students = [
    {student: 'learn express', done: false},
    {student: 'learn javascript', done: true},
    {student: 'learn node js', done: false}
];

module.exports = {
     getAll: function (){
        return students;
     }
};