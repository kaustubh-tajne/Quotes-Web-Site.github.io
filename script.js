const api = 'https://type.fit/api/quotes';
let btn = document.getElementById('btn');


let arrayMain = [];
function numIter(params) {
    let nextNum = 0;
    return {
        next() {
            if (nextNum < params.length) {
                return {
                    value: params[nextNum++],
                    done: false
                }
            }
            else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}

function callAPi() {
    // setTimeout(() => {
    fetch(api).then((response) => {
        return response.json();
    }).then((data) => {
        // console.log(data);
        arrayMain = data;
        // let d = JSON.parse(data);
        // let d = data;
        // let ul = document.getElementById('ul');
        // ul.innerHTML = '';
        // d.forEach((element) => {
        //     let e = document.createElement('li');
        //     e.innerText = element.text;
        //     ul.appendChild(e);
        // });
        let iter = document.getElementById('nextQuote');
        let obj = numIter(arrayMain);
        console.log(arrayMain);

        iter.addEventListener('click', () => {
            let message = obj.next();
            console.log(message);
            let double = document.getElementById('double');
            let author = document.getElementById('author');
            double.innerHTML = message.value.text;
            author.innerHTML = message.value.author;
        })


    }).catch((err) => {
        console.log(err);
    })
    // }, 2000);
    // document.getElementById('ul').innerHTML = `<h1>Fetching..</h1>`;

}

callAPi();

