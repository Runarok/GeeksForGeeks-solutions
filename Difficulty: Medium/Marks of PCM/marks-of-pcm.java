//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
class GfG
{
    public static void main (String[] args)
    {
        
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int n = sc.nextInt();
            int phy[] = new int[n];
    		int chem[] = new int[n];
    		int math[] = new int[n];
            
            for (int i = 0; i < n; ++i)
                {
                    phy[i]=sc.nextInt();
                    chem[i]=sc.nextInt();
                    math[i]=sc.nextInt();
                }
		    
		    Solution ob = new Solution();
		    
		    ob.customSort (phy, chem, math, n);
    		for (int i = 0; i < n; ++i)
    			System.out.println(phy[i]+" " + chem[i] + " " + math[i]);

        }
        
    }
}
// } Driver Code Ends

class Solution {
    // Inner class representing a Student with marks in Math, Physics, and Chemistry
    class Student {
        int math;
        int phy;
        int chem;

        // Constructor to initialize student marks
        Student(int math, int phy, int chem) {
            this.math = math;
            this.chem = chem;
            this.phy = phy;
        }
    }

    // Comparator class to compare students based on their marks in Physics, Chemistry, and Math
    class studentComparator implements Comparator<Student> {
        @Override
        public int compare(Student s1, Student s2) {
            // Compare Physics marks first
            int phyCompare = Integer.compare(s1.phy, s2.phy);

            // If Physics marks are the same, compare Chemistry marks
            if (phyCompare == 0) {
                int chemCompare = Integer.compare(s1.chem, s2.chem);

                // If Chemistry marks are also the same, compare Math marks
                if (chemCompare == 0) {
                    return Integer.compare(s1.math, s2.math);
                } else {
                    // Otherwise, compare in reverse order for Chemistry marks (descending)
                    return Integer.compare(s2.chem, s1.chem);
                }
            } else {
                // If Physics marks are different, return the comparison result
                return phyCompare;
            }
        }
    }

    // Function to sort the students based on the custom order of marks
    public void customSort(int phy[], int chem[], int math[], int N) {
        List<Student> stud = new ArrayList<>();
        
        // Create a list of students from the input arrays
        for (int i = 0; i < N; i++) {
            stud.add(new Student(math[i], phy[i], chem[i]));
        }

        // Sort the list using the custom comparator
        Collections.sort(stud, new studentComparator());

        // Update the original arrays with sorted student marks
        int inx = 0;
        for (Student student : stud) {
            math[inx] = student.math;
            phy[inx] = student.phy;
            chem[inx++] = student.chem;
        }
    }
}
