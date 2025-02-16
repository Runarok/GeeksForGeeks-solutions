#{ 
 # Driver Code Starts
#Initial Template for Python 3

# } Driver Code Ends

# Input: Read the string
s = input()

# Split the string into words
words = s.split()

# Capitalize the first letter of each word
capitalized_words = [word.capitalize() for word in words]

# Join the capitalized words back into a string
capitalized_string = " ".join(capitalized_words)

# Print the capitalized string
print(capitalized_string)

# Print the number of words
print(len(words))


#{ 
 # Driver Code Starts.

# } Driver Code Ends