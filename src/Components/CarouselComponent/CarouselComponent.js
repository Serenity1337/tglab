import React, { useState } from 'react'
import classes from './CarouselComponent.module.scss'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'
import bg1 from '../../utils/imgs/bg1.jpg'
import bg2 from '../../utils/imgs/bg2.jpg'
import bg3 from '../../utils/imgs/bg3.jpg'

const items = [
  {
    src: `${bg1}`,
    altText: 'Longer text here',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate totam minima rerum aspernatur perferendis delectus voluptates distinctio veniam. Cumque, nostrum?',
  },
  {
    src: `${bg2}`,
    altText: 'Even longer text here',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt deleniti corporis nostrum esse dicta earum dolores accusantium assumenda ratione.',
  },
  {
    src: `${bg3}`,
    altText: 'Long text here',
    caption:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium dolorem expedita harum repellat minima pariatur amet officiis doloremque! Reiciendis, animi.',
  },
]
export const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: '100%', height: '450px', objectFit: 'cover' }}
        />
        <CarouselCaption
          className={classes.carouselCaption}
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    )
  })
  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          className={classes.carouselControl}
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          className={classes.carouselControl}
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}
