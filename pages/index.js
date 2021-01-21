import { useEffect, useState } from 'react'

const Home = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([]);
  const subscribe = async (e) => {
    e.preventDefault() // prevents page reload
    try {
      const res = await fetch('./api/subscribe', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailAddress: input
        })
      })

      if (res.status === 200) {
        alert('You are subscribed!')
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch (err) {
      alert('Sorry, something went wrong.')
    }
    // alert("You have subscribed!")
    // alert(input)
  }

  const getList = async () => {
    try {
      const res = await fetch('http://localhost:9001/trade', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status === 200) {
        const listRes = await res.json()
        setList(listRes)
        console.log(listRes)
      } else {
        alert('Sorry, something went wrong.')
      }
    } catch (err) {
      console.log(err)
      alert('Sorry, something went wrong.s')
    }
  };

  useEffect(() => {
    getList()
  }, []);

  return (
    <div>

      <div className='p-8 justify-center items-center flex flex-col'>
        <form className='flex'>
          <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
            id='email'
            type='email'
            aria-label='email address'
            placeholder='Enter your email address'
            value={input}
            onChange={e => setInput(e.target.value)} />

          <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
            id='email'
            type='email'
            aria-label='email address'
            placeholder='Enter your email address'
            value={input}
            onChange={e => setInput(e.target.value)} />

          <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r flex flex-col' type='submit' onClick={subscribe}>
            Sign Up
        </button>
        </form>

      </div>
      <div className='p-1 justify-center items-center flex flex-col'>
        <h2>List</h2>

        <table class="shadow-lg bg-white">

          <tr>
            <th>ID</th>
            <th>Trainer One</th>
            <th>Country</th>
            <th>Fair trade</th>
          </tr>
          {list.map(item => {
            return (
              <tr>
                <th class=" border text-left px-8 py-4">{item.id}</th>
                <th class=" border text-left px-8 py-4 ">
                  {item.first_trainer_list.map(p => {
                    return (
                      <div>
                        {'id:' + p.id}
                        <br></br>
                        {'name:' + p.name}
                        <br></br>
                        {'base_experience:' + p.base_experience}
                      </div>
                    )
                  })

                  }

                </th>
                <th class="border text-left px-8 py-4">  {item.second_trainer_list.map(p => {
                    return (
                      <div>
                        {'id:' + p.id}
                        <br></br>
                        {'name:' + p.name}
                        <br></br>
                        {'base_experience:' + p.base_experience}
                      </div>
                    )
                  })

                  }</th>
                <th class="bg-blue-100 border text-left px-8 py-4">{JSON.stringify(item.fair)}</th>
              </tr>
            );
          })}

        </table>
      </div>

    </div>
  )
}

export default Home