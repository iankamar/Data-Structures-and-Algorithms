var wordPattern = function(pattern, s) {
    // Split the string into words
    const words = s.split(' ');

    // Create two maps to store the pattern-word relationships
    const patternToWord = new Map();
    const wordToPattern = new Map();

    // If the pattern and the words don't have the same length, they can't match
    if (pattern.length !== words.length) return false;

    // Iterate over the pattern and the words at the same time
    for (let i = 0; i < pattern.length; i++) {
        const currentPattern = pattern[i];
        const currentWord = words[i];

        // If the current pattern-word pair doesn't match the existing mappings, return false
        if ((patternToWord.has(currentPattern) && patternToWord.get(currentPattern) !== currentWord) ||
            (wordToPattern.has(currentWord) && wordToPattern.get(currentWord) !== currentPattern)) {
            return false;
        }

        // Add the current pattern-word pair to the mappings
        patternToWord.set(currentPattern, currentWord);
        wordToPattern.set(currentWord, currentPattern);
    }

    // If we've checked all pattern-word pairs and found no inconsistencies, return true
    return true;
};
