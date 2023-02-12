function calculateSalary(work){
    switch (work){
        case "ceo":
            return 2200;
        case "manager":
            return 1800;
        case "cto":
            return 1800;
        case "developer":
            return 1500;
        default: 
            return 1000;
    }
}


const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);