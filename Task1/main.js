function Person(name,surname,age){
    this.name=name
    this.surname=surname
    this.age=age
}
const person1=new Person("Asli","Namazova",20)
const person2=new Person("Shabnam","Mammadova",20)
const person3=new Person("Malak","Mansimova",20)
const person4=new Person("Afsana","Hashimova",20)
const people=[person1,person2,person3,person4]


const table = document.getElementById("tableadd")
const tbody=document.getElementById("tbodyadd")

for(let i=0;i<people.length;i++){
    const tr=document.createElement("tr")

    const name=document.createElement("td")
    const nametext=document.createTextNode(people[i].name)
    name.appendChild(nametext)

    const surname=document.createElement("td")
    const surnametext=document.createTextNode(people[i].surname)
    surname.appendChild(surnametext)

    const age=document.createElement("td")
    const agetext=document.createTextNode(people[i].age)
    age.appendChild(agetext)

    tbody.appendChild(tr)
    tr.append(name,surname,age)
    
    }




   