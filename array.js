const namaWaifu = ["ayaka", "keqing", "Hu tao"];

console.log(namaWaifu)

namaWaifu.push("Yae Miko");

console.log(namaWaifu)

const namaWaifuGenshin = namaWaifu.slice();

namaWaifu.pop();

console.log(namaWaifu);
console.log(namaWaifuGenshin);


for (let index = 0; index < namaWaifu.length; index++) {
    const element = namaWaifu[index];
    console.log(element);
}