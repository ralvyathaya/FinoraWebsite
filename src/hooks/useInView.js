import { useEffect, useRef } from "react"

const useInView = (options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-[20px]")
          entry.target.classList.add("animate-fadeIn")
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return ref
}

export default useInView
