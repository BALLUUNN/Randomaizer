const subContainer = document.querySelector('.sub-container');


function randoMaizer(firstIndex, secondIndex) {
    let random = Math.floor(Number(firstIndex) + Number(Math.random() * secondIndex));

    let result = `<div class="result">${random}</div>`;
    subContainer.insertAdjacentHTML('beforeend', result)
};


function resultValues() {
    let firstValue = document.querySelector('.startIndex').value;
    let secondValue = document.querySelector('.endIndex').value;

    if (firstValue && secondValue) {
        randoMaizer(firstValue, secondValue);
    } else {
        let error = '<div class="result error">Введите ваш диапозон!</div>'
        subContainer.insertAdjacentHTML('beforeend', error)
    }
};

document.querySelector('.takeResult').addEventListener('click', () => {
    
    let takeResult = document.querySelectorAll('.result');
    
    if (takeResult.length > 0) {
        
        takeResult.forEach(el => {
            el.remove();
        });


        setTimeout(()=> {
            resultValues();
        },200)
        
    }
    
    else {
        resultValues();
    }
    
})

