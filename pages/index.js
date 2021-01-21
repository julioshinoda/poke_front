import { useEffect, useState } from 'react'

const Home = () => {
  const [t1p1, setT1p1] = useState('')
  const [t1p2, setT1p2] = useState('')
  const [t1p3, setT1p3] = useState('')
  const [t1p4, setT1p4] = useState('')
  const [t1p5, setT1p5] = useState('')
  const [t1p6, setT1p6] = useState('')
  const [t2p1, setT2p1] = useState('')
  const [t2p2, setT2p2] = useState('')
  const [t2p3, setT2p3] = useState('')
  const [t2p4, setT2p4] = useState('')
  const [t2p5, setT2p5] = useState('')
  const [t2p6, setT2p6] = useState('')
  const [list, setList] = useState([]);
  const subscribe = async (e) => {
    e.preventDefault() // prevents page reload
    try {
      let t1 = []
      let t2 = []

      if( t1p1 !== ''){
        t1.push({name: t1p1})
      }

      if( t1p2 !== ''){
        t1.push({name: t1p2})
      }
      if( t1p3 !== ''){
        t1.push({name: t1p3})
      }
      if( t1p4 !== ''){
        t1.push({name: t1p4})
      }
      if( t1p5 !== ''){
        t1.push({name: t1p5})
      }
      if( t1p6 !== ''){
        t1.push({name: t1p6})
      }
      if( t2p1 !== ''){
        t2.push({name: t2p1})
      }

      if( t2p2 !== ''){
        t2.push({name: t2p2})
      }
      if( t2p3 !== ''){
        t2.push({name: t2p3})
      }
      if( t2p4 !== ''){
        t2.push({name: t2p4})
      }
      if( t2p5 !== ''){
        t2.push({name: t2p5})
      }
      if( t2p6 !== ''){
        t2.push({name: t2p6})
      }

      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/trade', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_trainer_list: t1,
          second_trainer_list: t2
        })
      })

      if (res.status === 200) {
       await getList()
      } else {
        console.log(res.json())
      }
    } catch (err) {
      console.log(err)
    }
    // alert("You have subscribed!")
    // alert(input)
  }

  const getList = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/trade', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status === 200) {
        const listRes = await res.json()
        listRes.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)) ;
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
        <form action="/" method="post">
          <div><h2>Trainer One</h2></div>

          <div>
            <label for="t1p1">Pokemon 1</label>
            <input type="text" name="t1p1" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t1p1'
              aria-label='pokemon 1'
              placeholder='Enter name of pokemon'
              value={t1p1}
              onChange={e => setT1p1(e.target.value)} />
          </div>

          <div>
            <label for="t1p2">Pokemon 2</label>
            <input type="text" name="t1p2" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t1p2'
              aria-label='pokemon 2'
              placeholder='Enter name of pokemon'
              value={t1p2}
              onChange={e => setT1p2(e.target.value)} />
          </div>

          <div>
            <label for="t1p3">Pokemon 3</label>
            <input type="text" name="t1p3" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t1p3'
              aria-label='pokemon 3'
              placeholder='Enter name of pokemon'
              value={t1p3}
              onChange={e => setT1p3(e.target.value)} />
          </div>

          <div>
            <label for="t1p4">Pokemon 4</label>
            <input type="text" name="t1p4" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t1p4'
              aria-label='pokemon 4'
              placeholder='Enter name of pokemon'
              value={t1p4}
              onChange={e => setT1p4(e.target.value)} />
          </div>

          <div>
            <label for="t1p5">Pokemon 5</label>
            <input type="text" name="t1p5" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t1p5'
              aria-label='pokemon 5'
              placeholder='Enter name of pokemon'
              value={t1p5}
              onChange={e => setT1p5(e.target.value)} />
          </div>

          <div>
            <label for="t1p6">Pokemon 6</label>
            <input type="text" name="t1p6" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t1p6'
              aria-label='pokemon 6'
              placeholder='Enter name of pokemon'
              value={t1p6}
              onChange={e => setT1p6(e.target.value)} />
          </div>

          <div><h2>Trainer Two</h2></div>

          <div>
            <label for="t2p1">Pokemon 1</label>
            <input type="text" name="t2p1" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t2p1'
              aria-label='pokemon 1'
              placeholder='Enter name of pokemon'
              value={t2p1}
              onChange={e => setT2p1(e.target.value)} />
          </div>

          <div>
            <label for="t2p2">Pokemon 2</label>
            <input type="text" name="t2p2" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t2p2'
              aria-label='pokemon 2'
              placeholder='Enter name of pokemon'
              value={t2p2}
              onChange={e => setT2p2(e.target.value)} />
          </div>

          <div>
            <label for="t2p3">Pokemon 3</label>
            <input type="text" name="t2p3" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t2p3'
              aria-label='pokemon 3'
              placeholder='Enter name of pokemon'
              value={t2p3}
              onChange={e => setT2p3(e.target.value)} />
          </div>

          <div>
            <label for="t2p4">Pokemon 4</label>
            <input type="text" name="t2p4" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t2p4'
              aria-label='pokemon 4'
              placeholder='Enter name of pokemon'
              value={t2p4}
              onChange={e => setT2p4(e.target.value)} />
          </div>

          <div>
            <label for="t2p5">Pokemon 5</label>
            <input type="text" name="t2p5" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t2p5'
              aria-label='pokemon 5'
              placeholder='Enter name of pokemon'
              value={t2p5}
              onChange={e => setT2p5(e.target.value)} />
          </div>

          <div>
            <label for="t2p6">Pokemon 6</label>
            <input type="text" name="t2p6" className='bg-gray-200 shadow-inner rounded-l p-2 flex-1'
              id='t2p6'
              aria-label='pokemon 6'
              placeholder='Enter name of pokemon'
              value={t2p6}
              onChange={e => setT2p6(e.target.value)} />
          </div>

          <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r flex flex-col' type='submit' onClick={subscribe}>
            Calculate
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
                        <hr></hr>
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
                      <hr></hr>
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