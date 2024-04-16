const App = () => {
  const originalValue = "Welcome to Scotia Digital";
  const [Phrase, setPhrase] = useState('Welcome to Scotia Digital');
  const [count, setCount] = useState(0);
 
  const handleReverse = () => {
    // const reversed = Phrase.split('').reverse().join('');
    // setPhrase(reversed);
    let reversed = '';
    // Reverse 
    for (let i = Phrase.length-1; i > Phrase.length; i--) {
      let temp = Phrase[i];
      reverse.push(temp);
    }
    
     setPhrase(reversed);
    
    if (reversed !== originalValue) {
       setCount(count + 1);
    }
  }

  React.createElement('div', { className: 'container' }, 'Welcome to ths ScotiaBank');
};

/* 
  Requirements:
  
  1: Create a button that reverses the string Phrase (line 5) when pressed and will undo the reverse

  2: Make a counter that only counts (increments) the number of times the string went from its normal "Welcome to Scotia Digital" to reverse only

  3: Implement the reverse algorithm yourself from first principles. Do not rely on any libraries or built in functions
*/

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createRootElement(App));