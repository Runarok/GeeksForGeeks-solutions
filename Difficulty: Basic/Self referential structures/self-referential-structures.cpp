//{ Driver Code Starts
// Initial Template for C

// } Driver Code Ends
// User function Template for C++

/*create linked list struct node*/
#include <stdio.h>
#include <stdlib.h>

// Define the structure for the node
struct node {
    int data;          // Data part of the node
    struct node *next; // Pointer to the next node (self-referential)
};

// Function to create a new node
struct node* createNode(int value) {
    struct node *newNode = (struct node*)malloc(sizeof(struct node)); // Allocate memory for the node
    newNode->data = value;   // Set the data part
    newNode->next = NULL;    // Set the next pointer to NULL initially
    return newNode;
}

// Function to display the linked list
void displayList(struct node *head) {
    struct node *current = head;  // Start from the head
    while (current != NULL) {
        printf("%d -> ", current->data);  // Print data of the current node
        current = current->next;          // Move to the next node
    }
    printf("NULL\n");  // Indicating the end of the list
}

//{ Driver Code Starts.
#include <stdio.h>

int main() {
    // code

    struct node ll;
    printf("%d\n", 1);
    printf("~");
    return 0;
}
// } Driver Code Ends