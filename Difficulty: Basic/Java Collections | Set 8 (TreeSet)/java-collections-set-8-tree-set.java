//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.Scanner;
import java.util.TreeSet;

class gfg
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0)
        {
            TreeSet<String>ts=new TreeSet<>();
            int n=sc.nextInt();;
            for(int i=0;i<n;i++)
            {
                String s=sc.next();
                ts.add(s);
            }
            char a=sc.next().charAt(0);
            char b=sc.next().charAt(0);
            char c=sc.next().charAt(0);
            char d=sc.next().charAt(0);
            gfg1 obj=new gfg1();
            obj.task(ts,a,b,c,d);
        
System.out.println("~");
}
    }
}


// } Driver Code Ends

// User function Template for Java

class gfg1 {
    void task(TreeSet<String> treeSet, char firstChar, char secondChar, char thirdChar, char fourthChar) {
        // Printing elements that are strictly less than 'firstChar'
        System.out.println(treeSet.headSet(String.valueOf(firstChar), false));

        // Printing elements that are greater than or equal to 'secondChar'
        System.out.println(treeSet.tailSet(String.valueOf(secondChar), true));

        // Printing elements in the range ['thirdChar', 'fourthChar') (inclusive of thirdChar, exclusive of fourthChar)
        System.out.println(treeSet.subSet(String.valueOf(thirdChar), true, String.valueOf(fourthChar), false));
    }
}


//{ Driver Code Starts.

// } Driver Code Ends