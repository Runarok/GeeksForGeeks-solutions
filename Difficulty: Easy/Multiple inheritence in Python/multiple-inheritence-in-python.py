#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

class Student:
    def __init__(self, sid, deptid):
        self.sid = sid
        self.deptid = deptid
    
    def get_info(self):
        return f"StudentID:{self.sid} DepartmentID:{self.deptid}"

class Faculty:
    def __init__(self, eid, deptid):
        self.eid = eid
        self.deptid = deptid
    
    def get_info(self):
        return f"EmployeeID:{self.eid} DepartmentID:{self.deptid}"

class PhDStudent(Student, Faculty):
    def __init__(self, sid, eid, deptid):
        Student.__init__(self, sid, deptid)  # Initialize Student with sid and deptid
        Faculty.__init__(self, eid, deptid)   # Initialize Faculty with eid and deptid
    
    def get_info(self):
        return f"StudentID:{self.sid} EmployeeID:{self.eid} DepartmentID:{self.deptid}"



#{ 
 # Driver Code Starts.

if __name__ == "__main__":
    t=int(input())
    while t:
        t-=1
        sid = int(input())
        eid = int(input())
        deptid = int(input())
    
        # Create a Student object
        student = Student(sid, deptid)
        # Create a Faculty object
        faculty = Faculty(eid, deptid)
        # Create a PhDStudent object
        phd_student = PhDStudent(sid, eid, deptid)
        
        if not isinstance(phd_student, Student):
            print("phd_student doesn't inherit from Student class")
        elif not isinstance(phd_student, Faculty):
            print("phd_student doesn't inherit from Faculty class")
        else: 
            print(student.get_info())
            print(faculty.get_info())
            print(phd_student.get_info())

# } Driver Code Ends