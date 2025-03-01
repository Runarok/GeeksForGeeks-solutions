#User function Template for python3
class Solution:
    def inc (self, B, N):
        # Mapping of digits for hexadecimal and higher values
        dc_dig = {10: "A", 11: "B", 12: "C", 13:"D", 14: "E", 15: "F"}
        
        # Reverse mapping of symbols to numbers
        dc_dig1 = {sym:num for num, sym in dc_dig.items()}
        
        # Initialize the power and total value to 0
        pw = 0
        toten = 0

        # Convert input number (in string form) from base B to decimal
        for num in N[::-1]:
            if num.isdecimal():
                num = int(num)
            else:
                num = dc_dig1[num]
            toten += int(num) * (B**pw)
            pw += 1
        
        # Increment the number by 1
        toten += 1

        # Convert the incremented value back to base B
        res = ""
        while toten:
            toten, sym = divmod(toten, B)
            if sym >= 10:
                sym = dc_dig[sym]
            else:
                sym = str(sym)
            res = sym + res
        
        return res

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__': 
    t = int (input ())
    for _ in range (t):
        B = int(input())
        N = input()
        ob = Solution()
        print(ob.inc(B, N))
        print("~")
# } Driver Code Ends