import Image from "next/image";
import randomPic from '../public/fff.png';
import { useRouter } from 'next/router';
import styled from '@emotion/styled'

const ChestSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 24px;
    align-items: center;
    height: calc(100vh - 58px);
`;

const ChestBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 90px 24px;
    align-items: center;
`;

const Profile = styled.div`
    width: 50%;
    height: 100%;
    margin-left: 40px;
`;

const Div = styled.div`
    width : 60%;
    padding-top: 15%;
`;

export default function Chest() {
  const router = useRouter();
  console.log(router);
  return (
    <ChestSection>
        <div className='text-2xl font-semibold'>Juwon Hong</div>
        <ChestBox>
            <Image className="w-1/2" src={randomPic} alt="" width={300} height={300}/>
            <Profile>
              <Div>Handong Global University</Div>
              <Div>Computer Science & Global Entrepreneurship</Div>
              <Div>Web Noob</Div>
            </Profile>
        </ChestBox>
    </ChestSection>
  );
}