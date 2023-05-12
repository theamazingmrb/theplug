// import TalentSearch from './components/TalentSearch'
// import Signup from './components/SignupForm'
import Link from 'next/link'
import { TalentProps } from '@/lib/common.types';
import { getSingleTalent } from '@/app/services/talent.service';

export const revalidate = 300

export default async function Talent({ params }) {

  const talent = await getSingleTalent(params.id)

  return (
    <div className='card'>
      <Link href={'/talent/'} className='btn btn-back'>Back To Talent
      </Link>
      <h2>{talent.first_name} {talent.last_name} </h2>
      <p>{talent.bio}</p>
      <p>{talent.email}</p>
      <p>{talent.phone_number}</p>
      {/* <p>{talent.state}</p> */}

    </div >
  );
};
