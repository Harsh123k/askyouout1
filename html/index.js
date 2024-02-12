document.getElementById('button1').onclick = function () {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
};

document.getElementById('button2').onclick = function () {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
};

document.getElementById('button3').onclick = function () {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
};
document.getElementById('button43').onclick = function () {
    document.getElementById('step4').style.display = 'none';

    // Display another button and text
    var newButton = document.createElement('button');

    newButton.textContent = 'Chal ab dm kar ha ya na!';
    newButton.id = 'newButton';

    var newText = document.createElement('p');
    newText.textContent = `Is your name Google? Because you got everything i am searching for this Valentine's Day`;
    newText.id = 'newText';

    // Append the new button and text to the body
    
    document.body.appendChild(newText);
    document.body.appendChild(newButton);

    // Add click event handler for the new button
    
    newButton.onclick = function (){
        document.getElementById('gifImage').style.display = 'block';
    }
};
document.getElementById('button4').onclick = function () {
    // Hide the text and buttons
    document.getElementById('text4').style.display = 'none';
    document.getElementById('button4').style.display = 'none';
    document.getElementById('button42').style.display = 'none';
    document.getElementById('button43').style.display = 'none';

    // Display the GIF
    document.getElementById('gifImage').style.display = 'block';
};
document.getElementById('button42').onclick = function () {
    // Display the "Firse soch . Maan jaa yaar!" text and "Yes" button
    var reconsiderText = document.createElement('p');
    reconsiderText.textContent = 'Firse soch. Maan jaa yaar!Please?!?!';
    reconsiderText.id = 'reconsiderText';

    var yesButton = document.createElement('button');
    yesButton.textContent = 'Ok';
    yesButton.id = 'yesButton';

    // Append the new text and button to the body
    document.body.appendChild(reconsiderText);
    document.body.appendChild(yesButton);

    // Add click event handler for the "Yes" button
    yesButton.onclick = function () {
        // Display the GIF
        document.getElementById('gifImage').style.display = 'block';
    };
};