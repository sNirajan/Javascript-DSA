
function containsDuplicate(nums){
    const seen = new Set();

    for(const n of nums){
        if (seen.has(n)) return true;   // found a repeat
        seen.add(n);
    }
    return false;
}