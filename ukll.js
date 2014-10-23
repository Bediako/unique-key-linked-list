;(function() {
	var _s;

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
		}
	}
	else
	{
	}

	var root = this;
	var previousUkll = root.ukll;

	var ukll = function(obj) {
		if (obj instanceof Ukll) return obj;
		if (!(this instanceof Ukll)) return new ukll(obj);
		this._wrapped = obj;
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = ukll;
		}
		exports.ukll = ukll;
	} else {
		root.ukll = ukll;
	}

	function Node(k, v)
	{
		this.k = k;
		this.v = v;
	}

	var keys = {}; //map of keys to nodes
	var head, tail;

	function assert(b,m)
	{
		if (!b) { throw m; }
	}

	function hasValue(thing)
	{
		return thing != undefined && thing != null;
	}

	function duplicate(k)
	{
		assert(!keys[k], ['key', k, 'is already in the list'].join(' '));
	}

	function present(k)
	{
		assert(keys[k], ['key', k, 'is not in the list'].join(' '));
	}

	function defined(k)
	{
		assert(hasValue(k), ['key', k, 'has no value'].join(' '));
	}

	function result(n)
	{
		var r = n && {k: n.k, v: n.v};

		if (n && n.n)
		{
			r.n = n.n.k;
		}

		if (n && n.p)
		{
			r.p = n.p.k;
		}

		return r;
	}

	function first(n)
	{
		head = tail = n;
		keys[n.k] = n;

		return result(n);
	}

	var append = ukll.append = ukll.a = function(k, v, i)
	{
		var n;

		duplicate(k);

		if (!head)
		{
			n = new Node(k, v);
			n = first(n);
		}
		else
		{
			n = insert(k,v,i||tail.k);
			if (!i) { tail = keys[n.k]; }
		}

		return n;
	};

	var prepend = ukll.prepend = ukll.p = function(k,v,i)
	{
		var n;

		duplicate(k);

		if (!head)
		{
			n = new Node(k,v);
			n = first(n);
		}
		else
		{
			n = insert(k,v,i||head.k,true);
			if (!i) { head = keys[n.k]; }
		}

		return n;
	};

	var insert = ukll.insert = ukll.i = function(k, v, i, prepend)
	{
		defined(k); defined(i); duplicate(k); present(i);

		var n = new Node(k, v);

		var place = keys[i];

		if (!prepend)
		{
			n.p = place;
			n.n = place.n;
			place.n = n;

			if (n.n) { n.n.p = n; }
		}
		else
		{
			n.n = place;
			n.p = place.p;
			place.p = n;

			if (n.p) { n.p.n = n; }
		}

		keys[k] = n;

		return result(n);
	};

	var print = ukll.print = function()
	{
		console.log('head -->');
		this.each(function(k,v) { console.log('[', k, v, '] -->');});
		console.log('tail');
	};

	var some = ukll.some = ukll.s = function(f)
	{
		var n = head, done, c;

		while (n && !done)
		{
			c = n;
			done = f.call(this, n.k, n.v, n);

			if (done) { break; }

			n = n.n;
		}

		c = result(n);
		if (c) { c.d = done; }

		return c;
	};

	var each = ukll.each = ukll.e = function(f)
	{
		this.some(function(k,v,n) { f.call(this, k, v, n); });
	};

	var map = ukll.map = ukll.m = function(f)
	{
		var n = head, l = [];

		while (n)
		{
			l.push(f.call(this, n.k, n.v, n));
			n = n.n;
		}

		return l;
	};

	var list = ukll.list = ukll.l = function()
	{
		return this.map(function(k,v,n) { return result(n); });
	};

	var keys = ukll.keys = ukll.k = function()
	{
		return this.map(function(k,v) { return k; });
	};
	
}).call(this);