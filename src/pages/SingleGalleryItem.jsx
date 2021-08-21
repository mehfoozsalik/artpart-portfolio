import React from 'react'
import Slider from 'react-slick'
import SampleNextArrow from '../components/SampleNextArrow'
import SamplePrevArrow from '../components/SamplePrevArrow'
import Loading from '../components/Loading'
import { GalleryContext } from '../context/gallery'
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import NotFound from '../components/NotFound'
import back from '../assets/Icons/back.svg'

function SingleGalleryItem() {
  const { project } = React.useContext(GalleryContext)
  const { id } = useParams()
  const history = useHistory()

  const projectsData = project.find((item) => item.id === parseInt(id))
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const relatedproject = project.filter((current) => {
    return current.gallery.id === projectsData.gallery.id
  })
  const filtered = relatedproject.filter((items) => {
    return items.id !== parseInt(id)
  })

  const smallCarosel = {
    className: 'smallcarsel',
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  const settings = {
    className: 'largecarsel',
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 400,
    cssEase: 'linear',
    fade: false,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          infinite: true,
        },
      },
    ],
  }
  if (project.length === 0) {
    return <Loading />
  } else {
    const {
      ProjectTitle,
      ProjectTitleImage,
      SectionAImage,
      SectionATitle,
      SectionADescription,
      SectionBImage,
      SectionBTitle,
      SectionBDescription,
      SectionCImage,
      SectionCTitle,
      SectionCDescription,
      CaroselImages,
    } = projectsData
    const projectTitleImage = ProjectTitleImage.url
    const sectionAImage = SectionAImage.url
    const sectionBImage = SectionBImage.url
    const sectionCImage = SectionCImage.url
    const projectTitleAlternativeText = ProjectTitleImage.alternativeText
    const sectionAAlternativeText = SectionAImage.alternativeText
    const sectionBAlternativeText = SectionBImage.alternativeText
    const sectionCAlternativeText = SectionCImage.alternativeText

    return (
      <>
        <section className='singleGallerySection'>
          <button className='back' onClick={history.goBack}>
            <img src={back} alt='back icon' />
          </button>
          <div className='S-G-Image-Container'>
            <div className='ab'>
              <img src={projectTitleImage} alt={projectTitleAlternativeText} />
            </div>
            <div className='projectTitle'>
              <h3>{ProjectTitle}</h3>
            </div>
          </div>
          <article className='articlesSingle'>
            <div className='divSingleGallerytext'>
              <h2>{SectionATitle}</h2>
              <p>{SectionADescription}</p>
            </div>
            <div className='divSingleGalleryimg'>
              <img src={sectionAImage} alt={sectionAAlternativeText} />
            </div>
          </article>
          <article className='divwrap articlesSingle'>
            <div className='divSingleGallerytext'>
              <h2>{SectionBTitle}</h2>
              <p>{SectionBDescription}</p>
            </div>
            <div className='divSingleGalleryimg'>
              <img src={sectionBImage} alt={sectionBAlternativeText} />
            </div>
          </article>
          <article className='articlesSingle'>
            <div className='divSingleGallerytext'>
              <h2>{SectionCTitle}</h2>
              <p>{SectionCDescription}</p>
            </div>
            <div className='divSingleGalleryimg'>
              <img src={sectionCImage} alt={sectionCAlternativeText} />
            </div>
          </article>
        </section>
        <div className='outsideCarosel'>
          <Slider {...settings}>
            {CaroselImages.map((array) => {
              return (
                <div className='insideCarosel' key={array.id}>
                  <img src={array.url} alt={array.alternativeText} />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className='outsideScarosel'>
          <div className='relatedprojectTitle'>
            <h2>Related Projects</h2>
          </div>
          {relatedproject.length <= 1 ? (
            <NotFound />
          ) : (
            <Slider {...smallCarosel}>
              {filtered.map((items) => {
                const url = items.ProjectTitleImage.url
                const alterText = items.ProjectTitleImage.alternativeText
                return (
                  <div onClick={scrollBackToTop} key={items.id}>
                    <Link className='linkC' to={`/data/${items.id}`}>
                      <div className='smallCinside'>
                        <img src={url} alt={alterText} />
                        <div className='smallcaroseltitle'>
                          <h4>{items.ProjectTitle}</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </Slider>
          )}
        </div>
      </>
    )
  }
}

export default SingleGalleryItem
