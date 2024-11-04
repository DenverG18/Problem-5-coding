function colors(){
    let Favocolors =[];

    for (let i = 0; i < 3; i++) {
        let EnterColor = prompt("Enter Your Three Favorite Colors.")
        Favocolors.push(EnterColor);
        alert("Your Favorite Color are : " + Favocolors);
    }
    let PushColor = prompt("Add Another Color .");
    Favocolors.push(PushColor);
    alert("Your New Colors Are: " + Favocolors)
}