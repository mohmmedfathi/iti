function f1(x, y) {
    if (x > 3) {
      var z = 3;
    } else {
      var zz = 3;
    }
    console.log(z, zz); // undefined 3
    zzz = 300;
  }
  f1(1,3);
  alert(zzz);