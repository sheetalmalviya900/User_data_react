import { useState } from 'react';
import './App.css';
function Signup() {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, SetEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])
  const [searcharr, setsearcharr] = useState([])
  const [filter, setfilter] = useState(false)
  const [s, setS] = useState("")
  return (
    <div>
      <h1>User Data (Search and add
        )</h1>
      <input id='search' type="text" value={s} placeholder="search" onChange={(e) => {
        setS(e.target.value)
      }} />
      <button id="search1" onClick={() => {
        if (s.length > 4) {
          var newarr = []
          for (var i of data) {
            for (var j in i) {
              if (i[j] === s) {
                newarr.push(i)
                break
              }
            }
          }
          setsearcharr(newarr)
          setfilter(true)
        }
        else {
          alert("Enter atleast length of 4 string")
        }
        setS("")
      }}>Search</button>
      <br />

      <input type="text" placeholder='Firstname' required value={firstname} onChange={(e) => {
        setFirstName(e.target.value)
      }} />
      <input type="text" placeholder='Lasttname' required value={lastname} onChange={(e) => {
        setLastName(e.target.value)
      }} />
      <input type="email" placeholder='email' required value={email} onChange={(e) => {
        SetEmail(e.target.value)
      }} />
      <input type="password" placeholder='Password' required value={password} onChange={(e) => {
        setPassword(e.target.value)
      }} />

      <button onClick={() => {
        let obj = {
          Firstname: firstname,
          Lastname: lastname,
          Email: email,
          password: password
        }
        setData([...data, obj])
        setFirstName("")
        setLastName("")
        SetEmail("")
        setPassword("")
        setfilter(false)
      }}>Signup</button>
      <hr />
      <div>
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {
            filter ? searcharr.map((item, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{item.Firstname}  </td>
                    <td>{item.Lastname}  </td>
                    <td>{item.Email}  </td>
                    <td>{item.password}  </td>
                  </tr>
                </tbody>)
            })
              :
              data.map((item, index) => {
                return (
                  <tbody>
                    <tr>
                      <td>{item.Firstname}  </td>
                      <td>{item.Lastname}  </td>
                      <td>{item.Email}  </td>
                      <td>{item.password}
                      </td>
                    </tr>
                  </tbody>
                )
              })
          }
        </table>
      </div>
    </div>
  )
}
export default Signup;