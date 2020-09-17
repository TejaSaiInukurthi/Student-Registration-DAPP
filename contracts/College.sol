pragma solidity ^0.5.4;
  
contract College{
    address private minter;
     uint private castescholarship;
     uint private merit;
    uint private totalfee;
     uint private totalfees;
     uint public fInalamount;
     uint private markss;
   
    struct Student {
    string name;
    uint class;
    uint rollno;  
    uint Caste;
    uint marks;
    uint total;
    uint _aDdress;
    bool initialized; 
}



event School(string  name, uint class, uint rollno, uint Caste, uint marks, uint _aDdress,uint total);
mapping (uint => Student) students;
uint [] public studentsAccts;


constructor() public {
        // Uses the special msg global variable to store the
        // address of the contract creator
        minter = msg.sender;
    }

    function setStudentinfo(uint _aDdress,  string memory nAme, uint cLass, uint rOllno,  uint cAste, uint mArks) public payable returns(uint) {
   
   //Task 1 : call the owner of the contractor and we are only giving whole access to the address who deplyed the contract
    
    require(msg.sender == minter ); 
    Student storage student = students[_aDdress];
    require(!students[_aDdress].initialized, "Asset With This UUID Already Exists");
    
     student.name = nAme;
     student.class = cLass;
     student.rollno = rOllno;
     student.Caste = cAste;
     student.marks = mArks;
     student.initialized = true;
    
     

     studentsAccts.push(_aDdress);
    {
     
    uint xy = cLass;
      uint CLASS = xy/1;
       
      //Task 2: Create a if else condition 
      //if CLASS is equal to 10 then totalfees has totalfees has be 70000
      //else if CLASS is greator than 10 totalfees has to be 0
      
      if (CLASS < 8) {         
        fInalamount = 0;
        }
        else if (CLASS == 8) {
        totalfees = 50000;
        }
       else if (CLASS == 9) {
        totalfees = 60000;
        }
        else if (CLASS == 10) {
        totalfees = 70000;
        }
         else if (CLASS> 10) {
         totalfees = 0;
        }
       uint d = cAste;
      uint CASTE = d/1;
      
      
      //Task 3 If CASTE is equal to 1 then castescholarship has to be 1000
      //If CASTE is equal to 1 then castescholarship has to be 1000
      //If CASTE is equal to 2 then castescholarship has to be 2000
      //If CASTE is equal to 3 then castescholarship has to be 3000
      //If CASTE is equal to 4 then castescholarship has to be 4000
      
      
        if (CASTE == 1) {
        castescholarship = 1000 ;
        }
       else if (CASTE == 2) {
        castescholarship= 2000;
        }
        
        else if (CASTE == 3) {
        castescholarship = 3000;
        }
        
       
        else if (CASTE == 4) {
         castescholarship = 4000;
        }
        else if (CASTE > 4) {
           castescholarship = 0;
        }
        
     
       markss = mArks;
     uint c = markss*100;
      uint integ = c/600;
     

      if (integ >= 70) {
            merit = 0;
            totalfee = merit+castescholarship;
            fInalamount = totalfees-totalfee;
        }
       else if (integ >= 75 ) { 
           merit = 11600;
           totalfee = merit+castescholarship;
           fInalamount = totalfees-totalfee;
       }
        else if (integ >= 80) {
            merit = 13700;
            totalfee = merit+castescholarship;
            fInalamount = totalfees-totalfee;
        }
       
        else if (integ >= 90) {
            merit = 14700;
           totalfee = merit+castescholarship;
           fInalamount = totalfees-totalfee;
        }
        else if (integ >= 95) {
            merit = 15700;
            totalfee = merit+castescholarship;
            fInalamount = totalfees-totalfee;
        }
        
        
     
        {
        if (CLASS >  10) {
            fInalamount = totalfees;
        }
 }
     student.total = fInalamount;
     emit School(student.name,student.class,student.rollno,student.Caste,student.marks,student._aDdress,student.total);
        return(fInalamount);
    }

     }
     
function Name(uint _address) view public returns (string memory name) {
    return (students[_address].name);
}
function Class(uint _address) view public returns (uint class) {
    return ( students[_address].class);
}
function Rollno(uint _address) view public returns (uint rollno) {
    return ( students[_address].rollno);
}
function Castes(uint _address) view public returns ( uint Caste) {
    return (students[_address].Caste);
}
function Marks(uint _address) view public returns ( uint marks) {
    return (students[_address].marks);
}

function Totall(uint _address) view public returns ( uint total) {
    return (students[_address].total);
}
  function countStudent() view public returns (uint) {
      return studentsAccts.length;
      
      
  }
  
 function getamount() view public returns (uint) {
      return fInalamount;
      
      
  }
  
}