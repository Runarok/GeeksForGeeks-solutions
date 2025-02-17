//{ Driver Code Starts
import java.util.*;
class Replace{
public static void main(String[] args){
	Scanner sc=new Scanner(System.in);
	int t=sc.nextInt();
	while(t-->0){
		int n=sc.nextInt();
		Solution g=new Solution();
		System.out.println(g.convertFive(n));
	
System.out.println("~");
}
}
}
// } Driver Code Ends

/* Complete the function below */
class Solution{
    /**
     * Function to replace all 0s in the number with 5s.
     * @param n - The input number.
     * @returns int - The number after replacing all 0s with 5s.
     */
    public static int convertFive(int n) {
        // Convert the integer to a string to handle individual digits
        String num = Integer.toString(n);

        // Replace all occurrences of '0' with '5'
        num = num.replace('0', '5');

        // Convert the string back to an integer
        n = Integer.parseInt(num);

        // Return the modified integer
        return n;
    }
}
