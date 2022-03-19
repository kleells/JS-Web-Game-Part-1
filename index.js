// ---- CODE AS PART OF THE ASSIGNMENT ----
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

function newImage (url, left, bottom) {
    let item = document.createElement('img');
    item.src = url;
    item.style.position = 'fixed';
    item.style.left = left + 'px';
    item.style.bottom = bottom + 'px';
    document.body.append(item);
    return item;
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);
// -------------------------------------- 

// ------- SOLUTION FROM REPO --------
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405);
newItem('assets/sheild.png', 165, 100);
newItem('assets/staff.png', 600, 100);

//-------- BROKEN ATTEMPT ---------------
// Can't figure out how to add a class to the 3 images that are needed

// document.querySelectorAll('.weapons').forEach(newItem => {
//     item.addEventListener('dblclick', event => {object.remove})
// })

// newItem('assets/sword.png', 500, 405);
// newItem('assets/sheild.png', 165, 100);
// newItem('assets/staff.png', 600, 100);

//---------------------------------------

// // ------ NOT BROKEN REPETITIVE CODE -----
// let sword = document.createElement('img');
// sword.src = 'assets/sword.png';
// sword.style.position = 'fixed';
// sword.style.left = '500px';
// sword.style.bottom = '405px';
// document.body.append(sword);

// sword.addEventListener('dblclick', function() {
//     sword.remove()
// })

// let shield = document.createElement('img');
// shield.src = 'assets/sheild.png';
// shield.style.position = 'fixed';
// shield.style.left = '165px';
// shield.style.bottom = '100px';
// document.body.append(shield);

// shield.addEventListener('dblclick', function() {
//     shield.remove()
// })

// let staff = document.createElement('img');
// staff.src = 'assets/staff.png';
// staff.style.position = 'fixed';
// staff.style.left = '600px';
// staff.style.bottom = '100px';
// document.body.append(staff);

// staff.addEventListener('dblclick', function() {
//     staff.remove()
// })
//---------------------------------------