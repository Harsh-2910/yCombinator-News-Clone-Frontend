import './App.css';
import Navbar from './components/Navbar';
import JobLists from './components/Jobs/JobLists';

function App() {
  return (
      <div className='mainContainer'>
        <table id='hnmain'>
          <tbody>
            <tr>
              <td style={{backgroundColor:"#ff6600"}}>
                <Navbar/>
              </td>
            </tr>
            <tr style={{height:"10px"}}></tr>
            <JobLists/>
          </tbody>
        </table>
      </div>
  );
}

export default App;
