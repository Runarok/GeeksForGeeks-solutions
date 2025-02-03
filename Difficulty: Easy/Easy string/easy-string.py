# User function Template for python3

class Solution:

    def transform(self, S):
        # Initialize the first character to lowercase
        temp = S[0].lower()
        arr = []  # Array to hold the resulting characters and counts
        c = 0  # Counter for consecutive characters
        
        # Iterate through the string (converted to lowercase)
        for i in S.lower():
            # If the character is the same as the previous one, increment the counter
            if temp == i:
                c += 1
            else:
                # Otherwise, append the counter and the previous character to the result array
                arr.append(str(c))
                arr.append(temp)
                temp = i  # Update temp to the current character
                c = 1  # Reset the counter to 1 for the new character
        
        # After the loop, append the last character and its count to the result
        arr.append(str(c))
        arr.append(temp)
        
        # Join the result list into a string and return it
        return "".join(arr)

#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':

    t = int(input())

    for _ in range(t):
        S = input()

        solObj = Solution()

        print(solObj.transform(S))
# } Driver Code Ends