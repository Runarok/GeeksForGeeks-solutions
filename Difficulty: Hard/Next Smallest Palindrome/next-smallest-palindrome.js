//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        
        let num = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            num[i] = input_ar1[i];
        }
        
        let obj = new Solution();
        let res = obj.generateNextPalindrome(n, num);
        
        let S = '';
        for(let i=0;i<res.length;i++)
        {
            S+=(res[i]);
            S+=' ';
        }
        console.log(S);
        
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n
    * @param number[] num
    * @returns number[]
    */
    // Function to handle even-length palindromes
    evenPalindrome(n, num) {
        let mid = Math.floor(n / 2); // Find the middle index
        let left = mid - 1; // Left part starts before the middle
        let right = mid; // Right part starts at the middle
        let carry = 1; // Initialize carry for addition

        // Compare left and right parts to check if they are already equal
        while (left >= 0 && num[left] == num[right]) {
            left--;
            right++;
        }

        // If left part is smaller or we have reached the end (all digits matched)
        if (left < 0 || num[left] < num[right]) {
            // Reset left and right pointers for mirroring
            left = mid - 1;
            right = mid;

            // Increment the left part and propagate the carry
            while (left >= 0) {
                let sum = num[left] + carry;
                num[left] = sum % 10;
                carry = Math.floor(sum / 10); // Update carry for next iteration
                num[right] = num[left]; // Mirror the incremented value to the right
                left--;
                right++;
            }

            // If carry is still left after incrementing the left part
            if (carry > 0) {
                num.unshift(carry); // Add carry to the start of the array
                num[n] = carry; // Update the last element
                n++; // Increase the length of the array
            }
        } else {
            // If the left part is greater than the right, just mirror the left part
            while (left >= 0) {
                num[right] = num[left];
                left--;
                right++;
            }
        }
        return num; // Return the modified array as the next palindrome
    }

    // Function to handle odd-length palindromes
    oddPalindrome(n, num) {
        let mid = Math.floor(n / 2); // Find the middle index
        let left = mid - 1; // Left part starts before the middle
        let right = mid + 1; // Right part starts just after the middle
        let carry = 1; // Initialize carry for addition

        // Compare left and right parts to check if they are already equal
        while (left >= 0 && num[left] == num[right]) {
            left--;
            right++;
        }

        // If left part is smaller or we have reached the end (all digits matched)
        if (left < 0 || num[left] < num[right]) {
            // Reset left and right pointers for mirroring
            left = mid - 1;
            right = mid + 1;
            
            // Increment the middle digit and propagate the carry
            let sum = num[mid] + carry;
            num[mid] = sum % 10;
            carry = Math.floor(sum / 10); // Update carry for next iteration

            // Increment the left part and propagate the carry
            while (left >= 0) {
                sum = num[left] + carry;
                num[left] = sum % 10;
                carry = Math.floor(sum / 10); // Update carry for next iteration
                num[right] = num[left]; // Mirror the incremented value to the right
                left--;
                right++;
            }

            // If carry is still left after incrementing the left part
            if (carry > 0) {
                num.unshift(carry); // Add carry to the start of the array
                num.push(carry); // Add carry to the end of the array (middle digit's mirror)
                n += 2; // Increase the length of the array
            }
        } else {
            // If the left part is greater than the right, just mirror the left part
            while (left >= 0) {
                num[right] = num[left];
                left--;
                right++;
            }
        }
        return num; // Return the modified array as the next palindrome
    }

    // Main function to generate the next palindrome
    generateNextPalindrome(n, num) {
        // Handle the special case where the number has only one digit
        if (n == 1) {
            if (num[0] == 9) {
                return [1, 1]; // If it's 9, next palindrome is 11
            } else {
                num[0] = num[0] + 1; // If it's not 9, simply increment the number
                return num;
            }
        }

        // If the length of the number is even, call evenPalindrome function
        if (n % 2 == 0) {
            return this.evenPalindrome(n, num);
        } else {
            // If the length of the number is odd, call oddPalindrome function
            return this.oddPalindrome(n, num);
        }
    }
}

        
