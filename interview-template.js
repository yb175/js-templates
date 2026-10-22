// ============================================================
// JAVASCRIPT INTERVIEW TEMPLATE
// ============================================================

// ==================== 1. PARSING ====================
const x = Number("123");
const y = parseInt("123", 10);
const parts = str.split(",");
const words = str.trim().split(/\s+/);
const result = arr.join(",");
const clean = str.trim();
const lower = str.toLowerCase();

// ==================== 2. ARRAYS ====================
arr.push(x);        // add at end
arr.pop();          // remove from end
arr.shift();        // remove from front - O(n)
arr.unshift(x);     // add to front - O(n)
arr.slice(l, r);    // [l, r)
arr.splice(i, 1);   // remove 1 element
const board = Array.from(
    { length: n },
    () => Array(n).fill('.')
); // Generating a 2D array

// Always use this 
Array.from({ length: n }, () => [])

// ==================== 3. SORTING ====================
// Numbers
arr.sort((a, b) => a - b);          // ascending
arr.sort((a, b) => b - a);          // descending
// Strings
arr.sort((a, b) => a.localeCompare(b));
// Array of arrays
arr.sort((a, b) => a[0] - b[0]);
arr.sort((a, b) => a[1].localeCompare(b[1]));
// Dates in YYYY-MM-DD format
arr.sort((a, b) => a[1].localeCompare(b[1]));

// ==================== 4. MAP ====================
const map = new Map();
map.set(key, value);
map.get(key);
map.has(key);
map.delete(key);
map.size;
// Frequency map
const freq = new Map();
for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
}
// Iterate
for (const [key, value] of map) {
    // ...
}

// ==================== 5. SET ====================
const set = new Set();
set.add(x);
set.has(x);
set.delete(x);
set.size;
// Remove duplicates
const unique = [...new Set(arr)];

// ==================== 6. STACK ====================
const stack = [];
stack.push(x);
const top = stack[stack.length - 1];
const popped = stack.pop();

// ==================== 7. QUEUE ====================
// Simple queue
const queue = [];
queue.push(x);
const front = queue.shift();
// Efficient queue
const q = [];
let head = 0;
q.push(x);
while (head < q.length) {
    const cur = q[head++];
    // process cur
}

// ==================== 8. DEQUE ====================
const deque = [];
let left = 0;
deque.push(x);                    // back
const back = deque[deque.length - 1];
const frontVal = deque[left++];   // front

// ==================== 9. TWO POINTERS ====================
let l = 0;
let r = arr.length - 1;
while (l < r) {
    if (condition) {
        l++;
    } else {
        r--;
    }
}

// ==================== 10. SLIDING WINDOW ====================
let leftW = 0;
for (let right = 0; right < arr.length; right++) {
    // Add arr[right]
    while (/* window invalid */) {
        // Remove arr[leftW]
        leftW++;
    }
    // Current window = [leftW, right]
}

// ==================== 11. BINARY SEARCH ====================
let lo = 0;
let hi = arr.length - 1;
while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) {
        // found
        break;
    } else if (arr[mid] < target) {
        lo = mid + 1;
    } else {
        hi = mid - 1;
    }
}

// ==================== 12. LOWER BOUND ====================
let lo2 = 0;
let hi2 = arr.length;
while (lo2 < hi2) {
    const mid = Math.floor((lo2 + hi2) / 2);
    if (/* condition is true */) {
        hi2 = mid;
    } else {
        lo2 = mid + 1;
    }
}
// answer = lo2

// ==================== 13. MIN HEAP ====================
class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    push(x) {
        this.heap.push(x);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) {
                break;
            }
            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            let i = 0;
            while (true) {
                const left = 2 * i + 1;
                const right = 2 * i + 2;
                let smallest = i;
                if (
                    left < this.heap.length &&
                    this.heap[left] < this.heap[smallest]
                ) {
                    smallest = left;
                }
                if (
                    right < this.heap.length &&
                    this.heap[right] < this.heap[smallest]
                ) {
                    smallest = right;
                }
                if (smallest === i) {
                    break;
                }
                [this.heap[i], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[i]];
                i = smallest;
            }
        }
        return top;
    }
}

// ==================== 14. MAX HEAP ====================
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    push(x) {
        this.heap.push(x);
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) {
                break;
            }
            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            let i = 0;
            while (true) {
                const left = 2 * i + 1;
                const right = 2 * i + 2;
                let largest = i;
                if (
                    left < this.heap.length &&
                    this.heap[left] > this.heap[largest]
                ) {
                    largest = left;
                }
                if (
                    right < this.heap.length &&
                    this.heap[right] > this.heap[largest]
                ) {
                    largest = right;
                }
                if (largest === i) {
                    break;
                }
                [this.heap[i], this.heap[largest]] =
                    [this.heap[largest], this.heap[i]];
                i = largest;
            }
        }
        return top;
    }
}

// ==================== 15. UNION-FIND (Disjoint Set) ====================
class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.components = n; // optional: track number of components
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        let px = this.find(x);
        let py = this.find(y);
        if (px === py) return false; // already same set

        // union by rank
        if (this.rank[px] < this.rank[py]) {
            [px, py] = [py, px];
        }
        this.parent[py] = px;
        if (this.rank[px] === this.rank[py]) {
            this.rank[px]++;
        }
        this.components--;
        return true;
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

// ==================== 16. BFS ====================
const qBfs = [start];
let qi = 0;
const visited = new Set([start]);
while (qi < qBfs.length) {
    const node = qBfs[qi++];
    for (const next of graph[node]) {
        if (!visited.has(next)) {
            visited.add(next);
            qBfs.push(next);
        }
    }
}

// ==================== 17. DFS ====================
function dfs(node, visited) {
    if (visited.has(node)) {
        return;
    }
    visited.add(node);
    for (const next of graph[node]) {
        dfs(next, visited);
    }
}

// ==================== 18. STRING OPERATIONS ====================
str.includes("abc");
str.startsWith("abc");
str.endsWith("abc");
str.indexOf("abc");     // -1 if not found
str.toLowerCase();
str.toUpperCase();
str.trim();
// Case-insensitive comparison
a.toLowerCase() === b.toLowerCase();
// Case-insensitive contains
str.toLowerCase().includes(target.toLowerCase());

// ==================== 19. REGEX / PARSING ====================
// One or more spaces
const tokens = str.trim().split(/\s+/);
// Matches:
//
// paying for:
// paying for :
// paying off:
// paying off :
const markerRegex = /paying (?:for|off)\s*:/i;
const match = markerRegex.exec(str);
if (match) {
    const marker = match[0];
    const afterMarker = str
        .slice(match.index + marker.length)
        .trim();
}

// ==================== 20. OBJECT ====================
const obj = {};
obj[key] = value;
if (Object.hasOwn(obj, key)) {
    // ...
}

// ==================== 21. NUMBERS ====================
Math.floor(x);
Math.ceil(x);
Math.abs(x);
Math.min(a, b);
Math.max(a, b);
let min = Infinity;
let max = -Infinity;

// ==================== 22. STRING BUILDING ====================
let s = "";
s += "hello";
s += " world";
const output = `Payment ${id} paid ${amount}`;

# JavaScript `slice()` — Quick Revision Notes

## 1. Syntax

```
str.slice(start, end);
arr.slice(start, end);
```

- `start`: Starting index, inclusive.
- `end`: Ending index, exclusive.
- `end` is optional. If omitted, slices until the end.
- Works with both strings and arrays.
- Does not modify the original string or array.

## 2. Examples with strings

```
let s = "Stripe";

s.slice(0, 3);  // "Str"
s.slice(2, 5);  // "rip"
s.slice(2);     // "ripe"
s.slice(-3);    // "ipe"
s.slice(0, -2); // "Strip"
```

Remember: `slice(2, 5)` takes indices `2`, `3`, and `4`.

## 3. Negative indices

Negative indices count backward from the end.

```
let s = "JavaScript";

s.slice(-6);    // "Script"
s.slice(0, -6); // "Java"
s.slice(-6, -3); // "Scr"
```

## 4. Remove the first and last characters

Useful when parsing quoted strings.

```
let s = '"FR"';

s.slice(1, s.length - 1); // "FR"
s.slice(1, -1);           // "FR"
```

Why? The first and last characters are quotes, so we exclude both.

Important: Only do this after confirming that the string starts and ends with `"`. Otherwise, you may remove valid characters.

## 5. Using the sliced result

`slice()` returns a new value. Store it or use it directly.

```
let s = '"FR"';

let value = s.slice(1, -1);

console.log(value); // FR
console.log(s);     // "FR" — original unchanged
```

You can also compare it directly:

```
if (s.slice(1, -1) === "FR") {
    console.log("Matched");
}
```

## 6. `slice()` with arrays

```
let nums = [10, 20, 30, 40, 50];

nums.slice(1, 4); // [20, 30, 40]
nums.slice(2);    // [30, 40, 50]
nums.slice(-2);   // [40, 50]

console.log(nums); // Original array unchanged
```

## 7. `slice()` vs. `splice()`

| `slice()`                   | `splice()`                    |
| --------------------------- | ----------------------------- |
| Returns a selected portion  | Can remove or insert elements |
| Does not modify original    | Modifies original array       |
| Works on strings and arrays | Works on arrays               |

## 8. Interview cheat sheet

| Goal                   | Code             |
| ---------------------- | ---------------- |
| First 3 characters     | `s.slice(0, 3)`  |
| From index 2 onward    | `s.slice(2)`     |
| Last 3 characters      | `s.slice(-3)`    |
| Remove first character | `s.slice(1)`     |
| Remove last character  | `s.slice(0, -1)` |
| Remove first and last  | `s.slice(1, -1)` |
| Copy an entire array   | `arr.slice()`    |


// ==================== 23. COMPLEXITY ====================
//
// Array push/pop       O(1) amortized
// Array shift/unshift  O(n)
// Map get/set/has      O(1) average
// Set add/has/delete   O(1) average
// Array sort           O(n log n)
// Binary search        O(log n)
// Heap push/pop        O(log n)
// Heap peek            O(1)
// Union-Find (almost)  O(α(n)) ~ O(1)
// BFS / DFS            O(V + E)

// ==================== INTERVIEW FLOW ====================
//
// 1. Read the entire problem.
// 2. Identify the important entities/data.
// 3. Clarify ambiguous requirements.
// 4. Explain your approach BEFORE coding.
// 5. Code the simplest correct solution.
// 6. Test the example manually.
// 7. Test edge cases.
// 8. State time + space complexity.
// 9. Only optimize if necessary.
