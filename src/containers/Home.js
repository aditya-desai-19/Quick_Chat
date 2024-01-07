import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DisplayComponent from '../components/DisplayComponent'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <DisplayComponent
                className={'flex justify-evenly items-center m-4 p-4'}
                firstChild={
                    <>
                        <p className='font-roboto font-bold text-5xl text-blue-500'>Welcome to Quickchat</p>
                        <p className='font-roboto text-3xl text-gray-800 mx-4 my-2'>Where conversations starts...</p>
                    </>
                }
                secondChild={
                    <img
                        className=''
                        src={require('../assets/website.svg')}
                        alt="website"
                    />
                }
            />
            <h2 className='font-lato text-5xl font-bold text-center my-10'>Features</h2>
            <DisplayComponent
                className={'flex justify-between items-center p-4 my-4 bg-blue-500'}
                firstChild={
                    <img
                        src={require('../assets/search.svg')}
                        alt="search"
                    />
                }
                secondChild={
                    <>
                        <p className='font-roboto font-bold text-5xl text-white'>Search your friends</p>
                        <p className='font-roboto text-3xl text-white mx-4 my-2'>
                            With our search feature
                            <FontAwesomeIcon icon={faSearch} className='mx-2' />
                        </p>
                    </>
                }
            />
            <DisplayComponent
                className={'flex justify-evenly items-center m-4 p-4'}
                firstChild={
                    <>
                        <p className='font-roboto font-bold text-5xl text-gray-800'>Send text or images</p>
                        <p className='font-roboto text-xl text-gray-800 mx-4 my-2'>
                            You can edit or delete the message as well
                        </p>
                    </>
                }
                secondChild={
                    <img
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