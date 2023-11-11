/**
 * @param {number[]} sticks
 * @return {number}
 */
/**
 * Min Heap
 * *Time: O(N log N)
 * *Space: O(N)
 */
// Runtime: 4235 ms, faster than 5.26% of JavaScript online submissions for Minimum Cost to Connect Sticks.
// Memory Usage: 47.1 MB, less than 15.04% of JavaScript online submissions for Minimum Cost to Connect Sticks.
class MinHeap {
	constructor(array) {
		this.store = [];

		array.forEach(cv => this.insert(cv));
	}

	heapify(A, i) {
		const { length } = this.store;
		let parent = i;
		const L = 2 * i + 1;
		const R = 2 * i + 2;

		if (L < length && A[L] < A[parent]) parent = L;
		if (R < length && A[R] < A[parent]) parent = R;

		if (parent !== i) {
			this.swap(A, i, parent);
			this.heapify(A, parent);
		}
	}

	insert(value) {
		this.store.push(value);

		for (let i = Math.floor(this.store.length / 2 - 1); i > -1; i--) {
			this.heapify(this.store, i);
		}
	}

	delete() {
		if (!this.store.length) return;

		this.swap(this.store, 0, this.store.length - 1);

		const deleted = this.store.pop();

		this.heapify(this.store, 0);

		return deleted;
	}

	swap(A, i, j) {
		[A[i], A[j]] = [A[j], A[i]];
	}

	length() {
		return this.store.length;
	}
}

const connectSticks = sticks => {
	if (sticks.length === 1) return 0;

	const hp = new MinHeap(sticks);
	let output = 0;

	while (hp.length() > 1) {
		const stick1 = hp.delete();
		const stick2 = hp.delete();
		const cost = stick1 + stick2;

		hp.insert(cost);
		output += cost;
	}

	return output;
};