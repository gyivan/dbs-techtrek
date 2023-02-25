import { data } from 'browserslist';
import {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';




const useFetch = (url) => {

        
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)    


    useEffect(() => { 
        const abortCont = new AbortController()
        
            fetch(url, {signal: AbortController.signal})
                .then(res => {
                    // console.log(res)
                    if (!res.ok) {
                        throw Error('could not fetch data for that resource')
                    }
                    return res.json()
            })
                .then(data => {
                    console.log(data)
                    setData(data)
                    setIsLoading(false)
                    setError(null)
            })
            .catch (err => {
                if (err.name === 'AbortError') {
                    console.log ('fetch aborted')
                } else {
                setError(err.message)
                setIsLoading(false)
                }
            })
            
            

        return () => abortCont.abort();
    
        }, [url])

        return {isLoading, data, error}
    
}

const InsurancePolicies = () => {
    const {data, error, isLoading} = useFetch("")


    return (
        <div className = 'insurance-details'>
              <article>
                <td> test 123213{data.InsuranceID}</td>
                <td> test info {data.EmployeeID}</td>
                <td> {data.PolicyStartDate} </td>
            </article>
        </div>
    )


}

function InsurancePolicy() {
    return (
      <Table Insurance Policy="sm">
        <thead>
          <tr>
            <th>Insurance ID</th>
            <th>EmployeeID</th>
            <th>Policy Start Date</th>
            <th>Policy Term</th>
            <th>Policy End Date</th>
            <th>Policy Claim limit</th>
            <th>Remaining Claim limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default InsurancePolicy