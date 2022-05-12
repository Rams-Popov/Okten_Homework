
const allClasses = [];

const findAllClasses = (where) =>{
    const element = where.children;
    for (const el of element) {
        if (el.classList.value !== ""){
            const validator = el.classList.value.split(" ")
            if (typeof validator !== "string"){
                for (let string of validator) {
                    if (!allClasses.find(value => value ===string)){
                        allClasses.push(string)
                    }
                }
            }

        }
        if (el.children.length !== 0){
            findAllClasses(el);
        }
    }

}

findAllClasses(document.body);

console.log(allClasses);