var StockSpanner = function() {
    this.stack = { val: 0, span: 0, next: null };
};

StockSpanner.prototype.next = function(price) {
    let chain = 1,
		cur = this.stack;
    if (price < this.stack.val) {
        this.stack = { val: price, span: 1, next: this.stack };
    } else {
        while (cur !== null && price >= cur.val) {
            chain += cur.span;
            cur = cur.next
        };
        this.stack = { val: price, span: chain, next: cur };
    };
    return chain;
};