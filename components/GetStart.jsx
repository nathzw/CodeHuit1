import styles from "../styles";
// import {mouse} from '../public'
const GetStart = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}
    >
<img src="../stamp.png" alt="stamp" className="object-contain" />
    </div>
  </div>
);
export default GetStart;
{/* <div className={`${styles.flexStart} flex-row`}>
<p className="font-bold text-[20px] leading-[23px]  items-center">
  <span className="mt-4 text-white ">Go</span>
</p>
<img
    src='../mouse.png'
    alt="mouse"
    className='w-[40px] h-[40px] object-contain '
  />
</div>
<p className="font-bold text-[20px] leading-23px">
  <span className="text-white">Scroll</span>
</p> */}
