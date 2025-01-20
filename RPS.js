let score = JSON.parse(localStorage.getItem('scores'))
    || { wins: 0, ties: 0, loses: 0 };
function updateScoreDisplay() {
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}; Ties: ${score.ties}; Losses: ${score.loses}`;
}
function genCompMove() {
    let computerMove;
    let rand = Math.floor(Math.random() * (3)) + 1;
    if (rand === 1)
        computerMove = 'Rock';
    else if (rand === 2)
        computerMove = 'Paper';
    else
        computerMove = 'Scissors';
    return computerMove;
}
function checkWhoWin(chose) {
    let computerMove = genCompMove();
    let result;
    if (chose === computerMove)
        result = 'Tie';
    else if ((chose === 'Rock' && computerMove === 'Scissors') ||
        (chose === 'Paper' && computerMove === 'Rock') ||
        (chose === 'Scissors' && computerMove === 'Paper'))
        result = 'Win';

    else
        result = 'Lose';

    if (result === 'Tie')
        score.ties += 1;
    else if (result === 'Lose')
        score.loses += 1;
    else
        score.wins += 1;

    document.querySelector('.result').innerHTML = `You ${result}`;
    document.querySelector('.chosen').innerHTML = `You <img src="${chose}.svg">  <img src="${computerMove}.svg"> Computer`;
    updateScoreDisplay();

    localStorage.setItem('scores', JSON.stringify(score));
}
function resetGame() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('scores');
    document.querySelector('.result').innerHTML = '';
    document.querySelector('.chosen').innerHTML = '';
    updateScoreDisplay();
}