export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;

    while (lo <= hi) {
        const m = Math.floor((lo + hi) / 2);
        
        if (needle === haystack[m]) {
            return true;
        } else if (needle < haystack[m]) {
            hi = m - 1;
        } else {
            lo = m + 1;
        }
    }

    return false;
}