var l = require('./ukll'), r, map;

function assert(b,m)
{
	if (!b) { throw m; }
}

function hasValue(thing)
{
	return thing != undefined && thing != null;
}

assert(l, 'list not created');

r = l.append('M', 45);

assert(r, 'no result returned');
assert(r.k === 'M', 'wrong key on first append');
assert(r.v === 45, 'wrong value on first append');

r = l.append('B', 45.5);

assert(r, 'no result returned');
assert(r.k === 'B', 'wrong key on append');
assert(r.v === 45.5, 'wrong value on append');

map = l.map(function(k,v,n) { return k; });

assert(map, 'map no returned');
assert(map[0] === 'M', 'key M not returned in right order');
assert(map[1] === 'B', 'key B not returned in right order');

r = l.prepend('I', 2);

assert(r, 'no result returned');
assert(r.k === 'I', 'wrong key on first prepend');
assert(r.v === 2, 'wrong value on first prepend');

map = l.map(function(k,v,n) { return k; });

assert(map, 'map no returned');
assert(map[0] === 'I', 'key I not returned in right order');
assert(map[1] === 'M', 'key M not returned in right order');
assert(map[2] === 'B', 'key B not returned in right order');

r = l.prepend('F', 2.5);

assert(r, 'no result returned');
assert(r.k === 'F', 'wrong key on append');
assert(r.v === 2.5, 'wrong value on append');

map = l.map(function(k,v,n) { return k; });

assert(map, 'map no returned');
assert(map[0] === 'F', 'key F not returned in right order');
assert(map[1] === 'I', 'key I not returned in right order');
assert(map[2] === 'M', 'key M not returned in right order');
assert(map[3] === 'B', 'key B not returned in right order');

r = l.some(function(k,v) { return k === 'I'});

assert(r, 'no result returned');
assert(r.k === 'I', 'wrong key for some');
assert(r.v === 2, 'wrong value for some');
assert(r.p === 'F', 'wrong previous for some');
assert(r.n === 'M', 'wrong value for some');

map = l.list();
assert(map.length === 4, 'wrong size for map returned');

