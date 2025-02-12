# User function Template for Python3

class Solution:
    def Evaluate(self, expression):
        # List to store extracted numbers
        numbers = []
        current_number = ''

        # Iterate through each character in the string
        for char in expression:
            if char.isdigit():
                current_number += char  # Build the number as a string
            elif current_number:
                numbers.append(int(current_number))  # Convert and store the number
                current_number = ''  # Reset for next number

        # Append the last number if any
        if current_number:
            numbers.append(int(current_number))

        # Return the difference between the second and first number
        return numbers[1] - numbers[0]
#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__ == '__main__':
	T=int(input())
	for i in range(T):
		str = input()
		ob = Solution()
		ans = ob.Evaluate(str)
		print(ans)
# } Driver Code Ends