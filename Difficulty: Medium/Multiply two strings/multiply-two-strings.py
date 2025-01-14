class Solution:
    def multiplyStrings(self, s1, s2):
        # Remove leading zeros
        s1 = s1.lstrip('0')
        s2 = s2.lstrip('0')
        
        # If either string becomes empty, the product is zero
        if not s1 or not s2:
            return "0"
        
        # Determine the sign of the result
        negative = (s1[0] == '-' and s2[0] != '-') or (s1[0] != '-' and s2[0] == '-')
        
        # Remove negative signs from s1 and s2 for multiplication
        if s1[0] == '-':
            s1 = s1[1:]
        if s2[0] == '-':
            s2 = s2[1:]
        
        # Initialize a result list to store the product
        m, n = len(s1), len(s2)
        result = [0] * (m + n)
        
        # Multiply each digit of s1 by each digit of s2
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                mul = int(s1[i]) * int(s2[j])
                # Positions in result[i + j + 1] and result[i + j] due to carry
                sum_ = mul + result[i + j + 1]
                result[i + j + 1] = sum_ % 10  # Store the single digit at current position
                result[i + j] += sum_ // 10  # Add the carry to the next position
        
        # Convert result list to string and remove leading zeros
        result_str = ''.join(map(str, result))
        result_str = result_str.lstrip('0')
        
        # If the result is empty, return "0"
        if not result_str:
            return "0"
        
        # Return the result with the correct sign
        return '-' + result_str if negative else result_str

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == "__main__":
    t = int(input())
    for i in range(t):
        a = input()
        b = input()
        print(Solution().multiplyStrings(a.strip(), b.strip()))

        print("~")

# } Driver Code Ends