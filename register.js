
    
     var student1={
           studentName:'sarah',
           studentId:143252,
           nationality:'Kenya',
           emailAddress:'sarahmatishoi@gmail.com'

       }
       var student2=
       {
       studentName:'peter',
       studentId:143252,
       nationality:'Uganda',
       emailAddress:'peter@gmail.com'
       }
       var student3=
       {
        studentName:'juma',
        studentId:4748748,
        nationality:'Tanzania',
        emailAddress:'juma@gmail.com'
        }
      student1.phoneNumber='0738456721',student1.entryYear=2021
       console.log (student1)
      student2.entryYear=2021,student2.phoneNumber='0723546678'
      console.log(student2)
      student3.phoneNumber='0738294562'
      console.log(student3)
      
      


       var students=[{
        studentName:'Lemayian',
        studentId:7631783,
        nationality:'Kenya',
        emailAddress:'lemayian@gmail.com'
         },
         {
            studentName:'peter',
            studentId:143252,
            nationality:'Uganda',
            emailAddress:'peter@gmail.com'
            },
        {
            studentName:'sarah',
            studentId:143252,
            nationality:'Kenya',
            emailAddress:'sarahmatishoi@gmail.com'
 
        }]

students.forEach(function (element) {
    delete element.studentId;

  });
  console.log(students)
  
        

  var students=[{
    studentName:'Lemayian',
    studentId:7631783,
    nationality:'Kenya',
    emailAddress:'lemayian@gmail.com',
    entryYear:2020
     },
     {
        studentName:'peter',
        studentId:143252,
        nationality:'Uganda',
        emailAddress:'peter@gmail.com',
        entryYear:2018
        },
    {
        studentName:'sarah',
        studentId:143252,
        nationality:'Kenya',
        emailAddress:'sarahmatishoi@gmail.com',
        entryYear:2021

    }]
    students.forEach(function (element) {
        element.entryYear=2019
    
      });
      console.log(students)

  
