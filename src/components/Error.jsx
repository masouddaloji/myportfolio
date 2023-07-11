//icons
import {ImWarning} from 'react-icons/im'

const Error = () => {
  return (
    <section className='w-1/2 text-sm flex items-center gap-x-2.5 mx-auto my-2.5 dark:bg-white bg-silver  text-primary rounded-xl px-10 py-2 '>
    <ImWarning className=' text-xl  '/>
        <p className=" ">موردی برای این دسته بندی یافت نشد</p>
    </section>
  )
}

export default Error