/**
 * PhoneBook class to manage phone book entries.
 */
class PhoneBook {
    constructor() {
        // Array to store the phone book entries
        this.entries = [];
    }

    /**
     * Adds a new entry to the phonebook.
     * @param {string} firstName - The first name of the contact.
     * @param {string} lastName - The last name of the contact.
     * @param {string} phoneNumber - The phone number of the contact in NANP format.
     */
    addEntry(firstName, lastName, phoneNumber) {
        if (this.isValidPhoneNumber(phoneNumber)) {
            this.entries.push({ firstName, lastName, phoneNumber });
        } else {
            alert("Invalid phone number format! Please use XXX-XXX-XXXX.");
        }
    }

    /**
     * Checks if a phone number is in the NANP format (XXX-XXX-XXXX).
     * @param {string} phoneNumber - The phone number to validate.
     * @returns {boolean} - True if valid, false otherwise.
     */
    isValidPhoneNumber(phoneNumber) {
        const regex = /^\d{3}-\d{3}-\d{4}$/;
        return regex.test(phoneNumber);
    }

    /**
     * Sorts the phonebook entries by a given criteria using a custom Merge Sort algorithm.
     * @param {string} criteria - The criteria to sort by ('firstName', 'lastName', 'phoneNumber').
     */
    sortEntriesBy(criteria) {
        if (this.entries.length < 2) return; // No need to sort if there are 0 or 1 entries
        this.entries = this.mergeSort(this.entries, criteria);
    }

    /**
     * Merge Sort algorithm implementation.
     * Splits the array into smaller arrays, sorts them, and merges them back together.
     * @param {Array} array - The array to be sorted.
     * @param {string} criteria - The criteria to sort by (firstName, lastName, phoneNumber).
     * @returns {Array} - Sorted array.
     */
    mergeSort(array, criteria) {
        if (array.length < 2) return array; // Base case: arrays with 1 element are already sorted

        const mid = Math.floor(array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);

        return this.merge(
            this.mergeSort(left, criteria),
            this.mergeSort(right, criteria),
            criteria
        );
    }

    /**
     * Merges two sorted arrays into a single sorted array.
     * @param {Array} left - Left array (sorted).
     * @param {Array} right - Right array (sorted).
     * @param {string} criteria - The criteria to sort by (firstName, lastName, phoneNumber).
     * @returns {Array} - The merged and sorted array.
     */
    merge(left, right, criteria) {
        let result = [];
        let i = 0;
        let j = 0;

        // Loop through both arrays and push the smaller element to the result
        while (i < left.length && j < right.length) {
            if (left[i][criteria] < right[j][criteria]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        // Concatenate remaining elements from both arrays
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}

// Initialize a new PhoneBook object
const phoneBook = new PhoneBook();

/**
 * Event listener for the 'Add Entry' form.
 * Adds a new contact to the phonebook when the form is submitted.
 */
document.getElementById('addEntryForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload on form submission
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Add the new entry to the phonebook
    phoneBook.addEntry(firstName, lastName, phoneNumber);
    displayEntries(); // Refresh the displayed list
});

/**
 * Sorts the phonebook based on the selected criteria (first name, last name, or phone number).
 */
function sortPhoneBook() {
    const criteria = document.getElementById('sortCriteria').value;
    phoneBook.sortEntriesBy(criteria); // Sort the entries
    displayEntries(); // Refresh the displayed list
}

/**
 * Displays all the entries in the phonebook on the page.
 * Updates the UI with the latest entries after sorting or adding.
 */
function displayEntries() {
    const list = document.getElementById('phoneBookList');
    list.innerHTML = ''; // Clear the current list

    // Loop through each entry in the phonebook and create a list item
    phoneBook.entries.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.firstName} ${entry.lastName}: ${entry.phoneNumber}`;
        list.appendChild(li); // Add the list item to the phonebook display
    });
}
