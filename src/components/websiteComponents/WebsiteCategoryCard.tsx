import dummyImage from "./websiteAssets/media (2).png"

const WebsiteCategoryCard = () => {
  return (
    <div className='lg:basis-[31.33%] basis-[100%] flex flex-row justify-between rounded-lg overflow-hidden bg-white'>
        <div className='py-4 pl-4 pr-20'>
            <p className='text-sm'>Management</p>
            <p className='text-xs text-[#A09D9D] mt-3'>Featuring</p>
            <p className='text-sm font-medium'>Management blog</p>
        </div>
        <div className='w-[200px] h-[100px]'>
            <img src={dummyImage} className='w-[100%]' alt="" />
        </div>
    </div>
  )
}

export default WebsiteCategoryCard