//{ Driver Code Starts
// Java program to demonstrate working of Scanner in Java
import java.util.*;
import java.io.*;
class Abc
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0)
        {
            int n=sc.nextInt();
            int[] a[],b;
            a= new int[n][n];
            b= new int[n];
            int sum=0;
            for(int i=0;i<n;i++)
            {
                for(int j=0;j<n;j++)
                {
                    int p=sc.nextInt();
                    a[i][j]=p;
                }
            }
            int Max=0;
            for(int i=0;i<n;i++)
            {
                int p=sc.nextInt();
                b[i]=p;
            }
            Complete obj = new Complete();
            ArrayList<Integer> ans;
            ans = obj.array(a, b, n);
            for(int i: ans)
                System.out.print(i + " ");
            System.out.println();
        
System.out.println("~");
}
    }
}


// } Driver Code Ends

class Complete
{
    public static ArrayList<Integer> array(int a[][], int b[], int n)
    {
        // Initialize variables
        int leftDiagonalSum = 0;
        int maxElement = b[0]; // Assume first element is the max

        // Loop to calculate the left diagonal sum and find the maximum element in array b
        for (int i = 0; i < n; i++) {
            leftDiagonalSum += a[i][i]; // Summing the left diagonal elements
            if (b[i] > maxElement) { // Finding max in array b
                maxElement = b[i];
            }
        }

        // Creating and returning result list
        ArrayList<Integer> result = new ArrayList<>();
        result.add(leftDiagonalSum); // Adding left diagonal sum
        result.add(maxElement);      // Adding max element from array b
        return result;               // Returning the result list
    }
}
