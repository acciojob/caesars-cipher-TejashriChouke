function rot13(encodedString) {
  // Define a function to shift a single character by 13 positions
  function shiftChar(char) {
    const charCode = char.charCodeAt(0);
    if (char >= 'A' && char <= 'Z') {
      // Shift uppercase letters
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (char >= 'a' && char <= 'z') {
      // Shift lowercase letters
      return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      // Non-alphabetic characters, leave them unchanged
      return char;
    }
  }

  // Split the input string into an array of characters, apply the shift function, and join them back
  return encodedString.split('').map(shiftChar).join('');
}

// Example usage:
//const encodedText = "SERR PBQR PNZC";
//const decodedText = rot13(encodedText);
//console.log(decodedText); // Output: "FREE CODE CAMP"

