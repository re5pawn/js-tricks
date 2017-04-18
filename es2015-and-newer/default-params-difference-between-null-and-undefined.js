const fn = (a = 1) => a;

fn(); // 1
fn(0); // 0
fn(undefined); // 1
// Beware!
fn(null); // null
