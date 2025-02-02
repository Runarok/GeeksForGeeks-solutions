# User function Template for Python3

class Solution:
    def kLevelSum(self, s, k):
        # Initialize variables
        num_buffer = ''
        level = -1
        prev_level = -1
        total_sum = 0
        
        # Iterate through the input string
        for char in s:
            if char == '(':
                level += 1
                if prev_level == k:
                    num_buffer += '@'
                    prev_level = -1
            elif char == ')':
                level -= 1
                if prev_level == k:
                    num_buffer += '@'
                    prev_level = -1
            elif level == k:
                num_buffer += char
                prev_level = level
        
        # Process the collected numbers
        numbers = num_buffer.strip('@').split('@')
        for num in numbers:
            total_sum += int(num)
        
        return total_sum
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    t = int(input())
    for _ in range(t):
        s = input()
        k = int(input())
        ob = Solution()
        print(ob.kLevelSum(s, k))
        print("~")

# } Driver Code Ends