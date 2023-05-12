// import TalentSearch from './components/TalentSearch'
// import Signup from './components/SignupForm'
import Link from 'next/link'
// import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import TalentCard from '../components/TalentCard';
import { getTalent } from '../services/talent.service';
export const revalidate = 300

export default async function Talent() {
  const talent = await getTalent();

  return (
    <div className='repos-container'>
      <h2>Talent Network</h2>
      <ul className='repo-list'>
        {talent.map((person) => (
          <li key={person.id}>
            <Link href={`/talent/${person.id}`}>
              <h3>{person.first_name} {person.last_name}</h3>

              <div className='p-20 bg-purple-100'>
                <div className='bg-white rounded-lg shadow-lg w-fill md:w-1/2'>
                  <img src="https://randomuser.me/api/portraits/med/men/26.jpg" alt="kobe" className='rounded-t-lg' />
                  <div className='p-6'>
                    <p className='text-purple-700 mb-2'>{person.title}</p>
                    <p className='text-purple-600 hover:text-purple-500' href="">Company: {person.company}</p>
                    <p className='text-purple-700 mb-2'>Location: {person.state}</p>
                  </div>
                </div>
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
