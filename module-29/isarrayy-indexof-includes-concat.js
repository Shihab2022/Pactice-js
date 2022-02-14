//cheak array of

function megaFriend(friends) {
    if (Array.isArray(friends) == false) { //function ar modday ja parameter pass korbo sayta array ki na say ta ceak kira ar jonno ay array ata use korbao
        return 'Please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'sabbir', 'shiraj'];
const myBigBuddy = megaFriend(1234);
console.log(myBigBuddy);


//indesOf and array ar chatray sobgulo aki hobay sob chatray string ar moto tai string ay jay vaby koaray si saykanay daykay korbo 


// concat array 

const first = [1, 2, 3, 4, 5, 6, 7, ];
const second = [10, 11, 15, 80, 99, 50, 100];
const combained = first.concat(second);
console.log(combained);