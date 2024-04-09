import styled from "@emotion/styled";
import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Wrapper = styled(Box)({
    '& > div': {
        borderRadius: 10
    }
})

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://getwallpapers.com/wallpaper/full/0/6/1/1267873-movie-poster-wallpaper-2880x1800-ipad-retina.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            'https://getwallpapers.com/wallpaper/full/3/5/6/1267911-download-free-movie-poster-wallpaper-1920x1080.jpg',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://getwallpapers.com/wallpaper/full/9/3/4/1267903-widescreen-movie-poster-wallpaper-1920x1080-smartphone.jpg',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://getwallpapers.com/wallpaper/full/d/1/c/1267897-gorgerous-movie-poster-wallpaper-1920x1200-for-iphone-7.jpg',
    },
];


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const SlideBanner = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    },)

    return (
        <Wrapper sx={{ py: 1, px: 3 }} style={{ height: 500 }}>
            <Carousel responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                autoPlay={true}
                keyBoardControl={true}
                slidesToSlide={1}
                autoPlaySpeed={2000}

                style={{ marginBottom: "10px", borderRadius: "10px" }}>
                {/* {images.map((image, index) => (
                    <img key={index} src={image.imgPath} alt="img" style={{ width: "100%", height: "500px" }} />
                ))} */}

                {(loading ? Array.from(new Array(1)) : images).map((image, index) => (<>
                    {image ? (<img key={index} src={image.imgPath} alt="img" style={{ width: "100%", height: "500px" }} />) :
                        (<Skeleton variant="rectangular" width={"100%"} height={500} sx={{ borderRadius: 2, background: "#4c4c4c" }} />)
                    }</>)
                )}
            </Carousel>
        </Wrapper>

    )
}

export default SlideBanner
