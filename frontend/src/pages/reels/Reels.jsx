import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

// const SAMPLE_REELS = [
//   {
//     id: 1,
//     src: 'https://ik.imagekit.io/u9480hgpk/86775774-0be8-4fd9-8075-5fd9d989fd9f_iQivdEwR2?updatedAt=1759944561839',
//     title: 'Spicy paneer platter — quick behind the scenes at Reel Style Kitchen',
//     store: '#',
//   },
//   {
//     id: 2,
//     src: 'https://ik.imagekit.io/u9480hgpk/86775774-0be8-4fd9-8075-5fd9d989fd9f_iQivdEwR2?updatedAt=1759944561839',
//     title: "Late-night desserts crafted fresh — don't miss today's special",
//     store: '#',
//   },
//   {
//     id: 3,
//     src: '',
//     title: 'Street-style chaat reimagined — bold flavours in every bite',
//     store: '#',
//   },
// ]

export default function Reels() {
  const [videos, setVideos] = useState([])
  const containerRef = useRef(null)
  const sectionRefs = useRef([])
  const videoRefs = useRef([])

  useEffect(() => {
    const root = containerRef.current || null
    const options = { root, threshold: 0.65 }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const _id = Number(entry.target.dataset.index)
        const vid = videoRefs.current[_id]
        if (!vid) return

        if (entry.isIntersecting) {
          try {
            vid.currentTime = 0
            void vid.play()
          } catch (e) {
            /* ignore play errors */
          }
        } else {
          try {
            vid.pause()
            vid.currentTime = 0
          } catch (e) {
            /* ignore */
          }
        }
      })
    }, options)

    sectionRefs.current.forEach((el) => {
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  useEffect(()=>{
    axios.get("http://localhost:3000/api/food/", {withCredentials:true})
    .then(response=>{
      setVideos(response.data.foodItems)
    })
  },[])

  console.log(videos);
  

  return (
    <div ref={containerRef} className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth touch-pan-y bg-black">
      {videos.map((item, _id) => (
        <section key={item._id} data-index={_id} ref={(el) => (sectionRefs.current[_id] = el)} className="relative h-screen snap-start flex items-center justify-center">
          {/* Reel card: portrait on desktop, full-screen on small screens */}
          <div className="snap-center flex-shrink-0 w-full md:w-[420px] md:h-[85vh] h-full max-w-[420px] rounded-2xl overflow-hidden bg-black relative">
            {/* Video element: fills the card */}
            <video
              ref={(el) => (videoRefs.current[_id] = el)}
              src={item.video}
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              muted
              loop
            />

            {/* gradient to help text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Top overlay: description (2 lines) and Visit store button below it */}
            <div className="absolute top-6 left-4 right-4 z-20 flex max-w-[92%] flex-col items-start gap-3">
              <p className="w-full text-sm font-semibold text-white drop-shadow-md line-clamp-2">
                {item.title}
              </p>

              <a
                href={item.store}
                className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:scale-105"
              >
                Visit store
              </a>
            </div>

            {/* Small hint/footer area (bottom) - left empty for now */}
            <div className="absolute bottom-6 left-4 z-20 text-sm text-white/80" />
          </div>
        </section>
      ))}
    </div>
  )
}
