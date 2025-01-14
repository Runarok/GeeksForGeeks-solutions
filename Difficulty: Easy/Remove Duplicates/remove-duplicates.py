class Solution:
    def removeDups(self, str):
        # Initialize an empty set to track seen characters
        seen = set()
        result = []
        
        # Iterate through the string and add characters to result if they are not already seen
        for char in str:
            if char not in seen:
                result.append(char)
                seen.add(char)
        
        # Return the result as a string
        return ''.join(result)


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
    T = int(input())
    for i in range(T):
        s = input()

        ob = Solution()
        answer = ob.removeDups(s)

        print(answer)
        print("~")

# } Driver Code Ends