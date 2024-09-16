# Phonebook Sorting Application

## Table of Contents
1. [Project Purpose](#project-purpose)
2. [Data Structure](#data-structure)
3. [Sorting Functionality](#sorting-functionality)
4. [Usage Instructions](#usage-instructions)
    - [Adding Entries](#adding-entries)
    - [Updating Entries](#updating-entries)
    - [Deleting Entries](#deleting-entries)
    - [Sorting Entries](#sorting-entries)
5. [Examples and Edge Cases](#examples-and-edge-cases)
    - [Duplicate Entries](#duplicate-entries)
    - [Invalid Phone Numbers](#invalid-phone-numbers)
    - [Editing Non-Existent Entries](#editing-non-existent-entries)
6. [Algorithm Explanation](#algorithm-explanation)
    - [Merge Sort Algorithm](#merge-sort-algorithm)
7. [Code Structure](#code-structure)
8. [Conclusion](#conclusion)
9. [Examples](#Sorting-Capabilities-Examples)

---

## Project Purpose
The **Phonebook Sorting Application** is designed to manage contact entries efficiently. It allows users to add, update, delete, and sort contacts by various criteria (first name, last name, and phone number). The application demonstrates the use of fundamental data structures and sorting algorithms, while providing features for real-time contact management.

---

## Data Structure
Each contact in the phonebook is stored as an object in an array. The contact object has the following fields:

```javascript
{
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '555-123-4567'
}
```

---

## Object Fields:
- **firstName**: The first name of the contact.
- **lastName**: The last name of the contact.
- **phoneNumber**: The contact's phone number in the NANP format (XXX-XXX-XXXX).

## Sorting Functionality
The app allows users to sort the phonebook entries by:
- **First Name**
- **Last Name**
- **Phone Number**

The sorting functionality is handled using the **Merge Sort** algorithm, ensuring efficient sorting even when dealing with a large number of entries. The user can select the sorting criterion from a dropdown menu, and the entries will be displayed in sorted order based on the selected criterion.

---

## Usage Instructions

### 1. Adding Entries
To add a new contact:
- Fill in the "First Name," "Last Name," and "Phone Number" fields.
- Click the "Add Entry" button.
- The contact will be added to the list, and the form will reset.

### 2. Updating Entries
To update an existing contact:
- Click the "Edit" button next to the contact you want to update.
- The contact’s details will be populated in the form fields.
- Make the necessary changes and click "Add Entry" again. The contact will be updated.

### 3. Deleting Entries
To delete a contact:
- Click the "Delete" button next to the contact you want to remove.
- The contact will be deleted from the list.

### 4. Sorting Entries
To sort the contacts:
- Select the sorting criterion (first name, last name, or phone number) from the dropdown menu.
- Click the "Sort" button to reorder the contacts based on the selected criterion.

---

## Examples and Edge Cases

### 1. Duplicate Entries
If two contacts have the same first name, last name, or phone number, the application will sort them while maintaining their relative order in the list. For example:
- If two contacts have the first name "John," they will still appear in the order they were added.

### 2. Invalid Phone Numbers
The phone number must follow the **NANP format** (XXX-XXX-XXXX). If a user enters an invalid phone number, they will receive an error message, and the contact will not be added or updated until the phone number is valid.

### 3. Editing Non-Existent Entries
You cannot edit a non-existent entry. The "Edit" button must be clicked next to an existing contact to load its details into the form. If no valid entry is selected, submitting the form will add a new contact.

---

## Algorithm Explanation

### Merge Sort Algorithm
The **Merge Sort** algorithm was chosen for its efficiency and stability when sorting large datasets.

### How Merge Sort Works:
- **Divide**: The algorithm recursively divides the list into smaller sublists until each sublist contains a single element (which is trivially sorted).
- **Conquer**: It then merges these smaller sorted sublists back together in the correct order.
- **Merge**: The merging step involves comparing elements from each half and ordering them as they are merged.

### Time Complexity:
- Merge Sort runs in **O(n log n)** time in the worst, average, and best cases, making it an efficient sorting algorithm for large datasets.

### Why Merge Sort:
- **Stable**: Merge Sort is a stable sorting algorithm, meaning that the relative order of equal elements is maintained.
- **Efficient**: With a time complexity of **O(n log n)**, Merge Sort performs well even for large datasets.
- **Scalable**: Merge Sort is scalable and handles large phonebooks with ease.

---

## Code Structure

### `app.js`
#### PhoneBook Class:
- Stores all the contacts and contains methods for adding, updating, deleting, and sorting entries.
- Uses an array `this.entries` to store contacts.

#### Core Methods:
- `addOrUpdateEntry()`: Adds a new contact or updates an existing contact.
- `deleteEntry()`: Deletes a contact from the phonebook.
- `editEntry()`: Populates the form with the contact’s data for editing.
- `sortEntriesBy()`: Sorts the contacts based on the selected sorting criterion using Merge Sort.

#### Merge Sort Implementation:
- `mergeSort()`: Recursively splits the contacts into smaller sublists and merges them back together in sorted order.
- `merge()`: Combines two sorted sublists into one sorted list.

#### Decision-Making Process:
- **Data Structure**: An array was chosen to store contacts because it offers efficient random access and is easy to sort using the Merge Sort algorithm.
- **Sorting Algorithm**: Merge Sort was chosen because of its efficiency (**O(n log n)**) and stability, which ensures predictable results even for large datasets.

---


## Conclusion
The **Phonebook Sorting Application** is designed to manage contacts efficiently with the ability to add, update, delete, and sort entries. Using the **Merge Sort** algorithm, the app ensures that sorting is both stable and efficient, even with a large number of entries. The detailed documentation provides users with clear instructions for using the app and understanding its internal structure.


---



## Sorting Capabilities Examples

### Example 1: Sorting by **First Name**

#### Initial Phonebook Entries:
1. Sarah Connor: 555-123-4567  
2. John Doe: 555-987-6543  
3. Alice Johnson: 555-234-5678  
4. Bob Smith: 555-876-5432  

#### Sorting Process (Merge Sort):
- The list is split into smaller sublists:
  - `["Sarah Connor", "John Doe"]`
  - `["Alice Johnson", "Bob Smith"]`
- Each sublist is recursively divided:
  - `["Sarah Connor"]`, `["John Doe"]`
  - `["Alice Johnson"]`, `["Bob Smith"]`
- The sublists are merged and sorted by **first name**:
  - Merging `["Sarah Connor"]` and `["John Doe"]` results in `["John Doe", "Sarah Connor"]`.
  - Merging `["Alice Johnson"]` and `["Bob Smith"]` results in `["Alice Johnson", "Bob Smith"]`.
- Finally, the two sorted sublists are merged:
  - Merging `["John Doe", "Sarah Connor"]` and `["Alice Johnson", "Bob Smith"]` results in `["Alice Johnson", "Bob Smith", "John Doe", "Sarah Connor"]`.

#### Final Sorted Output (by **First Name**):
1. Alice Johnson: 555-234-5678  
2. Bob Smith: 555-876-5432  
3. John Doe: 555-987-6543  
4. Sarah Connor: 555-123-4567  

---

### Example 2: Sorting by **Last Name**

#### Initial Phonebook Entries:
1. Sarah Connor: 555-123-4567  
2. John Doe: 555-987-6543  
3. Alice Johnson: 555-234-5678  
4. Bob Smith: 555-876-5432  

#### Sorting Process (Merge Sort):
- The list is split into smaller sublists:
  - `["Sarah Connor", "John Doe"]`
  - `["Alice Johnson", "Bob Smith"]`
- Each sublist is recursively divided:
  - `["Sarah Connor"]`, `["John Doe"]`
  - `["Alice Johnson"]`, `["Bob Smith"]`
- The sublists are merged and sorted by **last name**:
  - Merging `["Sarah Connor"]` and `["John Doe"]` results in `["Sarah Connor", "John Doe"]`.
  - Merging `["Alice Johnson"]` and `["Bob Smith"]` results in `["Alice Johnson", "Bob Smith"]`.
- Finally, the two sorted sublists are merged:
  - Merging `["Sarah Connor", "John Doe"]` and `["Alice Johnson", "Bob Smith"]` results in `["Sarah Connor", "John Doe", "Alice Johnson", "Bob Smith"]`.

#### Final Sorted Output (by **Last Name**):
1. Sarah Connor: 555-123-4567  
2. John Doe: 555-987-6543  
3. Alice Johnson: 555-234-5678  
4. Bob Smith: 555-876-5432  

---

### Example 3: Sorting by **Phone Number**

#### Initial Phonebook Entries:
1. Sarah Connor: 555-123-4567  
2. John Doe: 555-987-6543  
3. Alice Johnson: 555-234-5678  
4. Bob Smith: 555-876-5432  

#### Sorting Process (Merge Sort):
- The list is split into smaller sublists:
  - `["Sarah Connor", "John Doe"]`
  - `["Alice Johnson", "Bob Smith"]`
- Each sublist is recursively divided:
  - `["Sarah Connor"]`, `["John Doe"]`
  - `["Alice Johnson"]`, `["Bob Smith"]`
- The sublists are merged and sorted by **phone number**:
  - Merging `["Sarah Connor"]` and `["John Doe"]` results in `["Sarah Connor", "John Doe"]`.
  - Merging `["Alice Johnson"]` and `["Bob Smith"]` results in `["Alice Johnson", "Bob Smith"]`.
- Finally, the two sorted sublists are merged:
  - Merging `["Sarah Connor", "John Doe"]` and `["Alice Johnson", "Bob Smith"]` results in `["Sarah Connor", "Alice Johnson", "Bob Smith", "John Doe"]`.

#### Final Sorted Output (by **Phone Number**):
1. Sarah Connor: 555-123-4567  
2. Alice Johnson: 555-234-5678  
3. Bob Smith: 555-876-5432  
4. John Doe: 555-987-6543  

---

### Example 4: Edge Case — Handling Duplicate Entries

#### Initial Phonebook Entries:
1. Sarah Connor: 555-123-4567  
2. John Doe: 555-987-6543  
3. Alice Johnson: 555-234-5678  
4. John Doe: 555-987-6543  

#### Sorting Process (by **First Name**):
- The duplicate entries for "John Doe" will remain stable during the sorting process. The relative order of the two "John Doe" entries will not change.

#### Final Sorted Output (by **First Name**):
1. Alice Johnson: 555-234-5678  
2. John Doe: 555-987-6543  
3. John Doe: 555-987-6543  
4. Sarah Connor: 555-123-4567  

---

### Example 5: Edge Case — Invalid Phone Number

#### Initial Phonebook Entry:
1. Sarah Connor: 555-123-4567  

#### Adding a New Entry with an Invalid Phone Number:
If a user tries to add a contact with a phone number like "555-12345" (which is not in the correct format), the application will reject the input and display an error message.

#### Error Message:

Error: Invalid phone number format! Please use XXX-XXX-XXXX.
