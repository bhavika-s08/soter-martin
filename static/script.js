function communication_card() 
{
    const card1 = document.getElementById('communication');

    card1.addEventListener('mouseover', function() {
        // Clear the card and show "hi"
        card1.innerHTML = '';  
        let p = document.createElement('p');
        p.innerHTML = "hi";
        card1.appendChild(p);
    });

    card1.addEventListener('mouseout', function() {
        // Reset back to original message
        card1.innerHTML = "Communication.";
    });
}

communication_card();
