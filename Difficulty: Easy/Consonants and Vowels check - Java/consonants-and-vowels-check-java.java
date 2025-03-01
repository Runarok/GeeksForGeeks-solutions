//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    
	public static void main (String[] args)
	{
	    //taking input using class Scanner
    	 Scanner sc = new Scanner(System.in);
    	 
    	 //taking total count of all testcases
    	 int t = sc.nextInt();
    	 sc.nextLine();
    	 boolean flag = false;
    	 while(t-- > 0){
    	  
    	  //taking the input String
    	  String s=sc.nextLine();
    	  
    	  //Creating an object of class Geeks
    	  Geeks obj=new Geeks();
    	  
    	  //calling the checkString
    	  //method of class Geeks
    	  obj.checkString(s);
    	   
    	 
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java

class Geeks{
    
    static void checkString(String s)
    {
        int vowelCount = 0;
        int consonantCount = 0;
        String trimmedString = s.trim();
        
        // Iterate through each character in the string
        for(int i = 0; i < trimmedString.length(); i++){
            if(Character.isLetter(trimmedString.charAt(i))){
                char currentChar = trimmedString.charAt(i);
                // Check if character is a vowel or consonant
                if("aeiou".indexOf(currentChar) != -1){
                    vowelCount++;
                } else {
                    consonantCount++;
                }
            }
        }
        
        // Print the result based on counts of vowels and consonants
        if(vowelCount > consonantCount)
            System.out.print("Yes");
        else if(consonantCount > vowelCount)
            System.out.print("No");
        else
            System.out.print("Same");
        
        System.out.println();
    }
}
