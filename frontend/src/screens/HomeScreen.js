import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Flex, Heading, Image, Link } from '@chakra-ui/react'

const HomeScreen = () => {
    return (
        <Flex align='center' flexDir='column'>
            {/* deals of the day  */}
            <Flex align='center' flexDir='column'>
                <Heading
                    as='h3'
                    class='uppercase xs:text-2xl tracking-thin font-semibold lg:text-4xl'>
                    deals of the day
                </Heading>
                {/* <Flex mt='10'> */}
                <div class='grid xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-5'>
                    <Link
                        as={RouterLink}
                        class='lg:w-60 xs:w-40  ml-7 h-full object-cover'
                        to='/brand/extraoffres'
                        _focus='none'
                        ml='12'
                        mr='7'>
                        <Image
                            src='./homeScreenImages/DEALSOFTHEDAY/img-1.jpg'
                            alt='extraoffres'
                            // class='xs:w-40 w-48 h-full object-cover'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='lg:w-60 xs:w-40 ml-5 h-full object-cover'
                        to='/brand/Roadster'
                        _focus='none'
                        mr='7'>
                        <Image
                            src='./homeScreenImages/DEALSOFTHEDAY/img-2.jpg'
                            alt='roadstar'
                            // class='w-48 h-full object-cover'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='lg:w-60  xs:w-40 ml-5  h-full object-cover'
                        to='/brand/vero moda'
                        _focus='none'
                        mr='7'>
                        <Image
                            src='./homeScreenImages/DEALSOFTHEDAY/img-3.jpg'
                            alt='vero moda'
                            // class='w-48 h-full object-cover'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='lg:w-60 xs:w-40 ml-5  h-full object-cover'
                        to='/brand/HRX'
                        _focus='none'
                        mr='7'>
                        <Image
                            src='./homeScreenImages/DEALSOFTHEDAY/img-4.jpg'
                            alt='HRX'
                            // class='w-48 h-full object-cover'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/take a break'
                        class='lg:w-60 xs:w-40 ml-5  h-full object-cover'
                        _focus='none'>
                        <Image
                            src='./homeScreenImages/DEALSOFTHEDAY/img-5.jpg'
                            alt='take a break'
                        />
                    </Link>
                </div>
                {/* </Flex> */}
            </Flex>
            {/* biggest deals on top brands */}
            {/* <Flex align='center' flexDir='column'> */}
            <div class='flex flex-col items-center mt-14'>
                <Heading
                    as='h3'
                    class='uppercase xs:text-2xl md:text-3xl lg:text-4xl tracking-thin font-semibold '>
                    biggest deals on top brands
                </Heading>
                {/* <Flex align='center' mt='10' ml='19' wrap='wrap'> */}
                <div class='grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    <Link
                        as={RouterLink}
                        to='/brand/uspolo'
                        class='xs:w-40 lg:w-52 h-full object-cover mr-7 ml-8 focus:no-underline'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-1.jpg'
                            alt='uspolo'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/W'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-2.jpg'
                            alt='W'
                            class='w-48 h-full object-cover'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Levis'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-3.jpg'
                            alt='Levis'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/vero moda'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-4.jpg'
                            alt='vero moda'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Tommy Hilfiger'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-5.jpg'
                            alt='Tommy Hilfiger'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Forever 21'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-4'
                        // ml='12'
                        // mr='7'
                    >
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-6.jpg'
                            alt='Forever 21'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/GAP'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-4'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-7.jpg'
                            alt='GAP'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/nike'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-4'
                        _focus='none'
                        mr='7'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-8.jpg'
                            alt='Nike'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/UCB'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-9.jpg'
                            alt='UCB'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Puma'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7'
                        _focus='none'>
                        <Image
                            src='./homeScreenImages/BIGGEST-DEALS-ON-TOP-BRANDS/img-10.jpg'
                            alt='roadstar'
                        />
                    </Link>
                </div>
            </div>
            {/* categories to bag  */}
            <div class='flex items-center flex-col mt-14'>
                <Heading
                    as='h3'
                    class='uppercase xs:text-2xl md:text-3xl lg:text-4xl tracking-thin font-semibold'>
                    categories to bag
                </Heading>
                <div class='grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    <Link
                        as={RouterLink}
                        to='/categories/shirt'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-1.jpg'
                            alt='shirt'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/tshirt'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-2.jpg'
                            alt='tshirt'
                            class='w-48 h-full object-cover'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/jeans'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-3.jpg'
                            alt='jeans'
                            class='w-48 h-full object-cover'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/shorts'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-4.jpg'
                            alt='shorts'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/shoes'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-5.jpg'
                            alt='shoes'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/Infant Essentials'
                        class='xs:w-40 lg:w-52h-full object-cover focus:no-underline mr-7 mt-8'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-6.jpg'
                            alt='Infant Essentials'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/kurta'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7 mt-8'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-7.jpg'
                            alt='kurta'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/saree'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7 mt-8'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-8.jpg'
                            alt='saree'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/dress'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-7 mt-8'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-9.jpg'
                            alt='dress'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/flats & heels'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mt-8'>
                        <Image
                            src='./homeScreenImages/CATEGORIES-TO-BAG/img-10.jpg'
                            alt='flats & heels'
                        />
                    </Link>
                </div>
            </div>
            {/* explore top brands  */}
            <div class='flex items-center flex-col mt-12'>
                <Heading
                    as='h3'
                    class='uppercase xs:text-2xl md:text-3xl lg:text-4xl tracking-thin font-semibold'>
                    explore top brands
                </Heading>
                <div class='grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    <Link
                        as={RouterLink}
                        to='/brand/nike'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline  mr-7'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-1.jpg'
                            alt='nike'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Levis'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mr-7'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-2.jpg'
                            alt='Levis'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Roadster'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mr-7'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-3.jpg'
                            alt='Roadster'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Jack & Jones'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mr-7'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-4.jpg'
                            alt='Jack & Jones'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/HRX'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mr-7 mt-4'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-5.jpg'
                            alt='HRX'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/ONLY'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline xs:mt-3 lg:mt-8'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-6.jpg'
                            alt='ONLY'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/Anouk'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mr-7 mt-8'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-7.jpg'
                            alt='Anouk'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/M.A.C'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mr-7 mt-8'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-8.jpg'
                            alt='M.A.C'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/W'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mr-7 mt-8'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-9.jpg'
                            alt='W'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/brand/H&M'
                        class='xs:w-40 lg:w-52  h-full object-cover focus:no-underline mt-8'>
                        <Image
                            src='./homeScreenImages/EXPLORE-TOP-BRANDS/img-10.jpg'
                            alt='H&M'
                        />
                    </Link>
                </div>
            </div>
            {/* treading in western wear  */}
            <div class='flex items-center flex-col mt-12'>
                <Heading
                    as='h3'
                    class='uppercase xs:text-2xl md:text-3xl lg:text-4xl tracking-thin font-semibold'>
                    treading in western wear
                </Heading>
                <div class='grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    {/* <Flex align='center' mt='10' ml='6' wrap='wrap'> */}
                    <Link
                        as={RouterLink}
                        to='/'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 '
                        //  _focus='none' ml='12' mr='7'
                    >
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-1.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-2.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-3.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-4.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-5.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 lg:mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-6.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-7.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-8.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-9.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-WESTERN-WEAR/img-10.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    {/* </Flex> */}
                </div>
            </div>
            {/* </Flex> */}
            {/* trending in indian wear  */}
            {/* <Flex align='center' flexDir='column' mt='14'> */}
            <div class='flex items-center flex-col mt-12'>
                <Heading
                    as='h3'
                    class='uppercase xs:text-2xl md:text-3xl lg:text-4xl  tracking-thin font-semibold'>
                    trending in indian wear
                </Heading>
                <div class='grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    <Link
                        as={RouterLink}
                        to='/categories/kurta/gender/men'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-1.jpg'
                            alt='Kurta'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/kurta/gender/men'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-2.jpg'
                            alt='kurta'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        to='/categories/kurta/gender/men'
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-3.jpg'
                            alt='kurta'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-4.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-5.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 lg:mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-6.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-7.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-8.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mr-6 mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-9.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    <Link
                        as={RouterLink}
                        class='xs:w-40 lg:w-52 h-full object-cover focus:no-underline mt-8'>
                        <Image
                            src='./homeScreenImages/TRENDING-IN-INDIAN-WEAR/img-10.jpg'
                            alt='roadstar'
                        />
                    </Link>
                    {/* </Flex> */}
                </div>
            </div>
            {/* </Flex> */}
        </Flex>
    )
}
export default HomeScreen
