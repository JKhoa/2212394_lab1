// Kiem tra so nguyen to
function laSoNguyenTo(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

// Dao nguoc chuoi
function daoNguocChuoi(str) {
  return String(str).split("").reverse().join("");
}

// Tim so lon nhat trong mang
function timSoLonNhat(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Mang khong hop le");
  }
  return Math.max(...arr);
}

console.log("laSoNguyenTo(17):", laSoNguyenTo(17));
console.log("daoNguocChuoi('CTK46'):", daoNguocChuoi("CTK46"));
console.log("timSoLonNhat([3, 10, 7]):", timSoLonNhat([3, 10, 7]));
