import logo from './logo.svg';
import './App.css';

function App() {
  

let topTollywoodActors = [
  "Chiranjeevi","Pawan Kalyan","Mahesh Babu","Prabhas","Jr. NTR","Allu Arjun",
  "Ram Charan","Vijay Deverakonda","Nani","Nagarjuna Akkineni","BalaKrishna","RaviTeja","Venkatesh"
];
let  topBollywoodActors = [
  "ShahRukh Khan","Salman Khan","Aamir Khan","Akshay Kumar","Ranbir Kapoor",
  "Hrithik Roshan","Ajay Devgn","Ranveer Singh","Shahid Kapoor","Amitabh Bachchan"
];
let  topKollywoodActors = [
  "Rajinikanth","Kamal Haasan","Vijay","Ajith Kumar","Suriya","Dhanush","Vikram","Karthi",
  "Sivakarthikeyan","Jayam Ravi"
];
let  topSandalwoodActors = [
  "Yash","Puneeth Rajkumar","Sudeep","Darshan","Rishab Shetty","Rakshit Shetty","Shiva Rajkumar",
  "Upendra","Ganesh","Dhananjay"
];
let topMollywoodActors = [
  "Mohanlal","Mammootty","Dulquer Salmaan","Prithviraj Sukumaran","Fahadh Faasil","Nivin Pauly",
  "Tovino Thomas","Jayasurya","Asif Ali","Indrans"
];


  return (
    <div className="App">
      <h2>Indian Acotrs Array</h2>
      <div>
        <button onClick={()=>{ console.log(topTollywoodActors.length);
         console.log(topTollywoodActors[0])
         console.log(topTollywoodActors[1])
         console.log(topTollywoodActors[2])
         for(let a=3;a<8;a++ ){
          console.log(topTollywoodActors[a])
         }
         for(let a=9;a<topTollywoodActors.length;a++ ){
          console.log(topTollywoodActors.at(a))
         }
          }}>Lenght</button>
        <button onClick={()=>{ 
         console.log(topBollywoodActors)
         console.log(topBollywoodActors.toString())
         console.log(topBollywoodActors.join(" & "))   

        }}>To string</button>
         <button onClick={()=>{
          topTollywoodActors.push("Viswaksen","sharwanand")
          console.log(topTollywoodActors)
            }}>Push</button>
         <button onClick={()=>{ 
           topTollywoodActors.pop()
           console.log(topTollywoodActors)
            }}>Pop</button>
         <button onClick={()=>{
           topTollywoodActors.unshift("NTR","ANR","Krishna")
           console.log(topTollywoodActors)
            }}>Unshift</button>
         <button onClick={()=>{ 
           topTollywoodActors.shift();
           console.log(topTollywoodActors)
           }}>Shift</button>
         <button onClick={()=>{
          console.log(topTollywoodActors)
          topTollywoodActors.splice(7,0,"VarunTej","SaiDharamTej","VishnavTej")
          console.log(topTollywoodActors)
            }}>Splice</button>

          <button onClick={()=>{ 
            let indianActors = topTollywoodActors.concat(topBollywoodActors,topKollywoodActors,
              topSandalwoodActors,topMollywoodActors
            )
            console.log(indianActors)

            
            let topIndianActors = [...topTollywoodActors,...topBollywoodActors,...topKollywoodActors,
              ...topSandalwoodActors,
              ...topMollywoodActors
            ]
            console.log(topIndianActors)
             }}>Concat</button>
          <button onClick={()=>{ 
            console.log(topKollywoodActors)
           let kollywoodActors = topKollywoodActors.slice(7,10)
            console.log(kollywoodActors)
              }}>Slice</button>
          <button onClick={()=>{ 
            let actors = [[topTollywoodActors,topBollywoodActors,topKollywoodActors],topSandalwoodActors,
              topMollywoodActors]
            let actorsArray = actors.flat()
            let actorsArray1 = actors.flat(3)
            console.log(actors)
            console.log(actorsArray)
            console.log(actorsArray1)
             }}>Flat</button>
          
      </div>

     
    </div>
  );
}

export default App;
