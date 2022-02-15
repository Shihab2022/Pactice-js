/* তুমি leader - board - css3 নামে একটা ওয়েবসাইট তৈরি করছিলা বেশ কিছুদিন আগে। এখন সেই ওয়েবসাইটটা আবার ওপেন করো। এরপর নিচের কাজগুলো করো।  */

/* ১. Top Players2022 নাম একটা লেখা আছে। অথবা Top Blogs লেখা আছে। এই দুইটাকে দুইটা ID দাও। HTML চেইঞ্জ করে ID সেট করো। তারপর জাভাস্ক্রিপ্ট দিয়েই সেই এলিমেন্ট খুঁজে বের করে তার টেক্সট এর কালার চেইঞ্জ করে ফেলো।  */


/* 
২. জাভাস্ক্রিপ্ট দিয়ে player ক্লাস এর যতগুলা div আছে সবগুলাকে যেকোন একটা ব্যাকগ্রাউন্ড কালার দাও। তোমার ইচ্ছামতো যেকোন একটা ব্যাকগ্রাউন্ড কালার দিতে হবে। তবে কালারটা hex কালার না দিয়ে। rgba কালার দাও। যদি rgba বুঝতে না পারো। তাহলে গুগলে সার্চ দিয়ে একটা rgba কালার বের করে তারপর সেই কালার দাও।   */



/* ৩. ওয়েবসাইট এর নিচে একটা ul list যোগ করো। সেখানে তোমার ইচ্ছামতো তিনটা আইটেম যোগ করো। তারপর ul এর নিচে একটা বাটন যোগ করো। এখন তোমার কাজ হবে। বাটনে যতবার ক্লিক করবে। ul এর মধ্যে নতুন একটা লিস্ট আইটেম যোগ হবে।  */

// ul add

/* document.getElementById('add-ul-button').addEventListener('click', function() {
    const createUl = document.createElement('ul');
    createUl.innerHTML = ` <li>add-1</li> 
        <li>add-2</li>
        <li>add-3</li>`; //[ ` backtik `]ay sinbol ta babohr koray amra js ar mobday html tag liktypari 

    const parent = document.getElementById('add-ul');
    parent.appendChild(createUl);
}) */

// add li
/* 
document.getElementById('add-button').addEventListener('click', function() {

    const createLi = document.createElement('li');
    createLi.innerText = 'assalamu alikum';
    createLi.classList.add('element');

    const parent = document.getElementById('list');
    parent.appendChild(createLi);
    console.log(createLi);


})
 */






/* 
৪.এখন  ul এর নিচে একটা ইনপুট ফিল্ ড আর একটা বাটন যো গ করো। ইনপুট ফিল্ ড এ শুরুতে মান হবে শূন্ য(০)। তারপর ইনপুট ফিল্ ডের পাশের নতুন বাটন এ যতবার প্ রেস করবে ততবার এক এক করে ইনপুট ফিল্ ড এর মান এক এক করে বাড়বে। */

// let count = 0;
// document.getElementById('minus-num').addEventListener('click', function() {

//     const getTex = document.getElementById('input-field');
//     let countValue = count--;
//     if (countValue >= 0) {
//         getTex.value = countValue;
//     }

// })
// document.getElementById('add-num').addEventListener('click', function() {

//     const getTex = document.getElementById('input-field');
//     getTex.value = count++;

// })


/* ৫.(চ্যালেঞ্জিং ওয়ান)উপরে বাটনে দুইটা শর্ত আছে। সেটা হচ্ছে সংখ্যা বাড়লেও সেটা হবে সর্বোচ্চ ৫। অর্থাৎ ০ থেকে এক এক করে বেড়ে বেড়ে পাঁচ পর্যন্ত হতে পারে। তার উপরে আর বাড়বে না। এবং ৫ হয়ে গেলে বাটনটা ডিজেবল হয়ে যাবে।  */

/* let count = 0;
document.getElementById('minus-num').addEventListener('click', function() {

    const getTex = document.getElementById('input-field');
    let countValue = count--;
    if (countValue >= 0) {
        getTex.value = countValue;
    }
})
document.getElementById('add-num').addEventListener('click', function(e) {
        const getTex = document.getElementById('input-field');
        let countValue = count++
            if (countValue <= 5) {
                getTex.value = countValue;
            } 
            //dusay bol korty parlam na ayta dakty hobay
            else {
                e.disabled = true;
            }
    }) */


/* ৬.শপিং কার্ ট এর ডিজাইন দেখো। তারপর নিজে নিজে HTML, CSS(মন চাইলে কো ন ফ্ রেমওয়ার্ ক বুটস্ ট্ র্ যাপ বা টেইলউইন্ ড) দিয়ে অথবা css৩ দিয়ে নিজে নিজে সিম্ পল সাইট বানিয়ে ফল। */


/* 
৭. তারপর শপিং কার্ ট প্ রজেক্ টটা ইন্ টারএকটিভ করার কাজটা নিজে নিজে করো। একটা শর্ ত রাখতে পারো যে--আমাদের ভিডিও না দেখে করতে পারো কিনা। যদি আমাদের ভিডিও না দেখে করতে পারো। তাহলে সেটা খুবই চমৎকার হবে। আমাদের ভিডিও না দেখলেও গুগল বা ইউটিউবে সার্ চ দিতে পারবে। আর যদি একান্ তই করতে না পারো। তাহলে টুক করে আমাদের ভিডিও দেখে ফেলো। */

/* স্ট্রিং এবং array 
৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম (স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে। 
 */


/* ৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে।  */