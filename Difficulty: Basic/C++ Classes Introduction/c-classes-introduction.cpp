//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

// CollegeCourse Class 
class CollegeCourse {
    // Private member variables
    private:
        string courseID;      // Stores course ID
        char grade;           // Stores grade (A, B, C, etc.)
        int credits;          // Stores the number of credits for the course
        int gradePoints;      // Stores the grade points based on grade
        float honorPoints;    // Stores calculated honor points

    public:
        // Function to set the course ID
        void set_CourseId(string courseId) {
            courseID = courseId;
        }

        // Function to set the grade and calculate grade points
        void set_Grade(char inputGrade) {
            grade = toupper(inputGrade); // Convert to uppercase to avoid case sensitivity
            gradePoints = calculateGradePoints(grade);
        }

        // Function to set the credit hours for the course
        void set_Credit(int courseCredits) {
            credits = courseCredits;
        }

        // Function to determine grade points based on the grade
        int calculateGradePoints(char grade) {
            switch (grade) {
                case 'A': return 10;
                case 'B': return 9;
                case 'C': return 8;
                case 'D': return 7;
                case 'E': return 6;
                case 'F': return 5;
                default: return 0; // Return 0 for invalid grades
            }
        }

        // Function to calculate honor points (Grade Points × Credits)
        float calculateHonorPoints(int gradePoints, int credits) {
            return gradePoints * credits;
        }

        // Function to display grade points and honor points
        void display() {
            honorPoints = calculateHonorPoints(gradePoints, credits);
            cout << gradePoints << " " << honorPoints << endl;
        }
};


//{ Driver Code Starts.

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
    CollegeCourse cc;
    string courseId;
    int gp;
    char grade;
    int credits;
    cin>>courseId>>grade>>credits;
    cc.set_CourseId(courseId);
    cc.set_Grade(grade);
    cc.set_Credit(credits);
    gp=cc.calculateGradePoints(grade);
    cc.calculateHonorPoints(gp,credits);
    cc.display();
    
cout << "~" << "\n";
}
    return 0;
}

// } Driver Code Ends