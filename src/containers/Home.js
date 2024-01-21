import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DisplayComponent from '../components/DisplayComponent'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <DisplayComponent
                className={'flex justify-between items-center m-4 p-4 max-md:flex-col'}
                firstChild={
                    <>
                        <p className='font-roboto font-bold text-5xl text-blue-500 mx-4 w-full lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl min-[320px]:text-xl'>Welcome to Quickchat</p>
                        <p className='font-roboto text-3xl text-gray-800 mx-4 my-2 lg:text-2xl md:text-xl sm:text-lg xsm:text-sm min-[320px]:text-sm'>Where conversations starts...</p>
                    </>
                }
                secondChild={
                    <img
                        className='lg:w-4/5 lg:h-4/5 lg:ml-20 md:ml-20 md:w-4/5 md:h-3/5 sm:w-4/5 sm:my-2 sm:mx-auto xsm:h-2/5'
                        src={require('../assets/website.svg')}
                        alt="website"
                    />
                }
            />
            <h2 className='font-lato text-5xl font-bold text-center my-10 lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl min-[320px]:text-xl'>Features</h2>
            <DisplayComponent
                className={'flex justify-between items-center p-4 max-md:flex-col bg-blue-500'}
                firstChild={
                    <img
                        className='lg:w-4/5 lg:h-4/5 lg:mr-20 md:mr-20 md:w-4/5 md:h-3/5 sm:w-4/5 sm:my-2 sm:mx-auto xsm:h-2/5'
                        src={require('../assets/search.svg')}
                        alt="search"
                    />
                }
                secondChild={
                    <>
                        <p className='font-roboto font-bold text-5xl text-white lg:text-4xl md:text-3xl sm:text-2xl max-sm:my-2 xsm:text-xl min-[320px]:text-xl'>Search your friends</p>
                        <p className='font-roboto text-3xl text-white my-2 lg:text-2xl md:text-xl sm:text-lg xsm:text-sm min-[320px]:text-sm'>
                            With our search feature
                            <FontAwesomeIcon icon={faSearch} className='mx-2' />
                        </p>
                    </>
                }
            />
            <DisplayComponent
                className={'flex justify-between items-center m-4 p-4 max-md:flex-col'}
                firstChild={
                    <>
                        <p className='font-roboto font-bold text-5xl text-gray-800 mx-4 lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl min-[320px]:text-xl'>Send text or images</p>
                        <p className='font-roboto text-xl text-gray-800 mx-4 my-2 lg:text-xl md:text-xl sm:text-lg xsm:text-sm min-[320px]:text-sm'>
                            You can delete the message as well
                        </p>
                    </>
                }
                secondChild={
                    <img
                        className='lg:w-4/5 lg:h-4/5 lg:ml-20 md:ml-20 md:w-4/5 md:h-3/5 sm:w-4/5 sm:my-2 sm:mx-auto xsm:h-2/5'
                        src={require('../assets/writer.svg')}
                        alt="write"
                    />
                }
            />
            <Footer />
        </div>
    )
}

export default Home