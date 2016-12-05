const fn = (a = 1) => a;

fn(); // returns 1;
fn(0); // returns 0;
fn(undefined); // returns 1;
// but
fn(null); // returns null!;