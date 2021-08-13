import React, {useState, useEffect} from 'react'


function Game() {
    const [A1, ChangeA1] = useState('')
    const [B1, ChangeB1] = useState('')
    const [C1, ChangeC1] = useState('')
    const [A2, ChangeA2] = useState('')
    const [B2, ChangeB2] = useState('')
    const [C2, ChangeC2] = useState('')
    const [A3, ChangeA3] = useState('')
    const [B3, ChangeB3] = useState('')
    const [C3, ChangeC3] = useState('')
    const [Player1, changePlayer1] = useState('X')
    const [Player2, changePlayer2] = useState('O')
    const [currentPlayer, changePlayer] = useState(Player1)
    const [result, changeResult] = useState()

    const switchPlayer = () => {
        currentPlayer === Player1? changePlayer(Player2) : changePlayer(Player1)
        
    }
    useEffect(() => {
        if ((A1 === Player1) && (B1 === Player1) && (C1 === Player1)) {
            changeResult('Player 1 Won')
        }else if((A2 === Player1) && (B2 === Player1) && (C2 === Player1)){
            changeResult('Player 1 Won')
        }else if((A3 === Player1) && (B3 === Player1) && (C3 === Player1)){
            changeResult('Player 1 Won')
        }else if((A1 === Player1) && (A2 === Player1) && (A3 === Player1)){
            changeResult('Player 1 Won')
        }else if((B1 === Player1) && (B2 === Player1) && (B3 === Player1)){
            changeResult('Player 1 Won')
        }else if((C1 === Player1) && (C2 === Player1) && (C3 === Player1)){
            changeResult('Player 1 Won')
        }else if((A1 === Player1) && (B2 === Player1) && (C3 === Player1)){
            changeResult('Player 1 Won')
        }else if((A3 === Player1) && (B2 === Player1) && (C1 === Player1)){
            changeResult('Player 1 Won')
        }else if((A2 === Player2) && (B2 === Player2) && (C2 === Player2)){
            changeResult('Player 2 Won')
        }else if((A3 === Player2) && (B3 === Player2) && (C3 === Player2)){
            changeResult('Player 2 Won')
        }else if((A1 === Player2) && (A2 === Player2) && (A3 === Player2)){
            changeResult('Player 2 Won')
        }else if((B1 === Player2) && (B2 === Player2) && (B3 === Player2)){
            changeResult('Player 2 Won')
        }else if((C1 === Player2) && (C2 === Player2) && (C3 === Player2)){
            changeResult('Player 2 Won')
        }else if((A1 === Player2) && (B2 === Player2) && (C3 === Player2)){
            changeResult('Player 2 Won')
        }else if((A3 === Player2) && (B2 === Player2) && (C1 === Player2)){
            changeResult('Player 2 Won')}
        
        
    }, [A1, Player1, B1, C1, A2, B2, C2, A3, B3, C3, Player2])
    
    return (
        <div>
            <div className='grid'>
            
           
            <div className='cell'><button value={A1} onClick={()=>{
                ChangeA1(currentPlayer)
                switchPlayer()}}>{A1}</button></div>
            <div className='cell'><button value={B1} onClick={()=>{
                ChangeB1(currentPlayer)
                switchPlayer()}}>{B1}</button></div>
            <div className='cell'><button value={C1} onClick={()=>{
                ChangeC1(currentPlayer)
                switchPlayer()}}>{C1}</button></div>
            <div className='cell'><button value={A2} onClick={()=>{
                ChangeA2(currentPlayer)
                switchPlayer()}}>{A2}</button></div>
            <div className='cell'><button value={B2} onClick={()=>{
                ChangeB2(currentPlayer)
                switchPlayer()}}>{B2}</button></div>
            <div className='cell'><button value={C2} onClick={()=>{
                ChangeC2(currentPlayer)
                switchPlayer()}}>{C2}</button></div>
            
            <div className='cell'><button value={A3} onClick={()=>{
                ChangeA3(currentPlayer)
                switchPlayer()}}>{A3}</button></div>
            <div className='cell'><button value={B3} onClick={()=>{
                ChangeB3(currentPlayer)
                switchPlayer()}}>{B3}</button></div>
            <div className='cell'><button value={C3} onClick={()=>{
                ChangeC3(currentPlayer)
                switchPlayer()}}>{C3}</button></div>
         
            </div>
            <div className='NewGame'><button onClick={() => window.location.reload()}>New Game</button></div>

            
            {/* { (A1 && B1) === Player1? <p>Winner</p> : (A2 && B2) === Player1? <p>Winner</p> : (A3 && B3 && C3) === Player1? <p>Winner</p> : (A1 && B2 && C3) === 'X'? <p>Winner</p> : (A3 && B2 && C1) === 'X'? <p>Winner</p> : (A1 && A2 && A3) === 'X'? <p>Winner</p> : (B1 && B2 && B3) === 'X'? <p>Winner</p> : (C1 && C2 && C3) === 'X'? <p>Winner</p> : null }
            { (A1 && B1 && C1) === Player2? <p>Winner</p> : (A2 && B2 && C2) === Player2? <p>Winner</p> : (A3 && B3 && C3) === 'O'? <p>Winner</p> : (A1 && B2 && C3) === 'O'? <p>Winner</p> : (A3 && B2 && C1) === 'O'? <p>Winner</p> : (A1 && A2 && A3) === 'O'? <p>Winner</p> : (B1 && B2 && B3) === 'O'? <p>Winner</p> : (C1 && C2 && C3) === 'O'? <p>Winner</p> : null }
            
            Need this to work */}
            
            
            {result? <p>{result}</p> : null}
           
      
        </div>
    )
}

export default Game
